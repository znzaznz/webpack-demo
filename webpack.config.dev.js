const config =  require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path')

//这个是用来开发的时候会进行的操作
module.exports = Object.assign({}, config, {
  mode: 'development',
  devServer: {
    port: '8080',
    hot: true, //开启热更新
    compress: true,  //开启压缩
    open: true //每次打开webpack的时候就能打开页面
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: path.resolve(__dirname, './build'),
          noErrorOnMissing:true,
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
  ]
})