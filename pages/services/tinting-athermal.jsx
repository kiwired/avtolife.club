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
	title: 'Атермальная тонировка авто в Омске по ГОСТу',
	keywords: 'атермальная тонировка авто Омск',
	description: 'Компания «AvtoLife» оказывает услуги по атермальной тонировке автомобилей в Омске. Пленка для атермальной тонировки соответствует нормам ГОСТ и позволяет тонировать лобовые и боковые стекла',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Атермальная тонировка'
				text='инновационная защита от УФ лучей'
				thumb='/img/full/tinting-athermal.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее качественных пленок',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Технологично',
						label: 'Работаем с лучшими брендами: SunTek, Llumar, UltraVision',
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
						thumb: '/img/step/tinting-athermal/01.jpg'
					},
					{
						value: 'Подготовка и уборка салона автомобиля',
						label: 'Сухая в влажная уборка салона с применением максимально эффективных стредств для чистки.',
						thumb: '/img/step/tinting-athermal/01.jpg'
					},
					{
						value: 'Сушка салона и проверка качества выполненных работ',
						thumb: '/img/step/tinting-athermal/01.jpg'
					}
				]}
			/> */}

			<About />

			<Price
				title="Стоимость поклейки аретмальной тонировки"
				label="Выберите производителя пленки:"
				list={[
					{
						thumb: '',
						label: 'SunTek',
						value: 3000,
					},
					{
						thumb: '',
						label: 'Llumar',
						value: 3500,
					},
					{
						thumb: '',
						label: 'UltraVision',
						value: 3000,
					}
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

			<Insta keys="атермальная" />

			<Result title="Атермальная тонировка" thumb="/img/results/tinting-athermal.jpg">
				<p>Услуга нанесения атермальной тонировки на стекла автомобилей появилась на отечественном рынке сравнительно недавно. Современный материал является надежным барьером для ультрафиолетового и теплового излучения, что позволяет существенно снизить нагрев салона авто в период летнего зноя. Основную защитную функцию выполняет инновационное нано-керамическое покрытие, созданное на основе графита.</p>
				<p>После нанесения пленки стекла автомобиля остаются полностью прозрачными, не создавая проблем с обзорностью. Некоторые типы пленки имеют голубоватый или зеленоватый оттенок, который практически не препятствует прохождению световых лучей в видимой части спектра.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
