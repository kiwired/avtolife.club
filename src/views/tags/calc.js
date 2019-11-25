import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {

	const options = [
		{
			label: 'Седан',
			value: 'седан',
			price: 2000,
		},
		{
			label: 'Хэтчбек',
			value: 'хэтчбек',
			price: 2000,
		},
		{
			label: 'Универсал',
			value: 'универсал',
			price: 2000,
		},
		{
			label: 'Внедорожник',
			value: 'внедорожник',
			price: 2000,
		},
		{
			label: 'Кроссовер',
			value: 'кроссовер',
			price: 2000,
		},
		{
			label: 'Купе',
			value: 'купе',
			price: 2000,
		},
	];

	return (
		<div className="calc">
			<Container>

				<div className="calc-wrap">
					<div className="calc-inner">

						<h2 className="calc-title">
							Узнать стоимость <small>тонировки вашего авто</small>
						</h2>

						<div className="calc-desc">
							Выберите ваш авто:
						</div>

						<div className="calc-select">
							{options.map((v, k) => (
								<label key={k}>
									<input type='radio' name='car' value={v.value} />
									<span>
										{v.label}
									</span>
								</label>
							))}
						</div>

						<div className="calc-price">
							от 2 200,00 ₽
						</div>

						<div className='calc-call'>
							<button type='button' class='button'>Заказать звонок</button>
						</div>

					</div>
				</div>
				
			</Container>
		</div>
	)
}
