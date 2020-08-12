const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const mode = 'development';

module.exports = {
  mode: mode,
  devtool: 'inline-source-map',
  entry: './index.tsx',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
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
    minimizer: [new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        minimize: true,
        output: {
          comments: mode === 'development',
        },
      },
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
