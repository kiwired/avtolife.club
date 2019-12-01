import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {

	const list = [
		{
			index: 1,
			value: 'Звонок или заявка',
			label: 'Вы можете записаться к нам на услугу через сайт'
		},
		{
			index: 2,
			value: 'Согласование времени',
			label: 'Мы выбираем свободное и удобное для вас время'
		},
		{
			index: 3,
			value: 'Прием авто в работу',
			label: 'Консультирование и прием автомобиля в работу'
		},
		{
			index: 4,
			value: 'Возвращаем авто',
			label: 'После качественно выполенной работы вы забираете автомобиль'
		},
	];

	const items = [
		{
			label: '70 +',
			value: 'Брендов-партнеров с мировым именем',
		},
		{
			label: '850+',
			value: 'Автомобилей теперь как новые',
		},
		{
			label: '0',
			value: 'Случаев порчи электрики или салона',
		},
		{
			label: '25+',
			value: 'Различных полировальных систем',
		},
	];

	return (
		<div className="about">
			<Container>

				<h2 className="about-title">
					Как мы работаем?
				</h2>

				<div className="about-inner">
					{list.map(v => h(Item, v))}
				</div>

				<div className="about-desc-wrap">
					<div className="about-desc">

						<h2 className="about-title">
							О Нас
						</h2>

						<div class='about-desc-list'>
							{items.map(v => (
								<div class='about-desc-item'>
									<span>{v.label}</span> {v.value}
								</div>
							))}
						</div>

					</div>
				</div>


			</Container>
		</div>
	)
}

const Item = (props) => {

	return (
		<div className="about-item">
			<div className="about-item-inner">

				<div className="about-item-index">
					{props.index}
				</div>

				<div className="about-item-value">
					{props.value}
				</div>

				<div className="about-item-label">
					{props.label}
				</div>

			</div>
		</div>
	);
}
