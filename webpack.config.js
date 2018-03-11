"use strict";
const webpack = require("webpack");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const Dotenv = require("dotenv-webpack");
const compressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const precss = require("precss");
const postcssmixins = require("postcss-mixins");
const postcsseach = require("postcss-each");
const cssnext = require("postcss-cssnext");

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
    filename: "[id].js",
    chunkFilename: "[id].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: removeEmpty([
    new Dotenv({ systemvars: true })
    //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    /*
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
    ) */
  ]),
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
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
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 25000
            }
          }
        ]
      }
    ]
  },
  /*
  postcss: function() {
    return [precss, cssnext];
  }, */
  devServer: {
    inline: true,
    historyApiFallback: {
      index: "index.html"
    },
    //compress: true,
    contentBase: "./public"
  }
};
