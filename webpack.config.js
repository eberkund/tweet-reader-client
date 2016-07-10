var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.min.js'
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  module: {
    loaders: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}