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
	title: 'Обучение установке автоматической тонировки в Омске',
	keywords: 'Обучение тонированию',
	description: 'Компания AvtoLife проводит обучение установки автоматической тонировки авто в Омске и готовит профессионалов, которые после завершения курса могут сразу начинать работать с клиентами',
}

export default () => {

	return (
		<>

			<NextSeo {...SEO} />

			<Header />

			<Head
				title='Обучение тонированию'
				text='Наши ученики уже самостоятельно тонируют автомобили и нарабатывают себе репутацию. Кто-то просто устроился на работу, а кто-то уже работает на себя'
				thumb='/img/full/learning.jpg'
				action='Хочу!'
			/>

			<Result>
				<p>Компания «<Link href="/"><a>AvtoLife</a></Link>» проводит курсы по обучению тонировке стекол автомобилей — «Обучение тонированию». Курс доступен для всех, не требует специальной подготовки и глубоких теоретических знаний.  Курс рассчитан на две недели, по истечению которых вы научитесь самостоятельно тонировать стекла всего автомобиля и получите квалификацию профессионального тонировщика авто.</p>
			</Result>

			<Result title="Основной курс" thumb="/img/results/polishing.jpg">
				<p>Обучение тонированию стекол автомобиля осуществляется как теоретически, так и практически. С начала обучения тонировке стекол автомобиля вы тренируетесь на учебном авто. Потом при освоении базовых навыков и под присмотром мастера вы переходите на тонирование клиентских автомобилей. На время курса выдаётся инструмент и плёнка для тонирования стекол автомобилей. Цены на бучение минимальны.</p>
				<p>После прохождения курса — «Обучение тонированию», при свободных вакантных местах в компании «<Link href="/"><a>AvtoLife</a></Link>» и при стремлении к качественному тонированию автомобилей, (что является самым важным приоритетом нашей компании), мы сможем рассмотреть сотрудничество по тонировке авто.</p>
			</Result>

			<Result title="Экспресс курс" thumb="/img/results/learning.jpg">
				<p>Для тех кто уверен в своих силах по тонированию автомобилей и хочет узнать «тонкости» тонирования стекол автомобилей, мы предлагаем однодневный экспресс курс по обучению тонирования стекол в течении которого вы узнаете все подробности о процессе тонирования, от начала и до конца.</p>
				<p>За этот курс вы увидите как мастер тонирует стекла автомобиля с описанием выполняемых действий, а потом и сами затонируете стекла всего автомобиля под присмотром и комментариями мастера.</p>
				<p>Если после прохождения экспресс курса вы поймёте, что вам нужно ещё подучиться, то вы всегда можете доплатить разницу и включиться в основное обучение.</p>
			</Result>

			<Result>
				<p>Компания «<Link href="/"><a>AvtoLife</a></Link>» — Мы создаём комфорт для вас и вашей семьи!</p>
			</Result>

			{/* <Team /> */}

			<Map />
			
			<Footer />

		</>
	)
}
