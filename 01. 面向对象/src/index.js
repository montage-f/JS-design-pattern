/**
 * Created by MonTage_fz on 2019/3/25
 */
class Person {
	constructor(name) {
		this.name = name
	}

	getName() {
		return this.name
	}
}

const person = new Person('小红')
console.log(person.getName());
