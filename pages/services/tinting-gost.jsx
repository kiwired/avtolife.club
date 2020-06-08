import { NextSeo } from 'next-seo'
import Link from 'next/link'

import Modal from '../../forms/call'

import Header from '../../tags/header'
import Footer from '../../tags/footer'

import Head from '../../tags/head'
import Edge from '../../tags/edge'
import Steps from '../../tags/steps'
import About from '../../tags/about'
import Price from '../../tags/price'
import Profit from '../../tags/profit'
import Insta from '../../tags/insta'
import Result from '../../tags/result'
import Team from '../../tags/team'
import Map from '../../tags/map'

const SEO = {
	title: 'Тонировка авто в Омске по ГОСТу',
	keywords: 'Тонировка авто Омск',
	description: 'Компания «AvtoLife» оказывает услуги по тонировке автомобиля в Омске качественной американской пленкой. Тонирование стекол автомобиля производится в соответствие с ГОСТом',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Тонировка авто по ГОСТу'
				text='классическая американская тонировка'
				thumb='/img/full/tinting-gost.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее подходящих пленок',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Технологично',
						label: 'Работаем с лучшими брендами: SunTek, Llumar, UltraVision, ASWF, NDFOS',
					},
					{
						img: '/img/edge-03.svg',
						value: 'Гарантия',
						label: 'Гарантия качества и сроков выполнения',
					}
				]}
			/>

			{/* <Steps
				list={[
					{
						value: 'Диагностика состояния салона',
						label: 'Оценка общего состояния салона, выявляются особо загрязненные участки салона.',
						thumb: '/img/step/tinting-gost/01.jpg'
					},
					{
						value: 'Подготовка и уборка салона автомобиля',
						label: 'Сухая в влажная уборка салона с применением максимально эффективных стредств для чистки.',
						thumb: '/img/step/tinting-gost/01.jpg'
					},
					{
						value: 'Сушка салона и проверка качества выполненных работ',
						thumb: '/img/step/tinting-gost/01.jpg'
					}
				]}
			/> */}

			<About />

			<Price
				title="Стоимость тонирования задней полусферы"
				label="Выберите класс авто:"
				list={[
					{
						thumb: '',
						label: 'Малый',
						value: 3000,
					},
					{
						thumb: '',
						label: 'Средний',
						value: 2700,
					},
					{
						thumb: '',
						label: 'Бизнес',
						value: 3100,
					},
					{
						thumb: '',
						label: 'Паркетник',
						value: 3000,
					},
					{
						thumb: '',
						label: 'Внедорожник',
						value: 3500,
					},
					{
						thumb: '',
						label: 'Представительский',
						value: 3800,
					},
					{
						thumb: '',
						label: 'Лобовое стекло',
						value: 1900,
						multiple: true
					},
					{
						thumb: '',
						label: 'Передние стекла',
						value: 1400,
						multiple: true
					},
				]}
			/>

			<Profit
				list={[
					{
						label: '+100%',
						value: 'Соответствие действующим законодательным нормам'
					},
					{
						label: '+90%',
						value: 'Защита от ультрафиолетовых лучей'
					},
					{
						label: '1 год',
						value: 'Гарантируем качество и долгий срок службы бронирования'
					},
					{
						label: '99%',
						value: 'Клиентов рекомендуют нас друзьям'
					}
				]}
			/>

			<Insta keys="гост" />

			<Result title="Тонировка по ГОСТу" thumb="/img/results/tinting-gost.jpg">
				<p>Качественно сделанная тонировка стекол не только делает внешний вид транспортного средства более презентабельным, но также позволяет защитить водителя от палящих лучей солнца. Кроме того, пассажиры, находящиеся за тонированными стеклами, чувствуют себя более комфортно, поскольку они скрыты от посторонних глаз.Правильно тонированное стекло способно снизить интенсивность света фар от встречных автомобилей, предотвратив ослепление водителя. Солнечный свет также существенно ослабляется, проходя через пленку, применяемую для тонирования авто.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
