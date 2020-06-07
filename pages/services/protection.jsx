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
	title: '',
	keywords: '',
	description: '',
}

export default () => {

	return (
		<>

			<NextSeo config={SEO} />

			<Header />

			<Head
				title='Бронирование авто'
				text='мы даем 100% гарантию'
				thumb='/img/full/protection.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективных защитных пленок',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Технологично',
						label: 'Работаем с лучшими брендами: Koch Chemie, Meguiars, Chemical Guys',
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
						value: 'Диагностика состояния авто',
						label: 'Оценка общего состояния кузова и подготовка поверхностей к работе.',
						thumb: '/img/step/protection/01.jpg'
					},
					{
						value: 'Поклейка пленкой необходимые участки кузова',
						label: 'Производится качественная поклейка бронировочной пленки по поверхности кузова авто.',
						thumb: '/img/step/protection/01.jpg'
					},
					{
						value: 'Проверка качества выполненных работ',
						thumb: '/img/step/protection/01.jpg'
					}
				]}
			/>

			<About />

			<Price
				title="Узнать стоимость бронирования"
				label="Выберите места бронирования:"
				list={[
					{
						thumb: '',
						label: 'Комплекс 1', // Minimum "Минимальный комплекс" (полоса на капот, фары, зеркала, ручки)
						value: 12500
					},
					{
						thumb: '',
						label: 'Комплекс 2', // Standart "Средний комплекс" (передний бампер, капот полоска, крылья (с заходом) зеркала, фары, пороги (внут.часть), стойки лобового стекла, полоска крыша )
						value: 33000
					},
					{
						thumb: '',
						label: 'Комплекс 3', // Maximum "большой комплекс" (передний бампер, капот, крылья, оптика, зеркала, пороги (внут.часть), стойки лобового стекла, полоска крыша)
						value: 52500
					},
					{
						thumb: '',
						label: 'Капот',
						value: 14000,
						multi: true
					},
					{
						thumb: '',
						label: 'Полоса на капот',
						value: 5000,
						multi: true
					},
					{
						thumb: '',
						label: 'Бампер',
						value: 12000,
						multi: true
					},
					{
						thumb: '',
						label: 'Передние крылья',
						value: 12000,
						multi: true
					},
					{
						thumb: '',
						label: 'Оптика',
						value: 3500,
						multi: true
					},
					{
						thumb: '',
						label: 'Пороги',
						value: 4000,
						multi: true
					},
					{
						thumb: '',
						label: 'Стойки',
						value: 2000,
						multi: true
					},
					{
						thumb: '',
						label: 'Колесные арки',
						value: 2500,
						multi: true
					},
					{
						thumb: '',
						label: 'Зона погрузки',
						value: 2000,
						multi: true
					},
					{
						thumb: '',
						label: 'Места под ручки',
						value: 1500,
						multi: true
					},
					{
						thumb: '',
						label: 'Дверь',
						value: 7500,
						multi: true
					},
				]}
			/>

			<Profit
				list={[
					{
						label: '+90%',
						value: 'Продлевает срок службы ЛКП автомобиля'
					},
					{
						label: '-99%',
						value: 'Вероятность сколов и порчи ЛКП в местах нанесения пленки'
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

			<Insta keys="бронирование" />

			<Result title="Результат Бронирования" thumb="/img/results/protection.jpg">
				<p>Бронирующая пленка практически незаметна на кузове, но ее толщины (110-330 мкм) вполне достаточно чтобы предотвратить царапины или мелкие сколы. Для изготовления пленки используется высококачественный полиуретан устойчивый к температурным перепадам и механическому воздействию.</p>
				<p>Пленка свободно пропускает солнечное излучение в ультрафиолетовой части спектра. Даже если вы выполните частичное бронирование кузова автомобиля, можете быть уверены – никаких следов выгорания после удаления пленки на кузове не будет. Кузов, оклеенный пленкой, можно мыть с помощью химических составов и даже подвергать полировке.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
