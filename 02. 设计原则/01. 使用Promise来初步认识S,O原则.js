/**
 * Created by MonTage_fz on 2019/3/27
 */
const imgLoad = (src) => {
	return new Promise((resolve, reject) => {
		let img = new Image()
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			reject('图片加载失败')
		}
		img.src = src
	})
}
let src = 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
imgLoad(src).then((img) => {
	document.body.appendChild(img)
	return img
}).then((img) => {
	console.log(img.width);
})