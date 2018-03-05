"use strict";
let webpack = require("webpack");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const Dotenv = require("dotenv-webpack");
let compressionPlugin = require("compression-webpack-plugin");
let path = require("path");
let precss = require("precss");
let postcssmixins = require("postcss-mixins");
let postcsseach = require("postcss-each");
let cssnext = require("postcss-cssnext");

const { ifProduction, ifNotProduction } = getIfUtils(process.env.NODE_ENV);

let BUILD_DIR = path.resolve(__dirname, "public");
let APP_DIR = path.resolve(__dirname, "src/js");

module.exports = {
  devtool: ifProduction("source-map", "source-map"),
  entry: {
    app: ["babel-polyfill", APP_DIR + "/Main.jsx"],
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "react-addons-css-transition-group",
      "classnames",
      "axios"
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
    //publicPath: 'public'
  },
  plugins: removeEmpty([
    new Dotenv({ systemvars: true }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    ifProduction(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    ),
    ifProduction(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      })
    ),
    ifProduction(
      new compressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    )
  ]),
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        include: APP_DIR,
        query: {
          presets: ["es2015", "react", "stage-3"]
        }
      },
      {
        test: /\.pcss$/,
        loader: "style-loader"
      },
      {
        test: /\.pcss$/,
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      },
      {
        test: /\.pcss$/,
        loader: "postcss-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url?limit=25000"
      }
    ]
  },
  postcss: function() {
    return [precss, cssnext];
  },
  devServer: {
    inline: true,
    historyApiFallback: {
      index: "index.html"
    },
    //compress: true,
    contentBase: "./public"
  }
};
