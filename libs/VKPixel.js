// @ts-nocheck
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const pixelId = process.env.NEXT_PUBLIC_VK_PIXEL

const VKPixel = () => {

	const router = useRouter()

	useEffect(() => {

		if (!pixelId) return

		const onRouteChange = () => {
			VK.Retargeting.Hit()
		}

		const t = document.createElement('script')
		t.type = 'text/javascript'
		t.async = true
		t.src = 'https://vk.com/js/api/openapi.js?169'

		t.onload = () => {
			VK.Retargeting.Init(pixelId)
			VK.Retargeting.Hit()
		}

		document.head.appendChild(t)

		router.events.on('routeChangeComplete', onRouteChange)

		return () => router.events.off('routeChangeComplete', onRouteChange)
	}, [router.events])

	return null
}

export default VKPixel