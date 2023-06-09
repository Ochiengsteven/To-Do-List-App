const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    todo: './src/todo.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map', // for debugging
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // for all css files
        use: ['style-loader', 'css-loader'], // use these loaders
      },
      {
        test: /\.(?:ico|png|svg|jpg|jpeg|gif)$/i, // for all images
        type: 'asset/resource', // use asset/resource to emit the file as-is and import it
      },
    ],
  },
};