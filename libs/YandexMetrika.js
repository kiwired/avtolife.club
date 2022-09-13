import { useEffect } from 'react'
// import { useRouter } from 'next/router'

const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA

const YandexMetrika = () => {

	useEffect(() => {

		if (!yandexId) return

		const script = document.createElement('script')
		script.type = 'text/javascript'
		script.async = true
		script.src = 'https://mc.yandex.ru/metrika/tag.js'

		script.addEventListener('load', () => {
			ym(yandexId, 'init', {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true
			})
		})

		document.head.appendChild(script)

		return () => {}
	}, [])

	return null
}

export default YandexMetrika