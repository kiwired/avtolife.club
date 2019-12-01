import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Container from '../tags/container';

export default function (props) {

	const navs = [
		{
			content: 'Полировка',
			thumb: '/img/thumbs/polishing.jpg',
			href: '/polishing',
			childs: [
			]
		},
		{
			content: 'Химчистка',
			thumb: '/img/thumbs/cleaning.jpg',
			href: '/cleaning',
			childs: [
			]
		},
		{
			content: 'Защита',
			thumb: '/img/thumbs/protect.jpg',
			href: '/protect',
			childs: [
				{
					content: 'Бронирование',
					href: '/ceramics',
				},
				{
					content: 'Керамика',
					href: '/ceramics',
				},
				{
					content: 'Уст.сигнализации',
					href: '/'
				},
			]
		},
		{
			content: 'Тонировка',
			thumb: '/img/thumbs/tinting.jpg',
			href: '/tinting-gost',
			childs: [
				{
					content: 'Автоматическая',
					href: '/tinting-auto'
				},
				{
					content: 'Съемная',
					href: '/tinting-gost'
				},
				{
					content: 'Атермальная',
					href: '/tinting-gost'
				},
				{
					content: 'по ГОСТу',
					href: '/tinting-gost'
				},
				{
					content: 'Тонировка фар',
					href: '/tinting-gost'
				},
			]
		},
		{
			content: 'Шумоизоляция',
			thumb: '/img/thumbs/soundproofing.jpg',
			href: '/soundproofing',
			childs: [
			]
		},
		{
			content: 'Обучение',
			thumb: '/img/thumbs/learning.jpg',
			href: '/learning',
			childs: [
			]
		},
	];

	return (
		<div className='home'>
			<Container>
				<div className='home-inner'>

					<div className='home-head'>
						<div className='home-head-logo'>
							<img src='/img/logo-small.svg' alt='avto life - Основа качественного и безукоризненного результата ' />
							Основа качественного и безукоризненного результата
						</div>
						<div className='home-head-address'>
							г.Омск, ул.Химиков, 60
						</div>
						<div className='home-head-phone'>
							<a href='tel:+73812492500'>+7 (3812) 49-25-00</a>
							<a href='tel:+79083156307'>+7 (908) 315-63-07</a>
						</div>
						<div className='home-head-social'>
							<a href='//vk.com/clubcarbon'></a>
							<a href='//instagram.com/avtolife.club'></a>
							<a href='//wa.me/79083156307'></a>
						</div>
						<div className='home-head-call'>
							<button type='button' class='button'>Записаться</button>
						</div>
					</div>

					<div className='home-nav'>
						{navs.map(nav => (
							<NavItem {...nav} />
						))}
					</div>

				</div>
			</Container>
		</div>
	);
}

class NavItem extends Component {

	state = {
		isOpen: false
	}

	onToggle = () => {
		// this.setState({ isOpen: !this.state.isOpen });
	}

	render(props, state) {

		let style = {
			backgroundImage: `url(${props.thumb || ''})`
		};

		if (props.childs && props.childs.length) {
			const classes = state.isOpen ? 'home-nav-item active' : 'home-nav-item';
			return (
				<div className={classes} onClick={this.onToggle} style={style}>
					<span className='home-nav-item-bg' />
					<div className='home-nav-item-title'>
						{props.content} <img src="data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.00211 3.90065L1.26098 0.159678C1.15821 0.0566697 1.02081 2.86102e-06 0.874309 2.86102e-06C0.727724 2.86102e-06 0.590406 0.0566697 0.48748 0.159678L0.159837 0.487482C0.056748 0.590328 0 0.727808 0 0.874312C0 1.02082 0.056748 1.15813 0.159837 1.26106L4.61398 5.71529C4.71724 5.81862 4.8552 5.87521 5.00187 5.8748C5.14919 5.87521 5.28699 5.8187 5.39033 5.71529L9.84016 1.26521C9.94325 1.16228 10 1.02496 10 0.878377C10 0.731873 9.94325 0.594556 9.84016 0.491548L9.51252 0.163824C9.29927 -0.049428 8.95211 -0.049428 8.73894 0.163824L5.00211 3.90065Z' fill='white'/%3E%3C/svg%3E%0A" />
					</div>
					<span className='home-nav-item-list'>
						{props.childs.map(nav => (
							<Link href={nav.href}>
								{nav.content}
							</Link>
						))}
					</span>
				</div>
			)
		}

		return (
			<Link className='home-nav-item' href={props.href} style={style}>
				<span className='home-nav-item-bg' />
				<span className='home-nav-item-title'>
					{props.content}
				</span>
			</Link>
		);
	}
}