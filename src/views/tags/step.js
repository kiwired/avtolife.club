import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="step">
			<Container>

				<div className="step-inner">

					<Item index='1' value='Удаление верхнего слоя лака толщиной около 1 микрона.' />
					
					<Item index='2' value='Полировка с использованием абразивной пасты.' label='Может быть в несколько этапов' />

					<Item index='3' value='Нанесение на авто жидкого керамического состава.' />

					<Item index='4' value='Сушка.' />

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
