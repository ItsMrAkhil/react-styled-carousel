const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    path.join(process.cwd(), 'src', 'example.js'),
  ],
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.(css)$/,
        include: /node_modules/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'React Styled Carousel',
    }),
  ],
  devServer: {
    hot: true,
    port: 9000,
    open: true,
    overlay: true,
    stats: "errors-only",
  }
}
