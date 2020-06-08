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
	title: 'Шумоизоляция автомобиля в Омске',
	keywords: 'Шумоизоляция автомобиля',
	description: 'Компания «AvtoLife» оказывает услуги по шумоизоляции автомобилей всех типов и классов в Омске. Несколько видов шумоизоляции – ценовые предложения от эконом до люкс. Предоставляется фотоотчет',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Шумоизоляция авто'
				text='мы даем 100% гарантию'
				thumb='/img/full/soundproofing.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективных материалов',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Экологично',
						label: 'Работаем с лучшими брендами: ***********',
					},
					{
						img: '/img/edge-03.svg',
						value: 'Гарантия',
						label: 'Гарантия качества и сроков выполнения',
					}
				]}
			/>

			<Steps
				list={[
					{
						value: 'Диагностика состояния салона',
						label: '',
						thumb: '/img/step/soundproofing/01.jpg'
					},
					{
						value: 'Подготовка салона автомобиля',
						label: '',
						thumb: '/img/step/soundproofing/01.jpg'
					},
					{
						value: 'Нанесение вибро и шумо изоляционных материалов',
						thumb: '/img/step/soundproofing/01.jpg'
					}
				]}
			/>

			<About />

			<Price
				title="Узнать стоимость шумоизоляции"
				label="Выберите места установки:"
				list={[
					{
						thumb: '',
						label: 'Салон', // пол, потолок, двери, багажник, колесные арки изнутри
						value: 28000,
					},
					{
						thumb: '',
						label: 'Двери',
						value: 3000,
						multi: true
					},
					{
						thumb: '',
						label: 'Пол',
						value: 12000,
						multi: true
					},
					{
						thumb: '',
						label: 'Потолок',
						value: 5000,
						multi: true
					},
					{
						thumb: '',
						label: 'Багажник',
						value: 7000,
						multi: true
					},
					{
						thumb: '',
						label: 'Колесные арки снаружи',
						value: 3000,
						multi: true
					},
				]}
			/>

			<Profit
				list={[
					{
						label: '+50%',
						value: 'Улучшает комфорт от езды'
					},
					{
						label: '-70%',
						value: 'Посторонних шумов из окружающей среды'
					},
					{
						label: '1 год',
						value: 'Гарантируем качество и долгий эффект от шумоизоляции'
					},
					{
						label: '99%',
						value: 'Клиентов рекомендуют нас друзьям'
					}
				]}
			/>

			<Insta keys="шумоизоляция" />

			<Result title="Шумоизоляция авто" thumb="/img/results/soundproofing.jpg">
				<p>В процессе движения по дороге, в салон автомобиля проникает большое количество шумов. Источниками могут быть шины, контактирующие с дорожным покрытием, двигатель, коробка передач, элементы подвески, система выхлопных газов. Кроме того, сильный внешний шум создают грузовые автомобили и автобусы. Ситуация кардинально ухудшается во время движения по грунтовой трассе или гравию.</p>
				<p>Специально разработанные материалы для шумоизоляции автомобиля идеально справляются с поглощением звуков, возникающих внутри автомобиля, а также поступающих от внешних источников. Проведение шумоизоляции может быть рекомендовано владельцам любых марок автомобилей, включая продукцию отечественных производителей.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
