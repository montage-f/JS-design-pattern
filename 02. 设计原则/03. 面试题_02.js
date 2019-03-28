/**
 * Created by MonTage_fz on 2019/3/27
 */

/*
* 某停车场, 分3层, 每层100车位
* 每个车位都能监控到车辆的驶入和离开
* 车辆进入前, 显示每层的空余车位数量
* 车辆进入时, 摄像头可识别车牌号和时间
* 车辆出来时, 出口显示器显示车牌号和停车时长*/

// 停车场
class Park {
	constructor(floors = []) {
		this.floors = floors
		this.camera = new Camera()
		this.screen = new Screen()
		this.carInfo = {}
	}

	// 车进入
	in(car) {
		// 拿到车辆信息: 车牌号, 进入时间
		const carInfo = this.camera.show(car)
		// 随机听到某个车位
		const i = Math.floor(Math.random() * 100 % 100)
		const place = this.floors[car.floor - 1].places[i]
		place.in()
		this.emptyNum()
		carInfo.place = place
		this.carInfo[car.num] = carInfo

	}

	// 车驶出
	out(car) {
		// 获取信息
		const carInfo = this.carInfo[car.num]
		const place = carInfo.place
		place.out()
		this.emptyNum()
		this.screen.show(car, carInfo.inTime)
	}

	emptyNum() {
		const message = this.floors.map(floor => `${floor.index}层还有${floor.emptyPlaceNum()}个车位`).join('\n')
		console.log(message);
	}
}

// 车
class Car {
	constructor(num, floor) {
		// 车牌号
		this.num = num
		this.floor = floor
	}
}

// 停车场的某层
class Floor {
	constructor(index, places) {
		// 某层
		this.index = index
		// 多少个位置
		this.places = places
	}

	// 有多少个空位
	emptyPlaceNum() {
		let num = 0
		this.places.forEach(p => {
			if (p.empty) {
				num++
			}
		})
		return num
	}
}

// 停车场里的每某层的每某个车位
class Place {
	constructor() {
		// 车位是否为空
		this.empty = true
	}

	//车辆进入
	in() {
		this.empty = false
	}

	// 车辆驶出
	out() {
		this.empty = true
	}
}

// 入口摄像头
class Camera {
	// 展示每一层的剩余车位数
	show(car) {
		return {
			carNum: car.num, // 车牌号
			inTime: new Date().getTime(), // 车辆进入时间
		}
	}
}

// 出口显示器
class Screen {
	show(car, inTime) {
		console.log(`车牌号:${car.num}-停车时间:${new Date().getTime() - inTime}`)
	}
}

// 三层停车场, 每层100个车位
let floors = []
for (let i = 0; i < 3; i++) {
	let places = []
	for (let j = 0; j < 100; j++) {
		places.push(new Place())
	}
	floors.push(new Floor(i + 1, places))
}
const park = new Park(floors)
const car1 = new Car(100, 1)
const car2 = new Car(100, 2)
const car3 = new Car(100, 3)
const car4 = new Car(100, 3)
park.in(car1)
park.in(car2)
park.in(car3)
park.in(car4)
