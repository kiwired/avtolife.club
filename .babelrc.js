module.exports = {
	presets: [
		'next/babel'
	],
	plugins: [
		[
			'transform-define',
			{
				'process.env.GOOGLE_API': process.env.GOOGLE_API
			}
		]
	]
}