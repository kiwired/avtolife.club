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
	title: 'Детейлинг химчистка в AvtoLife',
	keywords: '',
	description: '',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Химчистка авто'
				text='мы даем 100% гарантию'
				thumb='/img/full/cleaning.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективных чистящих средств',
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
						value: 'Диагностика состояния салона',
						label: 'Оценка общего состояния салона, выявляются особо загрязненные участки салона.',
						thumb: '/img/step/cleaning/01.jpg'
					},
					{
						value: 'Подготовка и уборка салона автомобиля',
						label: 'Сухая в влажная уборка салона с применением максимально эффективных стредств для чистки.',
						thumb: '/img/step/cleaning/01.jpg'
					},
					{
						value: 'Сушка салона и проверка качества выполненных работ',
						thumb: '/img/step/cleaning/01.jpg'
					}
				]}
			/>

			<About />

			<Price
				title="Узнать стоимость химчистки"
				list={[
					{
						title: 'Выберите места чистки:',
						list: [
							{
								thumb: '',
								label: 'Салон',
								value: 6000,
							},
							{
								thumb: '',
								label: 'Потолок',
								value: 2000,
								multi: true
							},
							{
								thumb: '',
								label: 'Сидения',
								value: 3000,
								multi: true
							},
							{
								thumb: '',
								label: 'Двигатель',
								value: 3000,
								multi: true
							},
							{
								thumb: '',
								label: 'Багажник',
								value: 800,
								multi: true
							},
							{
								thumb: '',
								label: 'Озонирование',
								value: 2500,
								multi: true
							},
						]
					}
				]}
			/>

			<Profit
				list={[
					{
						label: '+50%',
						value: 'Продлевает срок службы салона автомобиля'
					},
					{
						label: '-99%',
						value: 'Микробов и микроорганизмов в салоне Вашего автомобиля'
					},
					{
						label: '1 год',
						value: 'Гарантируем качество и долгий эффект от химчистки*'
					},
					{
						label: '99%',
						value: 'Клиентов рекомендуют нас друзьям'
					}
				]}
				hint="При выполненной после химчистки услуге по защите салона автомобиля"
			/>

			<Insta keys="химчистка" />

			<Result title="Результат Химчистки" thumb="/img/results/cleaning.jpg">
				<p>Внимание уделяется каждой детали интерьера: приборной панели, пассажирским креслам, потолку, обивке на дверцах и коврикам. Помимо обработки химическими реагентами при необходимости может производиться обработка поверхностей паром.</p>
				<p>При необходимости салон может быть подвергнут ионизации, что позволяет уничтожить всю болезнетворную микрофлору даже в труднодоступных местах. Это актуально если в автомобиле перевозили животных, а также в случаях когда у пассажиров имеются аллергические реакции на те или иные раздражители.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
