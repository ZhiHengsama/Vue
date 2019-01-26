const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module:{
    rules:[{
      test:/\.css$/,
      use:["style-loader","css-loader"]
    },
    {
      test:/\.less/,
      use:["style-loader","css-loader","less-loader"]
    }
  ]
  },
  devServer:{
    port: 1024,
    host: '127.0.0.1',
    open: true,
    compress:true
  },
  // 设置打包模式
  // production : 生产，打包出来的内容是优化压缩的
  // development ：开发调试，打包出来的内容有适当注释、空白、回车，代码看起来友好
  mode: 'development',
  // 设定入口文件位置
  entry: path.join(__dirname,'./src/index.js'),
  // 设定出口文件 目录 和 文件名字 的
  output: {
    // 出口文件目录定义
    path: path.join(__dirname, 'dist'),
    // 出口文件名称定义
    filename: 'bundle.js'
  },
  plugins:[new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html')
  })]
};
