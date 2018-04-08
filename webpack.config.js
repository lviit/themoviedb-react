"use strict";
const webpack = require("webpack");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const Dotenv = require("dotenv-webpack");
const compressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const path = require("path");
let BUILD_DIR = path.resolve(__dirname, "public");
let APP_DIR = path.resolve(__dirname, "src/js");
module.exports = (env, argv) => {
  const { ifProduction, ifNotProduction } = getIfUtils(argv.mode);
  return {
    devtool: "source-map",
    entry: {
      app: ["babel-polyfill", APP_DIR + "/Main.tsx"]
    },
    output: {
      path: BUILD_DIR,
      publicPath: "/",
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
      new CaseSensitivePathsPlugin(),
      new Dotenv({ systemvars: true }),
      new HtmlWebpackPlugin({
        template: "index.ejs",
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
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@utils": path.resolve(__dirname, "src/js/utils"),
        "@styles": path.resolve(__dirname, "src/css")
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader"
            }
          ]
        },
        {
          test: /.jsx?$/,
          loader: "babel-loader",
          include: APP_DIR
        },
        {
          test: /\.ts$|\.tsx$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: [/\.pcss$/],
          use: [
            'style-loader',
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true
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
      contentBase: BUILD_DIR
    }
  };
};
