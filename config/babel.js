module.exports = {
	presets: [
		'@babel/env'
	],
	plugins: [
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'h'
			}
		],
		'@babel/plugin-proposal-class-properties'
	]
};
