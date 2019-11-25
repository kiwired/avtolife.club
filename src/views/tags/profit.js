import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="profit">
			<Container>

				<h2 className="profit-title">
					Почему это выгодно?
				</h2>

				<div className="profit-inner">

					<Item value='-75%' label='[position]' />
					
					<Item value='-75%' label='[position]' />

					<Item value='-75%' label='[position]' />

					<Item value='-75%' label='[position]' />

				</div>

				<div className="profit-hint">
					<span>*</span> При выполненной после полировки услуге по защите кузова автомобиля
				</div>

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
