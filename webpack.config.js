'use strict';
let webpack = require('webpack');
let path = require('path');
let precss = require('precss');
let autoprefixer = require('autoprefixer');

let BUILD_DIR = path.resolve(__dirname, 'public');
let APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
  entry: {
    app: APP_DIR + '/Main.js',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-addons-css-transition-group',
      'react-text-truncate',
      'classnames',
      'axios'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: APP_DIR,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  postcss: function () {
      return [precss, autoprefixer];
  },
  devServer: {
    inline: true,
    contentBase: './public'
  }
};
