import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<footer className="footer">
			<Container>
				<div className="footer-inner">

					<Link className='footer-logo' href='/'>
						<img src='/img/logo.svg' alt='avto life - styling and detailing' />
					</Link>

					<div className='footer-addres'>
						<span>г. Омск, ул. Химиков, 60</span>
						<a href='tel:+73812492500'>+7 (3812) 49-25-00</a>
					</div>

					<div className='footer-call'>
						<button type='button' class='button'>Заказать звонок</button>
					</div>

				</div>
			</Container>
		</footer>
	)
}
