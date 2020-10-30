import React from 'react'

import Modal from '../../forms/call'

import css from './index.module.scss'

export default function Footer() {
	return (
		<div className={css.footer}>
			<div className={css.inner}>

				<a className={css.logo} href="/">
					<img src="/img/logo.svg" alt="avto life - styling and detailing" />
				</a>

				<div className={css.address}>
					<span>г. Омск, ул. Химиков, 60</span>
					<a href="tel:+73812492500">+7 (3812) 49-25-00</a>
				</div>

				<Modal className={css.call} action="Заказать звонок" />

			</div>
		</div>
	)
}
