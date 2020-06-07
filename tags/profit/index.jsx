import React from 'react'

import Modal from '../../forms/call'

import css from './index.module.scss'

export default ({ list = [], hint }) => {

	return (
		<div className={css.container}>

			<h2 className={css.title}>Почему это выгодно?</h2>

			<div className={css.list}>
				{list.map((val, key) => (
					<div key={key} className={css.item}>
						<div className={css.inner}>

							<div className={css.label}>
								{val.label}
							</div>

							<div className={css.value}>
								{val.value}
							</div>

						</div>
					</div>
				))}
			</div>

			{hint && (
				<div className={css.hint}>
					<span>*</span> {hint}
				</div>
			)}

			<div className={css.call}>
				<Modal action="Записаться" />
			</div>

		</div>
	)
}
