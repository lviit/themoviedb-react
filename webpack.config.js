'use strict';
let webpack = require('webpack');
let path = require('path');
let precss = require('precss');
let autoprefixer = require('autoprefixer');
let values = require('postcss-modules-values');
let postcssnested = require('postcss-nested');

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
        test:   /\.pcss$/,
        loader: "style-loader"
      },
      {
        test:   /\.pcss$/,
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test:   /\.pcss$/,
        loader: "postcss-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  postcss: function () {
      return [precss, values, autoprefixer];
  },
  devServer: {
    inline: true,
    contentBase: './public'
  }
};
