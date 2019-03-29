/**
 * Created by MonTage_fz on 2019/3/28
 */

class Adaptee {
	specificRequest() {
		return '德国标准插头'
	}
}

class Target {
	constructor() {
		this.adaptee = new Adaptee()
	}

	request() {
		// 去拿旧的信息, 然后变成新的信息然后去使用
		let info = this.adaptee.specificRequest()
		return `${info}-转换器-中国标准插头`
	}
}

class Client {
	constructor() {
		this.target = new Target()
	}
}

const client = new Client()
let result = client.target.request()
console.log(result);