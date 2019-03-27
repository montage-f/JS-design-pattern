/**
 * Created by MonTage_fz on 2019/3/27
 */

/*01. 打车时, 可以打专车或者快车. 任何车都有车牌号和名称
  02. 不同车价格不同, 快车每公里1元, 专车每公里2元
  03. 行程开始时, 显示车辆信息.
  04. 行程结束时, 显示打车金额(假定行程就5公里)
  */

class Car {
	constructor(name, number) {
		this.name = name
		this.number = number

	}
}

class FastCar extends Car {
	constructor(name, number, price) {
		super(name, number)
		this.price = price
	}
}

class SlowCar extends Car {
	constructor(name, number, price) {
		super(name, number)
		this.price = price
	}
}

class Travel {
	constructor(Car) {
		this.Car = Car
	}

	start() {
		console.log(`我是${this.Car.name}, 我的起步费是${this.Car.price}`)
	}

	end() {
		console.log(`行程结束行驶5公里,总计费用${this.Car.price * 5}`)
	}
}

const fastCar = new FastCar('快车', 123, 2)
const slowCar = new SlowCar('慢车', 321, 1)
const fastCarTravel = new Travel(fastCar)
fastCarTravel.start()
fastCarTravel.end()


const slowCarTravel = new Travel(slowCar)
slowCarTravel.start()
slowCarTravel.end()
