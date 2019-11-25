import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="about">
			<Container>

				<h2 className="about-title">
					Как мы работаем?
				</h2>

				<div className="about-inner">

					<Item index='1' value='Звонок или заявка' label='Вы можете записаться к нам на услугу через сайт' />
					
					<Item index='2' value='Согласование времени или записи' label='Мы выбираем свободное и удобное для вас время' />

					<Item index='3' value='Консультирование и прием в работу' label='Консультирование и прием в работу' />

					<Item index='4' value='Приёмка выполненной работы' label='После качественно выполенной работы вы забираете автомобиль' />

				</div>

				<div className="about-desc-wrap">
					<div className="about-desc">


						<h2 className="about-title">
							О Нас
						</h2>

						<div class='about-desc-list'>

							<div class='about-desc-item'>
								<span>70 +</span> Брендов-партнеров с мировым именем
							</div>

							<div class='about-desc-item'>
								<span>850+</span> Автомобилей теперь как новые
							</div>

							<div class='about-desc-item'>
								<span>0</span> Случаев порчи электрики или салона
							</div>

							<div class='about-desc-item'>
								<span>25+</span> Различных полировальных систем
							</div>

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
