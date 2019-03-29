/**
 * Created by MonTage_fz on 2019/3/29
 */

const readonly = () => {
	return (target, name, descriptor) => {
		// descriptor对象原来的值如下
		// {
		//   value: specifiedFunction,
		//   enumerable: false,
		//   configurable: true,
		//   writable: true
		// };
		console.log(1);
		descriptor.writable = false
	}
}

class Person {
	constructor() {
		this.name = '小红'
		this.age = 12
	}
	// 如果装饰器是一个返回函数, 那么就需要先执行这个外层函数readonly()
	@readonly()
	say() {
		console.log(`我叫: ${this.name}, 我今年: ${this.age}`)
	}
}

let person = new Person()
person.say()
/*read.say= () => {

}
Uncaught TypeError: Cannot assign to person only property 'say' of object '#<Read>'*/
