import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Container from '../tags/container';

export default function (props) {

	const navs = [
		{
			content: 'Полировка',
			href: '/polishing',
			childs: [

			]
		},
		{
			content: 'Химчистка',
			href: '/cleaning',
			childs: [

			]
		},
		{
			content: 'Тонировка',
			href: '/tinting',
			childs: [
				{
					content: 'Автоматическая',
					href: '/tinting/auto'
				},
				{
					content: 'Съемная',
					href: '/tinting/gost'
				},
				{
					content: 'Атермальная',
					href: '/tinting/gost'
				},
				{
					content: 'ГОСТ',
					href: '/tinting/gost'
				},
			]
		},
		{
			content: 'Защитные пленки',
			href: '/films',
			childs: [

			]
		},
		{
			content: 'Керамика',
			href: '/ceramics',
			childs: [

			]
		},
		{
			content: 'Обучение',
			href: '/learning',
			childs: [

			]
		},
	];

	return (
		<Container>
			<div className='nav'>
				{navs.map(nav => (
					<NavItem {...nav} />
				))}
			</div>
		</Container>
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

		if (props.childs) {
			const classes = state.isOpen ? 'nav-item active' : 'nav-item';
			return (
				<div className={classes} onClick={this.onToggle}>
					<span className='nav-item-title'>
						{props.content}
					</span>
					<span className='nav-item-list'>
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
			<Link className='nav-item' href={props.href}>
				<span className='nav-item-title'>
					{props.content}
				</span>
			</Link>
		);
	}
}