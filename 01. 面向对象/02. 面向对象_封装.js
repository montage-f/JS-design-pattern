/**
 * Created by MonTage_fz on 2019/3/26
 */
// 父类 本文件移动到typescript 文档内执行
class Person {
	name;
	age;
	protected weight; // 受保护的属性, 只能是子属性访问
	constructor(name, age,weight) {
		this.name = name
		this.age = age
		this.weight=weight
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
	number;
	private girlFriend; // 私有属性, 只能有自己访问
	constructor(name, age,weight, number) {
		super(name, age, weight)
		this.number = number
		this.girlFriend='小芳'
	}

	study() {
		alert(`my school number is ${this.number}`)
	}
	girlFriendWeight(){
		alert(`my girlFriend is ${this.girlFriend}, weight${this.weight}`)
	}
}

const xiaoming = new Student('小明', 12, 120,12345)
xiaoming.girlFriend