import React from 'react'

import Modal from '../../forms/call'

import css from './index.module.scss'

export default ({ title, text, thumb, action }) => {
	return (
		<div className={css.container} style={{ backgroundImage: `url(${thumb})` }}>

			<h1 className={css.title}>
				{title} <small>{text}</small>
			</h1>

			{action && (
				<div className={css.inner}>
					<Modal className={css.action} action={action} />
				</div>
			)}

		</div>
	)
}
