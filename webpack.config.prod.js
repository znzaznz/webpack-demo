const  config =  require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path')

//这个是用于生产环境的操作
module.exports = Object.assign({},config,{
  mode:'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
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
  ],
})