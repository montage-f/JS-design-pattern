/**
 * Created by MonTage_fz on 2019/3/26
 */
class Person {
	constructor(name, House) {
		this.name = name
		this.House = House
	}

	saySomething() {

	}
}

class A extends Person {
	constructor(name, House) {
		super(name, House)
	}

	saySomething() {
		alert(`I'm A`)
	}
}

class B extends Person {
	constructor(name, House) {
		super(name, House)
	}

	saySomething() {
		alert(`I'm B`)
	}
}

class House {

}

const house = new House()
const person = new Person('人', house)
const a = new A('a', house)
const b = new B('b')