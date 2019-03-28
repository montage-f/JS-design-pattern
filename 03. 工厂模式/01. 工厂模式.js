/**
 * Created by MonTage_fz on 2019/3/28
 */
class Product {
	constructor(name) {
		this.name = name
	}

	init() {
		console.log('init')
	}

	fn1() {
		console.log('fn1')
	}

	fn2() {
		console.log('fn2')
	}
}
// 工厂, 这个函数是用来给用户使用的, 用户并不需要知道product里面的是怎么实现的,
class Creater {
	create(name) {
		return new Product(name)
	}
}

const creater = new Creater()
let p = creater.create('pa')
p.init()
console.log(p.name);