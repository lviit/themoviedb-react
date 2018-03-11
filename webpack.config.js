"use strict";
const webpack = require("webpack");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const Dotenv = require("dotenv-webpack");
const compressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

let BUILD_DIR = path.resolve(__dirname, "public");
let APP_DIR = path.resolve(__dirname, "src/js");

module.exports = (env, argv) => {
  const { ifProduction, ifNotProduction } = getIfUtils(argv.mode);

  return {
    devtool: "source-map",
    entry: {
      app: ["babel-polyfill", APP_DIR + "/Main.jsx"]
    },
    output: {
      path: BUILD_DIR,
      filename: "[name].js",
      chunkFilename: "[name].js"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    },
    plugins: removeEmpty([
      new Dotenv({ systemvars: true }),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true
        }
      }),
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
          use: ["style-loader"]
        },
        {
          test: [/\.pcss$/],
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          ]
        },
        {
          test: /\.pcss$/,
          use: ["postcss-loader"]
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
    devServer: {
      inline: true,
      historyApiFallback: {
        index: "index.html"
      },
      //compress: true,
      contentBase: "./public"
    }
  };
};
