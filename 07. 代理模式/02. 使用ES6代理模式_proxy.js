/**
 * Created by MonTage_fz on 2019/3/29
 */
// 明星
const star = {
	name: '张奕欢',
	age: 18,
	phone: '110'
}

// 经纪人
const angent = new Proxy(star, {
	get(target, key) {
		let info = {
			phone: '119',
			prise: 100000
		}
		return info[key] || target[key]
	},
	// 严格模式下，set代理如果没有返回true，就会报错
	set(target, key, value) {
		if (key === 'customPrice') {
			if (value < 100000) {
				throw new Error('价格太低')
			} else {
				target[key] = value
				return true
			}
		}
	}
})
console.log(angent.phone);
console.log(angent.prise);
console.log(angent.name);
console.log(angent.age);
angent.customPrice = 100000000
console.log(star);