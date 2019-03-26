/**
 * Created by MonTage_fz on 2019/3/25
 */
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,// __dirname表示根目录
		filename: './build/dist.js' // 定义出口文件的名字, 最后的文件格式必须带上, 如.js
	},
	// 模块
	module: {
		// 规则
		rules: [{
			test: /\.js?$/,  //检测.js文件
			exclude: /(node_modules)/, // 忽略node_modules文件
			loader: 'babel-loader', // 当遇到es6语法, 就使用babel-loader进行处理
		}]
	},
	// 插件
	plugins: [
		// 当执行webpack之后, 我们的入口文件 就会被这个index.html自动调用
		new HtmlwebpackPlugin({
			template: './index.html'
		}),
	],
	// 本地服务器, 从根目录里面的./build里面去获取文件
	devServer: {
		contentBase: path.join(__dirname, './build'),
		open: true, // 浏览器自动打开
		port: 9000, // 端口
	}
}