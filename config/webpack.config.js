const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = 'development';

module.exports = {
  mode: mode,
  devtool: mode === 'development' ? 'inline-source-map' : false,
  entry: './index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    sourcePrefix: '',
    publicPath: '/dist/'
  },
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
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
        exclude: /node_modules/,
      },
    ],
  },
};
