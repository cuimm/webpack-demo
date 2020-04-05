const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // 多入口配置
  // entry如果只有一个，就是单入口；否则就是多入口
  // 如果是单入口，chunk的名字就是main
  // 每一个chunk一般都会生成一个文件
  entry: {
    home: './src/home.js',  // chunk名字：home
    login: './src/login.js', // chunk名字：login
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 如果是单入口：filename的值默认为main
    // hash：文件指纹 有三种hash：hash、chunkHash、contentHash
    // hash：代表每次的编译过程，每次编译生成的hash都是一样的，用来避免缓存。
    filename: '[name].[hash:8].js', // 保留8位hash值
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    // 这个插件作用的产出html文件：在编译的时候会读取模版文件
    new HtmlWebpackPlugin({
      // 指定模板文件
      template: './index.html',
      // 产出的文件名
      filename: 'login.html',
      // 为了避免缓存，可以在产出的资源后面添加hash值
      // （因为浏览器或者cdn缓存文件是以URL为依据的，如果产生的URL一样的话缓存就不会失效，不一样的话才会读取新文件）
      hash: true,
      // 可以设置chunks按需引入JS文件，不设置会引入所有产出的JS
      chunks:['login'],
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      // 产出的文件名：home.html
      filename: 'home.html',
      hash: true,
      // 只引入home代码块
      chunks:['home'],
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'test.html',
      hash: true,
      // 此处不设置顺序的话，会按照entry里面配置顺序加载
      chunks: ['login', 'home'],
      // 对引入代码块进行排序的模式
      // 将chunks按引入的顺序排序，不设置这个的话，引入到html的JS可能是错乱排序的
      chunksSortMode:'manual',
    }),
  ],
}
