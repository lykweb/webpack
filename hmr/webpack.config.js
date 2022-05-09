const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, './')
	},
	mode: 'development',
	devServer: {
		hot: true, // 'only' boolean = true； 启用热模块替换功能，在构建失败时不刷新页面作为回退，使用 hot: 'only'； 热更新 webpack 会自动启用 HotModuleReplacementPlugin
		host: '192.168.31.150', // 'local-ip' | 'local-ipv4' | 'local-ipv6'；指定ip时可以让你的服务器可以被外部访问
		allowedHosts: 'all', // 'auto' | 'all' [string]；该选项允许将允许访问开发服务器的服务列入白名单。
		port: 8080, // 端口号
		open: true, // 设置其为 true 告诉 dev-server 在服务器已经启动后打开默认浏览器。
		static: './' // boolean string object [string, object]； 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。禁用时 将其设置为 false 
	},
	plugins: [
	],
}