var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    sourcePrefix: ''
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};