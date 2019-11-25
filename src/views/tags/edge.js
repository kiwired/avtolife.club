import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="edge">
			<Container>

				<div className="edge-inner">

					<Item img='/img/edge-01.svg' value='Безопасно' label='Индивидуальный подбор наиболее эффективной полировальной системы' />

					<Item img='/img/edge-02.svg' value='Технологично' label='Работаем с лучшими брендами: Rupes, Meguiars, Mirka, Koch Chemie, Lake' />

					<Item img='/img/edge-03.svg' value='Гарантия' label='Гарантия качества и сроков выполнения' />
					
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
