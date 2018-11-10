const webpack = require('webpack');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const Dotenv = require('dotenv-webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = () => ({
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', `${APP_DIR}/Main.jsx`],
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: removeEmpty([
    new CaseSensitivePathsPlugin(),
    new Dotenv({ systemvars: true }),
    new ManifestPlugin({
      seed: {
        name: 'TMDb React app',
        description: 'React app using The Movie Database API',
        display: 'standalone',
        start_url: '/',
        background_color: '#F4F7F6',
      },
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'tmdb-react-app',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      // minify: true,
      navigateFallback: '/',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
  ]),
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@utils': path.resolve(__dirname, 'src/js/utils'),
      '@styles': path.resolve(__dirname, 'src/css'),
    },
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: APP_DIR,
      },
      {
        test: /\.pcss$/,
        use: ['style-loader'],
      },
      {
        test: [/\.pcss$/],
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.pcss$/,
        use: ['postcss-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    inline: true,
    historyApiFallback: {
      index: 'index.html',
    },
    contentBase: BUILD_DIR,
  },
});
