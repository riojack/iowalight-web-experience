const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = 'development';

module.exports = {
  mode: mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  entry: './index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    sourcePrefix: '',
    publicPath: '/dist/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 512
    },
    minimizer: [new TerserPlugin({
      terserOptions: {
        output: {
          comments: false
        },
      },
      extractComments: false
    })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
