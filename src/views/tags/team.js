import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {

	const list = [
		{
			name: 'Антон',
			position: 'Директор',
			picture: '',
			active: true
		},
		{
			name: 'Яков',
			position: 'Специалист по тонировке / автонилилу',
			picture: '',
		},
		{
			name: 'Владимир',
			position: 'Специалист по тонировке / автонилилу',
			picture: '',
		},
		{
			name: 'Александр',
			position: 'Детейлинг-мастер',
			picture: '',
		},
		{
			name: 'Сергей',
			position: 'Специалист по перетяжке салона',
			picture: '',
		},
	];

	return (
		<div className="team">
			<Container>

				<h2 className="team-title">
					Наша команда
				</h2>

				<div className="team-inner">
					{list.map(v => h(Item, v))}
				</div>

			</Container>
		</div>
	)
}

const Item = (props) => {

	return (
		<div className="team-item">

			<div className="team-item-img" style={{ backgroundImage: `url(${props.picture})` }} />

			<div className="team-item-name">
				{props.name}
			</div>

			<div className="team-item-position">
				{props.position}
			</div>

		</div>
	);
}
