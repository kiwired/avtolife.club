const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelOpts = require('./babel');
const styles = require('./styles');
const setup = require('./setup');

const dist = join(__dirname, '..', 'dist');
const exclude = /(node_modules|bower_components)/;

module.exports = env => {
	
	const isProd = env && env.production;

	// if (isProd) {
	// 	babelOpts.presets.push('babili');
	// } else {
	// 	styles.unshift({ loader:'style-loader' });
	// }

	return {
		entry: {
			app: './src/index.js',
			vendor: [
				// pull these to a `vendor.js` file
				'preact'
			]
		},
		output: {
			path: dist,
			filename: '[name].[hash].js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: exclude,
					loader: {
						loader: 'babel-loader',
						options: babelOpts
					}
				},
				{
					test: /\.(styl)$/,
					// use: isProd ? ExtractText.extract({ fallback: 'style-loader', use: styles }) : styles
					// use: isProd ? MiniCssExtractPlugin.extract({ fallback: 'style-loader', use: styles }) : styles
					use: styles
				}
			]
		},
		plugins: setup(isProd),
		mode: isProd ? 'production' : 'development',
		stats: {
			colors: true,
			all: false,
			modules: false,
			maxModules: 0,
			errors: true,
			warnings: true,
			// our additional options
			moduleTrace: true,
			errorDetails: true
		},
		devtool: !isProd && 'eval',
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd
		}
	};
};
