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
          }
        ]
      },

      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),

        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
      ]
    }
