import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<header className="header">
			<Container>
				<div className="header-inner">

					<Link className='header-logo' href='/'>
						<img src='/img/logo.svg' alt='avto life - styling and detailing' />
					</Link>

					<div className='header-nav'>
						<Link href='/'>Полировка</Link>
						<Link href='/'>Химчистка</Link>
						<Link href='/'>Защита авто</Link>
						<Link href='/'>Тонировка</Link>
						<Link href='/'>Шумоизоляция</Link>
						<Link href='/'>Обучение</Link>
					</div>
					
					<div className='header-call'>
						<button class='button' type='button'>Записаться</button>
					</div>

					<div className='header-addres'>
						<span>г. Омск, ул. Химиков, 60</span>
						<a href='tel:83812492500'>8 (3812) 49-25-00</a>
						<a href='tel:89083156307'>8 (908) 315-63-07</a>
					</div>

				</div>
			</Container>
		</header>
	)
}
