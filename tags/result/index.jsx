import React from 'react'

import css from './index.module.scss'

export default function Result({ title, thumb, ...props }) {

	return (
		<div className={css.container}>
			<div className={css.flex}>

				{thumb && (
					<div>
						<img className={css.thumb} src={thumb} />
					</div>
				)}

				<div>
					{title && (
						<h2 className={css.title}>{title}</h2>
					)}
					<div {...props} />
				</div>

			</div>
		</div>
	)
}
