import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function (props) {
	return (
		<div className="profit">
			<Container>

				<h2 className="profit-title">
					Почему это выгодно?
				</h2>

				<div className="profit-inner">
					{props.list.map(v => h(Item, v))}
				</div>

				{props.hint && (
					<div className="profit-hint">
						<span>*</span> {props.hint}
					</div>
				)}

				<div className='profit-call'>
					<button type='button' class='button'>Заказать звонок</button>
				</div>


			</Container>
		</div>
	)
}

const Item = (props) => {

	return (
		<div className="profit-item">
			<div className="profit-item-inner">

				<div className="profit-item-value">
					{props.value}
				</div>

				<div className="profit-item-label">
					{props.label}
				</div>

			</div>
		</div>
	);
}
