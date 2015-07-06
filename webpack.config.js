var path = require('path');
var webpack = require('webpack');

module.exports={
devtool: 'eval',
	entry: ['webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
		  'webpack/hot/only-dev-server',
		  "./app/App.js"],
	output:{
		path: path.join(__dirname, 'public'),
		filename:"bundle.js",
		publicPath: 'http://localhost:3000/public/'
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
  	],
	module:{
		loaders:[{
			test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loaders: ['react-hot','babel']
		}]
	}
};