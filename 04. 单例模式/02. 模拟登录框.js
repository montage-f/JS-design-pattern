/**
 * Created by MonTage_fz on 2019/3/28
 */
class SingleLogin {
	constructor() {
		this.isShow = false
	}

	show() {
		if (this.isShow) {
			alert('登录框已经实现')
			return
		}
		this.isShow = true
		console.log('登陆成功~')
	}

	hide() {
		if (this.isShow) {
			console.log('登录取消~')
			this.isShow = false
			return
		}
		alert('登录已经取消')
	}
}

let login = () => {
	let instance
	return () => {
		if (!instance) {
			instance = new SingleLogin()
		}
		return instance
	}
}
// 这个one是唯一的一个实例
let one = login()
let a = one()
let b = one()
a.show()
b.hide()
console.log(a === b);