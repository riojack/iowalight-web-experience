const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './index.js',
  externals: { react: 'React' },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    sourcePrefix: ''
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        minimize: true,
        output: {
          comments: false,
        },
      },
    })],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
