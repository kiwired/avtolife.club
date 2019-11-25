import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="map">

			<Container>
				<div className="map-card">

					<Link className='map-logo' href='/'>
						<img src='/img/logo-gray.svg' alt='avto life - styling and detailing' />
					</Link>

					<div className='map-addres'>
						<span>г. Омск, ул. Химиков, 60</span>
						<a href='tel:+73812492500'>+7 (3812) 49-25-00</a>
					</div>

					<div className='map-hr' />
					
					<div className='map-time'>
						<span>Работаем ежедневно</span>
						<b>с 9:00 до 21:00</b>
					</div>
					
					<div className='map-hr' />

					<div className='map-navigate'>
						<span>Открыть в</span>
						<a href="//maps.apple.com/?ll=55.057492,73.306156&dirflg=d&address=г.Омск,ул.Химиков,60">Карты</a>{', '}
						<a href="yandexnavi://show_point_on_map?lat=55.057492&lon=73.306156&zoom=12&no-balloon=0&desc=AvtoLife">Я.Навигатор</a>
					</div>

					<div className='map-call'>
						<button type='button' class='button'>Заказать звонок</button>
					</div>

				</div>
			</Container>

			<div className='map-wrap' ref={node => this.map = node} />

		</div>
	)
}
