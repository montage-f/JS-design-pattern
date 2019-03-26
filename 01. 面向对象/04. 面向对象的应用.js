/**
 * Created by MonTage_fz on 2019/3/26
 */

class Jquery {
	constructor(element) {
		const $els = Array.from(document.querySelectorAll(element))
		$els.forEach((item, index) => {
			this[index] = item
		})
	}

	append() {

	}

	addClass() {

	}
}

window.$ = (element) => {
	return new Jquery(element)
}
console.log($('p'));