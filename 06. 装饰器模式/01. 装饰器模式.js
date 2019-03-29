/**
 * Created by MonTage_fz on 2019/3/29
 */

class Circle {
	draw() {
		console.log('画一个圆形');
	}
}

class Decorator {
	constructor(circle) {
		this.circle = circle
	}

	draw() {
		this.circle.draw()
		this.setRedBorder(this.circle)
	}

	setRedBorder(circle) {
		console.log('设置红色边框');

	}
}

let circle = new Circle()
circle.draw()
console.log('-----------华丽分割线-----------')

let decorator = new Decorator(circle)
decorator.draw()


let show = (target) => {
	// 可以往这个类上添加静态的属性和方法
	target.setGreenBorder = () => {
		console.log('设置绿色边框');
	}
}

@show
class Demo {
	constructor() {
		this.name = 123
	}

	draw() {
		console.log('画了一个圆圈');
	}
}

let dom = new Demo()
Demo.setGreenBorder()
// dom.setGreenBorder() // 实例无法访问


// 带参数的装饰器
const testDec = (isTrue) => {
	return (target) => {
		target.isTrue = isTrue
	}
}

@testDec(false)
class Dec {
	constructor() {

	}
}

console.log(Dec.isTrue);


