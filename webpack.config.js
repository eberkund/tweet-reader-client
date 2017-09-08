const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'tweet-reader-client.min.js'
  },

  module: {
    rules: [
      {
        test: /\.handlebars$/,
        use: ['handlebars-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
}
