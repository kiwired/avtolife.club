import { useEffect } from 'react'
import { useRouter } from 'next/router'

const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA

const YandexMetrika = () => {

	const router = useRouter()

	useEffect(() => {

		if (!yandexId) return

		window['ym'] = window['ym'] || function () { (window['ym'].a = window['ym'].a || []).push(arguments) }
		window['ym'].l = 1 * new Date();

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

		const onRouteChange = () => {
			ym(yandexId, 'hit', router.route)
		}

		router.events.on('routeChangeComplete', onRouteChange)

		return () => router.events.off('routeChangeComplete', onRouteChange)
	}, [router.events])

	return null
}

export default YandexMetrika