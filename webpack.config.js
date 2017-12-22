'use strict';

var debug = process.env.NODE_ENV !== 'production';

var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  context: __dirname + '/src',
  entry: 
    // 'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, "/src/index.js")
  ,
  output: { 
    path: path.join(__dirname, '/public/'), 
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-decorators-legacy', 'babel-plugin-transform-object-rest-spread'],
        }
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  }, 
};