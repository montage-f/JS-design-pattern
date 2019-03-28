/**
 * Created by MonTage_fz on 2019/3/28
 */

class SingleObject {
	login() {
		console.log('login...');
	}
}

const single = () => {
	let instance
	return () => {
		if (!instance) {
			instance = new SingleObject()
		}
		return instance
	}
}
// 如果有就直接使用, 如果没有就初始化
let oneSingle = single()
let a = oneSingle()
let b = oneSingle()
a.login()
b.login()
console.log(a === b);