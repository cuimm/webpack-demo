const path = require('path')

module.exports = {
  mode: 'development',  // mode 模式：development | production
  devtool: 'eval',  // source-map eval-source-map 等（sourcemap是为了解决开发代码与实际运行代码不一致时帮助我们debug到原始开发代码的技术）
  entry: './src/index.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包输出路径
    filename: 'bundle.js', // 打包输出文件名
  },
  module: {
    // loader 配置
    rules: [
      {
        // 处理css文件
        test: /\.css$/,
        // 执行顺序：从右向左一次执行（也可以说是从下往上）
        use: ['style-loader', 'css-loader'],
      },
      {
        // 处理less资源
        test: /\.less$/,
        // 执行顺序：从后向前依次执行（也可说从右往左，从下往上）
        use: [
          'style-loader', // 创建style标签，将js中的样式资源插入到style标签并添加到head标签
          'css-loader', // 将css资源编译成commonjs模块加载到js中，但仍然保持样式字符串的形式
          'less-loader' // 将less资源编译成css资源
        ]
      },
    ],
  },
}
