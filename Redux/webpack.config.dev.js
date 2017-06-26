import webpack from 'webpack';
import path from 'path';

var CleanWebpackPlugin = require("clean-webpack-plugin");
var DashboardPlugin = require('webpack-dashboard/plugin');

let pathsToClean = [
    'dist',
    'build'
];

let cleanOptions = {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false
};

const config =  {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: true, //true to reduce noise to console 
  //ENTRY
  entry: [
    'eventsource-polyfill', // IE
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  
  target: 'web',
  //OUTPUT
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },

//PLUGINS
  plugins: [
    new DashboardPlugin(),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin() //for detailed error message in client
  ],
  //MODULES
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
}

module.exports = config;