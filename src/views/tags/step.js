import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function (props) {
	return (
		<div className="step">
			<Container>

				<div className="step-inner">

					{props.list.map((v, k) => h(Item, { ...v, index: k + 1 }))}

				</div>

			</Container>
		</div>
	)
}

const Item = (props) => {

	return (
		<div className="step-item">
			<div className="step-item-inner">

				<div className="step-item-index">
					{props.index} шаг
				</div>

				<div className="step-item-value">
					{props.value}
				</div>

				{props.label && (
					<div className="step-item-label">
						{props.label}
					</div>
				)}

			</div>
		</div>
	);
}
