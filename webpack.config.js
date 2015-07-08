var path = require('path');
var webpack = require('webpack');

module.exports={
	entry: ["./app/App.js"],
	output:{
		path: path.join(__dirname, 'public'),
		filename:"bundle.js",
	},
	module:{
		loaders:[{
			test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loaders: ['react-hot','babel']
		}]
	}
};