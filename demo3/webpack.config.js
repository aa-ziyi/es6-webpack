'use strict';

const path = require('path');

module.exports = {
  entry: {
    index: './app/index.js',
    print: './app/print.js',
  },
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  resolve: {},
  devtool: 'source-map',
  plugins: []
};