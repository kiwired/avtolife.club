const { join } = require('path');

module.exports = [
	{
		loader: 'style-loader'
	},
	{
		loader: 'css-loader',
		options: {
			importLoaders: 1
		}
	},
	{
		loader: 'postcss-loader',
		options: {
			plugins: [
				require('autoprefixer')({
					overrideBrowserslist: ['last 3 version']
				}),
				require('postcss-import')(),
				require('postcss-preset-env')(),
				require('cssnano')()
			]
		}
	},
	{
		loader: 'stylus-loader'
	}
]
