import React from 'react'

import css from './index.module.scss'

export default function Button({ className = '', size, ...props }) {
	className = [css.button, className].filter(v => v).join(' ')
	if (size && size === 'small') {
		className += ` ${css.small}`
	}
	return (
		<button className={className} {...props} />
	)
}
