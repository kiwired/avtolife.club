import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="team">
			<Container>

				<h2 className="team-title">
					Наша команда
				</h2>

				<div className="team-inner">

					<Item name='Антон' position='[position]' active />
					
					<Item name='Яков' position='[position]' />

					<Item name='Александр' position='[position]' />

					<Item name='Владимир' position='[position]' />

					<Item name='Сергей' position='[position]' />

				</div>

			</Container>
		</div>
	)
}

const Item = (props) => {

	return (
		<div className="team-item">

			<div className="team-item-img" />

			<div className="team-item-name">
				{props.name}
			</div>

			<div className="team-item-position">
				{props.position}
			</div>

		</div>
	);
}
