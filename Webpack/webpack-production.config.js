var webpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
    test: [/\.es6$/,/\.js$/],
    exclude:/node_modules/,
    loader: webpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
