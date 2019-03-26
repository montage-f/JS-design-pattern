/**
 * Created by MonTage_fz on 2019/3/26
 */
// 父类
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	eat() {
		alert(`${this.name} eat something`)
	}

	speak() {
		alert(`my name is ${this.name}, age ${this.age}`)
	}
}

// 子类 Student继承Person
class Student extends Person {
	constructor(name, age, number) {
		super(name, age)
		this.number = number
	}

	study() {
		alert(`my school number is ${this.number}`)
	}
}

const xiaoming = new Student('小明', 12, 123456)
xiaoming.eat()
xiaoming.speak()
xiaoming.study()