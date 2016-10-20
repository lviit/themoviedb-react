'use strict';
let webpack = require('webpack');
let path = require('path');
let precss = require('precss');
let autoprefixer = require('autoprefixer');

let BUILD_DIR = path.resolve(__dirname, 'public');
let APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
  entry: APP_DIR + '/main.js',
  output: { path: BUILD_DIR, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: APP_DIR,
        query: {
          presets: ['es2015', 'react']
        }
      },
			{
				test:   /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
    ]
  },
	postcss: function () {
			return [precss, autoprefixer];
	}
};