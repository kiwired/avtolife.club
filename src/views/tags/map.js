import { h, Component } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default class Map extends Component {

	styles = [
		{
			featureType: 'all',
			elementType: 'all',
			stylers: [
				{
					saturation: -100
				},
				{
					gamma: 0.5
				}
			]
		}
	]

	isLoaded = () => typeof window.google === 'object' && typeof window.google.maps === 'object'

	options = () => {
		let lat = 55.0568497;
		let lng = 73.30421;

		if (window.innerWidth > 768) {
			lng -= .003;
		}

		return {
			zoom: 16,
			center: new window.google.maps.LatLng(lat, lng),
			scrollwheel: false,
			styles: this.styles
		};
	}

	onLoadScript = () => {

		const map = new window.google.maps.Map(this.node, this.options());

		new window.google.maps.Marker({
			position: new google.maps.LatLng(55.0568497, 73.3055238),
			map: map,
			title: 'Map'
		});
	}

	componentDidMount() {
		if (this.isLoaded()) {
			return;
		}

		const script = document.createElement('script');

		script.setAttribute('src', `//maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API}`);
		// script.setAttribute('src', '//maps.googleapis.com/maps/api/js');
		script.addEventListener('load', this.onLoadScript);

		document.body.appendChild(script);
	}

	render() {

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

						<div className='map-time'>
							<span>Работаем ежедневно</span>
							<b>с 9:00 до 21:00</b>
						</div>

						<div className='map-navigate'>
							<span>Открыть в</span>
							<a href="//maps.apple.com/?ll=55.057492,73.306156&dirflg=d&address=Омск+ул.Химиков+60">Карты</a>{', '}
							<a href="yandexnavi://show_point_on_map?lat=55.057492&lon=73.306156&zoom=12&no-balloon=0&desc=AvtoLife">Я.Навигатор</a>
						</div>

						<div className='map-call'>
							<button type='button' class='button'>Заказать звонок</button>
						</div>

					</div>
				</Container>

				<div className='map-wrap' ref={node => this.node = node} />

			</div>
		);
	}
}
