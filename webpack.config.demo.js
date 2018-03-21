const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    demo: path.resolve(__dirname, 'src/demo/demo.jsx'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/demo'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/demo/index.html'),
      hash: false,
    }),
  ],
};
