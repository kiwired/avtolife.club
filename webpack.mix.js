let mix = require('laravel-mix')
mix.pug = require('laravel-mix-pug')

require('laravel-mix-imagemin')

mix.setPublicPath('docs')
// Set resource path for fonts to prevent 404 no found fonts
mix.setResourceRoot('/')

mix.browserSync({
	proxy: null,
	server: './docs',
	files: ['docs/**/*']
})

mix.stylus('src/css/index.styl', 'assets/styles.css')
	.js('src/js/app.js', 'assets/app.js')
	.pug('pages/**/*.pug', '/docs', {
		pug: {
			basedir: __dirname,
		}
	})
	// .imagemin('img/**', {
	// 	context: 'src',
	// })
	// .options({
	// 	processCssUrls: false
	// })
	.copyDirectory('static', 'docs');


