'use strict';

const path = require('path');

module.exports = {
  entry: './app/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [{
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }]
  },
  resolve: {},
  devtool: 'source-map',
  plugins: []
};