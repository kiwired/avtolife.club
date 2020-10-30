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
	title: 'Детейлинг мойка',
	keywords: 'детейлинг мойка авто в Омске',
	description: 'Профессиональная детейлинг мойка авто в Омске',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Детейлинг мойка'
				text='придаем автомобилю безупречный внешний вид'
				thumb='/img/full/carwash.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективных средств и шампуней',
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

			{/* <Steps
				list={[
					{
						value: 'Диагностика состояния и степени загрязненности авто',
						label: '',
						thumb: '/img/step/carwash/01.jpg'
					},
					// {
					// 	value: 'Подготовка салона автомобиля',
					// 	label: '',
					// 	thumb: '/img/step/carwash/01.jpg'
					// },
					// {
					// 	value: 'Нанесение вибро и шумо изоляционных материалов',
					// 	thumb: '/img/step/carwash/01.jpg'
					// }
				]}
			/> */}

			<About />

			<Price
				title="Узнать стоимость мойки"
				list={[
					{
						title: 'Выберите тип мойки:',
						list: [
							{
								thumb: '',
								label: 'Экспресс',
								value: 300,
							},
							{
								thumb: '',
								label: 'Регулярная',
								value: 500
							},
							{
								thumb: '',
								label: 'Детейлинг',
								value: 1100
							},
							{
								thumb: '',
								label: 'Премиум',
								value: 1700
							}
						]
					}
				]}
			/>

			{/* <Profit
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
			/> */}

			<Insta keys="мойка" />

			<Result title="Детейлинг мойка авто" thumb="/img/results/carwash.jpg">
				<p>В ходе детейлинг мойки производится полная очистка кузова, колесных дисков, фар, декоративных деталей покрытых хромом, а также шин. В общем случае детейлинг мойка включает следующие операции:</p>
				<ul>
					<li>Очистку кузова от грязи, пыли и масляных отложений. Чистке подвергается вся поверхность включая труднодоступные места.</li>
					<li>Очистку колесных дисков с использованием специальных щеток.</li>
					<li>Очистку хромированных деталей глушителя.</li>
					<li>Очистку протектора шин.</li>
					<li>Удаление маслянистых пятен и битума.</li>
					<li>Удаление загрязнений вызванных контактом с насекомыми и почками от деревьев.</li>
					<li>Для каждой из операций используется отдельный вид шампуня, различающиеся по химическому составу и методу воздействия. Компоненты шампуней подобраны таким образом, чтобы их разрушающее воздействие на окрашенную поверхность кузова было минимальным. Некоторые моющие составы содержат синюю глину.</li>
				</ul>
				<p>Мойка разделена на несколько фаз позволяет избавиться практически от любых загрязнений. Работа включает как бесконтактные, так и контактные методы очистки.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
