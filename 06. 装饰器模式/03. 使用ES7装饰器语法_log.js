/**
 * Created by MonTage_fz on 2019/3/29
 */

/**
 *@param target 装饰的目标
 *@param name 所要修饰的属性名
 *@param descriptor 该属性的描述对象
 */
const log = (target, name, descriptor) => {
	console.log(target);
	console.log(name);
	console.log(descriptor.value);
	const oldValue = descriptor.value
	descriptor.value = function () {
		console.log(`Calling ${name} with`, arguments, this)
		return oldValue.apply(this, arguments)
	}
}

class Math {
	constructor() {
	}

	@log
	add(a, b) {
		return a + b
	}
}

let math = new Math()
console.log(math.add(2, 5));
