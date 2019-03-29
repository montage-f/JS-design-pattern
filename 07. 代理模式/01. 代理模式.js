/**
 * Created by MonTage_fz on 2019/3/29
 */

class ReadImg {
	constructor(fileName) {
		this.fileName = fileName
		this.loadFromDisk()
	}

	display() {
		console.log(`display...` + this.fileName);
	}

	loadFromDisk() {
		console.log(`loading...` + this.fileName);
	}
}

class ProxyImg {
	constructor(fileName) {
		this.readImg = new ReadImg(fileName)
	}

	display() {
		this.readImg.display()
	}
}

const proxyImg = new ProxyImg('1.png')
proxyImg.display()


