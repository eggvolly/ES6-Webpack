"use strict"

var path = require('path');
var webpack = require('webpack');

var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('common');

module.exports = {
    entry: [
        './Scripts/main.js'
        ],
	output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    plugins: [commonsPlugin]
}