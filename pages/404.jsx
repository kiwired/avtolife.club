import { NextSeo } from 'next-seo'

import Header from '../tags/header'
import Footer from '../tags/footer'

import Head from '../tags/head'
import Map from '../tags/map'

const SEO = {
	title: 'Страница не найдена',
	keywords: '',
	description: 'Ошибка 404. Страница не найдена',
}

export default function NotFound() {

	return (
		<>

			<NextSeo config={SEO} />

			<Header />

			<Head
				title='404'
				text='Страница не найдена'
				// thumb='/img/full/protection.jpg'
				// action='Расчитать стоимость'
			/>


			<Map />
			<Footer />

		</>
	)
}
