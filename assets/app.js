
let viewport = document.querySelector('meta[name="viewport"]')

let onRatio = () => {
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
	console.log(fontSize)
}

// onRatio = window.requestAnimationFrame(onRatio)

onRatio()
window.addEventListener('load', onRatio)
window.addEventListener('resize', onRatio)