import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<header className="header">
			<Container>
				<div className="header-inner">

					<Link className='header-logo'>
						<img src='/img/logo.svg' alt='avto life - styling and detailing' />
					</Link>

					<div className='header-logo-after'>
						Профессиональный уход за автомобилями
					</div>

					<div className='header-addres'>
						г. Омск, ул. Химиков, 60
						<a href='tel:83812492500'>8 (3812) 49-25-00</a>
						<a href='tel:89083156307'>8 (908) 315-63-07</a>
					</div>

					<div className='header-call'>
						[call]
					</div>

				</div>
			</Container>
		</header>
	)
}
