import React from 'react'

import css from './index.module.scss'

export default () => {
	return (
		<div className={css.address}>
			<span>г. Омск, ул. Химиков, 60</span>
			<a href="tel:83812492500">+7 (3812) 49-25-00</a>
		</div>
	)
}
