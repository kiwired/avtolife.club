export default {
	head: {
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
			}
		],
		link: [
			{
				rel: 'stylesheet',
				href: '//fonts.googleapis.com/css?family=Aleo:400,700|Roboto:100,100i,300,300i,400,500,500i&display=swap&subset=cyrillic'
			}
		]
	},

	modules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/axios'
	],

	axios: {
		baseURL: 'https://handmademakers.com',
		credentials: 'same-origin'
	},

	styleResources: {
		stylus: [
			'~/styles/lib/px2rem.styl',
			'~/styles/core/varialbes.styl',
			'~/styles/core/mixin.styl',
		]
	},

	css: [
		// 'element-ui/lib/theme-chalk/index.css',
		{
			src: '~/styles/index.styl',
			lang: 'styl'
		}
	],

	render: {
		bundleRenderer: {
			shouldPreload: (file, type) => {
				return ['script', 'style', 'font'].includes(type)
			}
		}
	},

	plugins: [
		'~/plugins/components.js',
		'~/plugins/element-ui.js',
		'~/plugins/the-mask.js'
	]
}