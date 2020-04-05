const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/1.demo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
