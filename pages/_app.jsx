import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {
	DefaultSeo,
	CorporateContactJsonLd,
	LocalBusinessJsonLd,
	SocialProfileJsonLd
} from 'next-seo'

import '../styles/index.scss'

const SEO = {
	titleTemplate: '%s',
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		site_name: 'AvtoLife',
	}
}

export default ({ Component, pageProps }) => {

	const [viewport, setViewport] = React.useState('user-scalable=no, width=1280')

	useEffect(() => {
		const onResize = () => {
			let width = window.innerWidth || document.documentElement.innerWidth
			let meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
			let fontSize = (width / 480 * 100) + '%'

			if (width > 640) {
				fontSize = (width / 1280 * 100) + '%'
				meta = 'user-scalable=no, width=1280'
			}

			setViewport(meta)
			document.documentElement.style.fontSize = fontSize
		}

		window.addEventListener('load', onResize)
		window.addEventListener('resize', onResize)
	})

	return (
		<>
			<Head>
				<meta name="viewport" content={viewport} />
				<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Aleo:400,700|Roboto:100,100i,300,300i,400,500,500i&display=swap&subset=cyrillic" />
			</Head>
			<DefaultSeo {...SEO} />
			<CorporateContactJsonLd
				url="https://avtolife.club/"
				logo="https://avtolife.club/img/logo.svg"
				contactPoint={[
					{
						telephone: '+7(3812)49-25-00',
						contactType: 'customer service',
						areaServed: 'RU',
						availableLanguage: ['Russia'],
					},
					{
						telephone: '+7(908)315-63-07',
						contactType: 'customer service',
						areaServed: 'RU',
						availableLanguage: ['Russia'],
					},
				]}
			/>
			<LocalBusinessJsonLd
				type="AutomotiveBusiness"
				id="https://avtolife.club/"
				name="AvtoLife"
				description="Студия стайлинга и детейлинга"
				url="https://avtolife.club/"
				telephone="+73812492500"
				address={{
					streetAddress: 'ул. Химиков 60',
					addressLocality: 'Омск',
					addressRegion: 'Омская область',
					postalCode: '644000',
					addressCountry: 'RU',
				}}
				geo={{
					latitude: '55.0568497',
					longitude: '73.3055238',
				}}
				images={[]}
				openingHours={[
					{
						opens: '10:00',
						closes: '20:00',
						dayOfWeek: [
							'Monday',
							'Tuesday',
							'Wednesday',
							'Thursday',
							'Friday',
							'Saturday',
							'Sunday'
						],
						validFrom: '2020-01-01',
						validThrough: '2026-01-01',
					}
				]}
			/>
			<SocialProfileJsonLd
				type="Organization"
				name="AvtoLife"
				url="https://avtolife.club/"
				sameAs={[
					'https://vk.com/clubcarbon',
					'https://instagram.com/avtolife.club',
					'https://ok.ru/avtolife55',
					'https://youtube.com/user/avtolifeclub/'
				]}
			/>
			<Component {...pageProps} />
		</>
	)
}