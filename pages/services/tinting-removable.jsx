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
	title: 'Съемная тонировка авто в Омске',
	keywords: 'съемная тонировка авто Омск',
	description: 'Компания «AvtoLife» оказывает услуги по продаже съемной тонировке для автомобилей в Омске. Съемную тонировку можно снимать и устанавливать самостоятельно неограниченное количество раз',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Съемная тонировка'
				text='с возможностью неоднократной установки'
				thumb='/img/full/tinting-removable.jpg'
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
						label: 'Работаем с лучшими брендами: *********',
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
						thumb: '/img/step/tinting-removable/01.jpg'
					},
					{
						value: 'Подготовка и уборка салона автомобиля',
						label: 'Сухая в влажная уборка салона с применением максимально эффективных стредств для чистки.',
						thumb: '/img/step/tinting-removable/01.jpg'
					},
					{
						value: 'Сушка салона и проверка качества выполненных работ',
						thumb: '/img/step/tinting-removable/01.jpg'
					}
				]}
			/> */}

			<About />

			<Price
				title="Стоимость установки съемной тонировки"
				list={[
					{
						title: 'Выберите тип пленки:',
						list: [
							{
								thumb: '',
								label: 'Стандарт',
								value: 1300,
							},
							{
								thumb: '',
								label: 'Премиум',
								value: 1400,
							},
							{
								thumb: '',
								label: 'Повторная установка',
								value: 400,
							}
						]
					}
				]}
			/>

			<Profit
				list={[
					{
						label: '+100%',
						value: 'Устойчивое прилегание к стеклу, в течение длительного времени'
					},
					{
						label: '+100%',
						value: 'Пленка не подвержена заломам и легко переносит изгибы'
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

			<Insta keys="съемная" />

			<Result title="Съемная тонировка" thumb="/img/results/tinting-removable.jpg">
				<p>Легковые автомобили, на стеклах которых присутствует съемная тонировка, помимо эстетической привлекательности обладают дополнительными преимуществами, которые не могут обеспечить альтернативные виды тонирования. Именно поэтому съемная тонировка получила широкое распространение в странах Европейского Союза а сегодня стала доступной в Омске. Создавая барьер световому излучению в ультрафиолетовом и инфракрасном диапазонах, пленка с одной стороны препятствует перегреву и выгоранию деталей обивки салона в летнюю жару, а с другой сокращает энергетические затраты на кондиционирование.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
