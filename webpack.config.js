import path from 'path'
import webpack from 'webpack'

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'tweet-reader-client.min.js'
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  resolve: {
    alias: {
      moment: path.join(__dirname, 'node_modules/moment/min/moment.min.js')
    }
  },

  module: {
    loaders: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}
