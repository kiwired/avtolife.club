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
	title: 'Электрохромная тонировка авто в Омске',
	keywords: 'Электрохромная тонировка авто Омск',
	description: 'Компания «AvtoLife» оказывает услуги по установке электрозромной тонировке авто в Омске.',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Электрохромная тонировка'
				text='Супер-быстрое затемнение и растонировка стекол'
				thumb='/img/full/tinting-electrochromic.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективных механизмов',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Технологично',
						label: 'Работаем с лучшими брендами: OnGlass'
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
						thumb: '/img/step/tinting-electrochromic/01.jpg'
					},
					{
						value: 'Подготовка и уборка салона автомобиля',
						label: 'Сухая в влажная уборка салона с применением максимально эффективных стредств для чистки.',
						thumb: '/img/step/tinting-electrochromic/01.jpg'
					},
					{
						value: 'Сушка салона и проверка качества выполненных работ',
						thumb: '/img/step/tinting-electrochromic/01.jpg'
					}
				]}
			/> */}

			<About />

			<Price
				title="Узнать стоимость установки электрохромной тонировки"
				list={[
					{
						title: 'Выберите место установки:',
						list: [
							{
								thumb: '',
								label: 'Боковые',
								value: 80000,
							},
							{
								thumb: '',
								label: 'Лобовое',
								value: 350000,
							}
						]
					}
				]}
			/>

			<Profit
				list={[
					// {
					// 	label: '+60%',
					// 	value: 'ТС выглядит более презентабельно'
					// },
					// {
					// 	label: '-75%',
					// 	value: 'Содержимое салона скрыто от посторонних глаз'
					// },
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

			<Insta keys="электрохром" />

			<Result title="Электрохромная тонировка" thumb="/img/results/tinting-electrochromic.jpg">
				<p>Полнофункциональная тонировка, без искажений и мутности, создающая эффект "классической".</p>
				<p>Возможность регулирования комфортного затемнения стекол в зависимости от интенсивности солнечного света от полной прозрачности до максимального уровня затемнения стекол.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
