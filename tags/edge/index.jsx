import React from 'react'

import css from './index.module.scss'

export default ({ list }) => {
	return (
		<div className={css.container}>
			<div className={css.inner}>
				{list.map((val, key) => (
					<div key={key} className={css.item}>
						<div className={css.wrap}>

							<div className={css.img}>
								<img src={val.img} alt={`${val.value} - ${val.label}`} />
							</div>

							<div className={css.value}>
								{val.value}
							</div>

							<div className={css.label}>
								{val.label}
							</div>

						</div>
					</div>
				))}
			</div>
		</div>
	)
}
