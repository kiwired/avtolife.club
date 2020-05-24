const throttle = (callback) => {
	var timeout
	return function () {
		// If there's a timer, cancel it
		if (timeout) {
			window.cancelAnimationFrame(timeout)
		}
		// Setup the new requestAnimationFrame()
		timeout = window.requestAnimationFrame(callback)
	}
}


let viewport = document.querySelector('meta[name="viewport"]')

let onRatio = throttle(() => {
	let fontSize = 100
	let meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0'

	viewport.setAttribute('content', meta)
	document.documentElement.style.fontSize = fontSize

	let width = window.innerWidth || document.documentElement.innerWidth

	if (width > 640) {
		fontSize = (width / 1280) * 100 + '%'
		meta = 'user-scalable=no, width=1280'
	} else {
		fontSize = (width / 480) * 100 + '%'
	}

	viewport.setAttribute('content', meta)
	document.documentElement.style.fontSize = fontSize
})

onRatio()
window.addEventListener('load', onRatio)
window.addEventListener('resize', onRatio)





/*(() => {

	let url = document.URL
	let idx = url.indexOf("#")
	let hash = idx != -1 ? url.substring(idx + 1) : ""

	if (hash !== '') {
		// let $element = $(`#${hash}`)

		// if ($element.length === 0) {
		// 	return
		// }

		// if (!$element.is(':visible')) {
		// 	$element.addClass('active')
		// }

		// console.log('has', $element)

		// if ($element.hasClass('modal')) {
		// 	$element.modal()
		// }

		// let scrollTop = $element.offset().top

		// $('html, body').stop().animate({ scrollTop }, 150, 'swing')
	}


	// $('a[href*="#"]:not([href="#"])').on('click touch', function (event) {
	// 	let $this = $(this)
	// 	let $target = $($this.attr('href'))
	// 	// console.log('click', $this.attr('data-toggle'), $target)

	// 	if ($this.attr('data-toggle') !== undefined) {
	// 		event.preventDefault()
	// 		$this.toggleClass('is-active')
	// 		$target.toggleClass('is-active')

	// 		let $input = $target.find('input[type="text"], input[type="email"]')

	// 		if ($input.length) {
	// 			$input.focus()
	// 		}

	// 		return
	// 	}

	// 	// if (!$target.length) {
	// 	// 	return
	// 	// }

	// 	if ($target.hasClass('modal')) {
	// 		event.preventDefault()
	// 		$target.modal()
	// 		return
	// 	}

	// 	if ($target.is(':visible')) {
	// 		event.preventDefault()

	// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	// 			if ($target.length) {
	// 				$('html, body').animate({ scrollTop: $target.offset().top - 50 }, 'swing')
	// 				return false
	// 			}
	// 		}
	// 		return
	// 	}
	// })
})*/