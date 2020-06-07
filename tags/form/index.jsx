import React from 'react'

import css from './index.module.scss'

export const Input = ({ label, ...props }) => {
	// className = [css.button, className].filter(v => v).join(' ')
	return (
		<>
			{label && (
				<label className={css.label}>
					{label}
				</label>
			)}
			<input className={css.input} {...props} />
		</>
	)
}
