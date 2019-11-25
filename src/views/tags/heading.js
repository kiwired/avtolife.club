import { h } from 'preact';
import { Link } from 'preact-router';
import Container from './container';

export default function () {
	return (
		<div className="heading">
			<Container>

				<h1 className="heading-title">
					Полировка авто <small>мы даем 100% гарантию</small>
				</h1>

				<div className="heading-inner">
					<a class='heading-action' href='#'>Расчитать</a>
				</div>

			</Container>
		</div>
	)
}
