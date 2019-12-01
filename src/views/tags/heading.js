import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function (props) {

	let style = {
		backgroundImage: `url(${props.thumb})`
	};

	return (
		<div className="heading" style={style}>
			<Container>

				<h1 className="heading-title">
					{props.title} <small>{props.text}</small>
				</h1>

				<div className="heading-inner">
					<a class='heading-action' href='#'>Расчитать</a>
				</div>

			</Container>
		</div>
	)
}
