const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: ['babel-polyfill', './src/index.js', './src/scss/main.scss'],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public'
  },

  devtool: 'sourcemap',

  module: {

    rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: "babel-loader"
         }                                             
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'responsive-loader',
              quality: 15
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]

  },
  plugins: [

    new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './images'
      },
      {
        from: './src/favicon.ico',
        to: './favicon.ico'
      }
    ]),
    
    new ImageminPlugin(
      { 
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '55-100'
        }
      }
      )

  ]

}