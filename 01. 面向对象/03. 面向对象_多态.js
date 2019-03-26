/**
 * Created by MonTage_fz on 2019/3/26
 */
// 下面子类允许重写父类的方法
class Person {
	say() {
		console.log(`我是Person`)
	}
}

// 子类 Student继承Person
class Student extends Person {
	say() {
		console.log('我是Student')
	}

}

// 子类 Student继承Person
class Teacher extends Person {
	say() {
		console.log('我是Teacher')
	}
}

const student = new Student()
const teacher = new Teacher()
student.say()
teacher.say()
