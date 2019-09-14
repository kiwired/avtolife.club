const webpack = require('webpack');
// const ExtractText = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const SWPrecache = require('sw-precache-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const HTML = require('html-webpack-plugin');
// const uglify = require('./uglify');

module.exports = isProd => {
	// base plugins array
	const plugins = [
		new CleanWebpackPlugin(),
		new Copy([{
			context: 'src/static/',
			from: '**/*.*'
		}]),
		// new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
		new HTML({
			template: 'src/index.html'
		}),
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
		// })
	];

	if (isProd) {
		plugins.push(
			// new webpack.LoaderOptionsPlugin({ minimize:true }),
			// new webpack.optimize.ModuleConcatenationPlugin(),
			// new webpack.optimize.UglifyJsPlugin(uglify),
			new MiniCssExtractPlugin({
				// 'styles.[hash].css'
				// Options similar to the same options in webpackOptions.output
				// all options are optional
				filename: '[name].[hash].css',
				chunkFilename: '[name].[hash].[id].css',
				ignoreOrder: false, // Enable to remove warnings about conflicting order
			}),
			new GenerateSW()
		);
	} else {
		// dev only
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			// new webpack.NamedModulesPlugin()
		);
	}

	return plugins;
};
