import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function (props) {
	return (
		<div className="edge">
			<Container>

				<div className="edge-inner">

					{props.list.map(v => h(Item, v))}

				</div>

			</Container>
		</div>
	)
}

const Item = (props) => {

	return (
		<div className="edge-item">
			<div className="edge-item-inner">

				<div className="edge-item-img">
					<img src={props.img} alt={`${props.value} - ${props.label}`} />
				</div>

				<div className="edge-item-value">
					{props.value}
				</div>

				<div className="edge-item-label">
					{props.label}
				</div>

			</div>
		</div>
	);
}
