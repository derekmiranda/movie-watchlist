const path = require('path');
const loadedEnv = require('dotenv').load(
  { path: path.join(__dirname, 'config', `.${process.env.NODE_ENV}_env`) }
);
const webpack = require('webpack');

const loadedEnvVars = Object.keys(loadedEnv.parsed).reduce((accum, key) => {
  accum[key] = JSON.stringify(loadedEnv.parsed[key]);
  return accum;
}, {});

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
      'process.env': Object.assign({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }, loadedEnvVars),
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