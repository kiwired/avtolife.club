import { h } from 'preact';
import { route, Link } from 'preact-router';
import Page from '../tags/page';
import Container from '../tags/container';

import Heading from '../tags/heading';
import Edge from '../tags/edge';
import Step from '../tags/step';
import About from '../tags/about';
import Calc from '../tags/calc';
import Profit from '../tags/profit';
import Insta from '../tags/insta';
import Team from '../tags/team';
import Maps from '../tags/map';

// componentWillMount() {
// 	route(this.props.to, true);
// }

const pages = {
	'polishing': [
		{
			component: Heading,
			props: {
				title: 'Полировка авто',
				text: 'мы даем 100% гарантию',
				thumb: '/img/full/polishing.jpg'
			}
		},
		{
			component: Edge,
			props: {
				list: [
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
					},
				]
			}
		},
		{
			component: Step,
			props: {
				list: [
					{
						value: 'Диагностика ЛКП',
						label: 'Производится оценка общего состояния ЛКП, измеряется толщина ЛКП, выявляются его недостатки.'
					},
					{
						value: 'Подготовка и полировка ЛКП автомобиля',
						label: 'Так же на данном этапе происходит нанесение на авто жидкого керамического состава.'
					},
					{
						value: 'Финальная очистка кузова и проверка качества выполненных работ'
					},
				]
			}
		},
		{
			component: About,
			props: {}
		},
		{
			component: Calc,
			props: {
				title: 'полировки',
				text: 'Выберите тип полировки:',
				// amount: true,
				options: [
					{
						label: 'Косметическая',
						value: 'косметическая',
						price: 2000,
					},
					{
						label: 'Глубокая',
						value: 'глубокая',
						price: 5000,
					},
					{
						label: 'Полировка фар',
						value: 'полировка+фар',
						price: 500,
					},
					// {
					// 	label: 'Седан',
					// 	value: 'седан',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Хэтчбек',
					// 	value: 'хэтчбек',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Универсал',
					// 	value: 'универсал',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Внедорожник',
					// 	value: 'внедорожник',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Кроссовер',
					// 	value: 'кроссовер',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Купе',
					// 	value: 'купе',
					// 	price: 2000,
					// }
				]
			}
		},
		{
			component: Profit,
			props: {
				list: [
					{
						value: '-95%',
						label: 'Царапин на ЛКП после полировки'
					},
					{
						value: '1 год',
						label: 'Гарантируем качество и долгий эффект от полировки*'
					},
					{
						value: '-20%',
						label: 'Наши условия выгоднее средних по рынку'
					},
					{
						value: '99%',
						label: 'Клиентов рекомендуют нас друзьям'
					},
				],
				hint: 'При выполненной после полировки услуге по защите кузова автомобиля'
			}
		},
		{
			component: Insta,
			props: {
				tag: ''
			}
		},
		{
			component: Team,
			props: {}
		},
		{
			component: Maps,
			props: {}
		},
	],
	'cleaning': [
		{
			component: Heading,
			props: {
				title: 'Химчистка авто',
				text: 'мы даем 100% гарантию',
				thumb: '/img/full/cleaning.jpg'
			}
		},
		{
			component: Edge,
			props: {
				list: [
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						label: 'Индивидуальный подбор наиболее эффективных чистящих средств',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Экологично',
						label: 'Работаем с лучшими брендами: Koch Chemie, Meguiars, Chemical Guys',
					},
					{
						img: '/img/edge-03.svg',
						value: 'Гарантия',
						label: 'Гарантия качества и сроков выполнения',
					},
				]
			}
		},
		{
			component: Step,
			props: {
				list: [
					{
						value: 'Диагностика состояния салона',
						label: 'Оценка общего состояния салона, выявляются особо загрязненные участки салона.'
					},
					{
						value: 'Подготовка и уборка салона автомобиля',
						label: 'Производится сухая в влажная уборка салона с применением максимально эффективных стредств для чистки.'
					},
					{
						value: 'Сушка салона и проверка качества выполненных работ'
					},
				]
			}
		},
		{
			component: About,
			props: {}
		},
		{
			component: Calc,
			props: {
				title: 'химчистки',
				text: 'Выберите тип химчистки:',
				// amount: true,
				options: [
					{
						label: 'Общая',
						value: 'общая',
						price: 2000,
					},
					// {
					// 	label: 'Глубокая',
					// 	value: 'глубокая',
					// 	price: 5000,
					// },
					// {
					// 	label: 'Полировка фар',
					// 	value: 'полировка+фар',
					// 	price: 500,
					// },
					// {
					// 	label: 'Седан',
					// 	value: 'седан',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Хэтчбек',
					// 	value: 'хэтчбек',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Универсал',
					// 	value: 'универсал',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Внедорожник',
					// 	value: 'внедорожник',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Кроссовер',
					// 	value: 'кроссовер',
					// 	price: 2000,
					// },
					// {
					// 	label: 'Купе',
					// 	value: 'купе',
					// 	price: 2000,
					// }
				]
			}
		},
		{
			component: Profit,
			props: {
				list: [
					{
						value: '+50%',
						label: 'Продлевает срок службы салона'
					},
					{
						value: '-99%',
						label: 'Микробов и микроорганизмов в салоне Вашего автомобиля'
					},
					{
						value: '1 год',
						label: 'Гарантируем качество и долгий эффект от химчистки*'
					},
					{
						value: '99%',
						label: 'Клиентов рекомендуют нас друзьям'
					},
				],
				hint: 'При выполненной после химчистки услуге по защите салона автомобиля'
			}
		},
		{
			component: Insta,
			props: {
				tag: 'химчистка'
			}
		},
		{
			component: Team,
			props: {}
		},
		{
			component: Maps,
			props: {}
		},
	],
	'soundproofing': [
		{
			component: Heading,
			props: {
				title: 'Шумоизоляция авто',
				text: 'мы даем 100% гарантию',
				thumb: '/img/full/soundproofing.jpg'
			}
		},
		{
			component: Edge,
			props: {
				list: [
					{
						img: '/img/edge-01.svg',
						value: 'Безопасно',
						// label: 'Индивидуальный подбор наиболее эффективных чистящих средств',
					},
					{
						img: '/img/edge-02.svg',
						value: 'Экологично',
						// label: 'Работаем с лучшими брендами: Koch Chemie, Meguiars, Chemical Guys',
					},
					{
						img: '/img/edge-03.svg',
						value: 'Гарантия',
						// label: 'Гарантия качества и сроков выполнения',
					},
				]
			}
		},
		{
			component: Step,
			props: {
				list: [
					{
						value: '',
						// label: ''
					},
					{
						value: '',
						// label: ''
					},
					{
						value: ''
					},
				]
			}
		},
		{
			component: About,
			props: {}
		},
		{
			component: Calc,
			props: {
				title: 'шумоизоляции',
				text: 'Выберите тип шумоизоляции:',
				// amount: true,
				options: [
					{
						label: 'Стандарт',
						value: 'Стандарт',
						price: 16000,
					},
					{
						label: 'Комфорт',
						value: 'Комфорт',
						price: 22000,
					},
					{
						label: 'Максимум',
						value: 'Максимум',
						price: 29000,
					},
					{
						label: 'Премиум',
						value: 'Премиум',
						price: 37000,
					},
					{
						label: 'Люкс',
						value: 'Люкс',
						price: 45000,
					},
					{
						label: 'Антискрип панели',
						value: 'Антискрип панели',
						price: 3000,
					},
				]
			}
		},
		{
			component: Profit,
			props: {
				list: [
					{
						value: '+50%',
						label: 'Улучшает комфорт от езды'
					},
					{
						value: '-70%',
						label: 'Посторонних шумов из окружающей среды'
					},
					{
						value: '1 год',
						label: 'Гарантируем качество и долгий эффект от шумоизоляции'
					},
					{
						value: '99%',
						label: 'Клиентов рекомендуют нас друзьям'
					},
				],
				// hint: 'При выполненной после химчистки услуге по защите салона автомобиля'
			}
		},
		{
			component: Insta,
			props: {
				tag: 'химчистка'
			}
		},
		{
			component: Team,
			props: {}
		},
		{
			component: Maps,
			props: {}
		},
	]
}

export default function (props) {
	
	const page = pages[props.slug] || null;

	if (!page) {
		return <Page />;
	}

	return (
		<Page>
			{page.map(v => h(v.component, v.props))}
		</Page>
	);
}
