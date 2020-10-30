import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
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
	title: 'Детейлинг полировка авто в Омске',
	keywords: 'Полировка автомобиля Омск',
	description: 'Компания «Avto-Life» оказывает услуги по полировке автомобилей в Омске. Выполняемая специалистами полировка позволяет вернуть лакокрасочному покрытию авто первоначальный вид',
}

export default function Index() {
	return (
		<>

			<NextSeo {...SEO} />
			<BreadcrumbJsonLd
				itemListElements={[
					{
						position: 1,
						name: 'Главная',
						item: 'https://avtolife.club/',
					},
					{
						position: 2,
						name: 'Услуги',
						item: 'https://avtolife.club/',
					},
					{
						position: 3,
						name: 'Полировка',
						item: 'https://avtolife.club/services/polishing',
					}
				]}
			/>

			<Header />

			<Head
				title='Полировка кузова'
				text='и защитные покрытия'
				thumb='/img/full/polishing.jpg'
				action='Расчитать стоимость'
			/>

			<Edge
				list={[
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективной полировальной системы',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Технологично',
						label: 'Работаем с лучшими брендами: Rupes, Meguiars, Mirka, Koch Chemie, Lake',
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
						value: 'Диагностика ЛКП',
						label: 'Производится оценка общего состояния ЛКП, измеряется толщина ЛКП, выявляются его недостатки.',
						thumb: '/img/step/polish/01.jpg'
					},
					{
						value: 'Подготовка и полировка ЛКП автомобиля',
						label: 'Так же на данном этапе происходит нанесение на авто защитного состава.',
						thumb: '/img/step/polish/01.jpg'
					},
					{
						value: 'Финальная очистка кузова и проверка качества выполненных работ',
						thumb: '/img/step/polish/01.jpg'
					}
				]}
			/>

			<About />

			<Price
				title="Узнать стоимость полировки"
				label="Выберите тип полировки:"
				list={[
					{
						title: 'Выберите тип полировки:',
						list: [
							{
								thumb: '',
								label: 'Комплекс 1', // Дитейлинг Комплекс 1: 
								hint: 'полировка + жидкое стекло (+ передняя полусфера "антидождь")',
								value: 16000,
							},
							{
								thumb: '',
								label: 'Комплекс 2', // Дитейлинг Комплекс 2:  полировка+керамика 3 слоя (+"антидождь" все стекла)
								hint: 'полировка + керамика 3 слоя (+ "антидождь" все стекла)',
								value: 28000,
							},
							{
								thumb: '',
								label: 'Косметическая',
								value: 6000,
							},
							{
								thumb: '',
								label: 'Детейлинг',
								value: 10000,
							},
							{
								thumb: '',
								label: 'Полировка фар',
								value: 1000,
								multi: true
							},
							{
								thumb: '',
								label: 'Полировка всей оптики',
								value: 1800,
								multi: true
							}
						]
					},
					{
						title: 'Нанесение защитного состава',
						list: [
							{
								thumb: '',
								label: 'Керамика (2 слоя)',
								// hint: 'от 2-х слоев (для темных машин от 3-х)',
								value: 12000,
							},
							{
								thumb: '',
								label: 'Керамика (3 слоя)',
								// hint: 'от 2-х слоев (для темных машин от 3-х)',
								value: 18000,
							},
							{
								thumb: '',
								label: 'Жидкое стекло',
								hint: '1 слой',
								value: 6000,
							},
							{
								thumb: '',
								label: 'Воск',
								hint: 'быстрое стекло',
								value: 3000,
							},
						]
					}
				]}
			/>

			<Profit
				list={[
					{
						label: '-95%',
						value: 'Царапин на ЛКП авто после полировки'
					},
					{
						label: '1 год',
						value: 'Гарантируем качество и долгий эффект от полировки*'
					},
					{
						label: '20%',
						value: 'Наши условия выгоднее средних по рынку'
					},
					{
						label: '99%',
						value: 'Клиентов рекомендуют нас друзьям'
					},
				]}
				hint="При выполненной после полировки услуги по защите кузова автомобиля"
			/>

			<Insta keys="полировка" />

			<Result title="Результат Детейлинг полировки" thumb="/img/results/polishing.jpg">
				<p>Затвердевший полировальный состав обладает водоотталкивающими свойствами и препятствует оседанию пыли на кузове. Лакокрасочное покрытие гораздо лучше противостоит воздействию реагентов, используемых дорожными службами в зимний период.</p>
				<p>Отполированный в детейлинг центре кузов значительно лучше очищается на обычных мойках. Он менее подвержен царапинам за счет повышения твёрдости. Достичь таких результатов самостоятельно в условиях гаража невозможно.</p>
				<p>Практика показывает, что комплекс мероприятий выполненных в детейлинг центре, таких как мойка, полировка и <Link href='/services/cleaning'><a>химчистка</a></Link> позволяют увеличить рыночную стоимость автомобиля на 15-20%. И это не удивительно — если автомобиль выглядит как сошедший с конвейера, желающих приобрести его значительно больше.</p>
			</Result>

			<Team />

			<Map />
			
			<Footer />

		</>
	)
}
