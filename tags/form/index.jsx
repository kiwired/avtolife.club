import React from 'react'

import css from './index.module.scss'

export const Input = ({ label, id, ...props }) => {
	// className = [css.button, className].filter(v => v).join(' ')
	return (
		<>
			{label && (
				<label className={css.label} htmlFor={id}>
					{label}
				</label>
			)}
			<input id={id} className={css.input} {...props} />
		</>
	)
}
