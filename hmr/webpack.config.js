const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, './')
	},
	mode: 'development',
	devServer: {
		hot: true, // 热更新 webpack 会自动启用 HotModuleReplacementPlugin
		static: './'
	},
	plugins: [
	],
}