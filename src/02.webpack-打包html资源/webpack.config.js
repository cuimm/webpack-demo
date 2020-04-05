const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /.\css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    // 这个插件的作用的产出html：在编译的时候会读取编译模版
    new HtmlWebpackPlugin({
      template: './index.html', // 指定模版文件。复制指定template对应的index.html并自动引入所有打包后的资源(js/css)
      filename: 'test.html', // 指定打包后文件名
      // hash: true, // 为了避免缓存 在产出的文件后面可以加上hash
      // chunks: ['index']
    })
  ],
}
