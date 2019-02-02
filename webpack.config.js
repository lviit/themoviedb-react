const webpack = require("webpack");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");
const Dotenv = require("dotenv-webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "public");
const APP_DIR = path.resolve(__dirname, "src/js");
const themeColor = "#2B2B2A";

module.exports = () => ({
  devtool: "source-map",
  entry: {
    app: ["babel-polyfill", `${APP_DIR}/Main.tsx`]
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
    new WebpackPwaManifest({
      name: "TMDb React app",
      short_name: "TMDb React",
      description: "React app using The Movie Database API",
      display: "standalone",
      start_url: "/",
      background_color: "#F4F7F6",
      theme_color: themeColor,
      fingerprints: false,
      "index.html": "/index.html",
      "app.js": "/app.js",
      "vendor.js": "/vendor.js",
      icons: [
        {
          src: path.resolve("src/img/icon.png"),
          sizes: [192, 512]
        }
      ]
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: "tmdb-react-app",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      // minify: true,
      navigateFallback: "/",
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    }),
    new HtmlWebpackPlugin({
      template: "index.ejs",
      themeColor,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new CompressionPlugin({
      test: /\.ts(\?.*)?$/i
    })
  ]),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
    alias: {
      "@utils": path.resolve(__dirname, "src/js/utils"),
      "@styles": path.resolve(__dirname, "src/css"),
      "@img": path.resolve(__dirname, "src/img")
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.pcss$/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"]
      },
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
});
