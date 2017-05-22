"use strict"

var path = require('path');

module.exports = {
    entry: [
        './Scripts/main.js'
        ],
	output: {
        filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}