const path = require('path');
require('dotenv').load({ path: path.join(__dirname, 'config', `.${process.env.NODE_ENV}_env`) });

const webpack = require('webpack');

const WDS_PORT = 8000;

module.exports = {
  entry: [
    './client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: 'localhost:3000/movies',
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [ path.resolve(__dirname, './client') ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        include: [ path.resolve(__dirname, './client/css') ],
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
  },
}