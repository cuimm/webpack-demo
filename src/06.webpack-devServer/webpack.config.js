const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',  // 单入口：不指定filename的话，对应的生成的chunk名字是main
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    })
  ],
  // 开发服务器配置（自动化：自动化编译，自动打开浏览器，自动刷新浏览器）
  // npm install webpack-dev-server -D
  // 如果使用的devServer，那么所有产出的文件都会写到内存中，而不是写到硬盘上（内存中速度快）
  // 启动命令：npx webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 配置开发服务器运行时的文件根目录
    host: 'localhost',  // 开发服务器监听的主机地址
    port: 8888, // 开发服务器监听的端口号
    open: true, // 编译完后默认启动浏览器
    compress: true, // 开发服务器是否启动gzip压缩
  }
}
