import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

import css from './index.module.scss'

export default ({ list }) => {

	list = list.map((v, id) => ({ ...v, id }))

	const [active, setActive] = useState(0)

	const onClick = useCallback(key => () => {
		setActive(key)
	})


	const trans = useTransition(list[active], item => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	})

	// const { thumb } = list[active]
	//  style={{ backgroundImage: `url(${thumb})` }}

	return (
		<div className={css.container}>

			{trans.map(({ item, props, key }) => (
				<animated.div key={key} className={css.bg} style={{ ...props, backgroundImage: `url(${item.thumb})` }} />
			))}

			<div className={css.inner}>
				{list.map((val, key) => (
					<div key={key} className={(key === active) ? `${css.item} ${css.active}` : css.item}>
						<div className={css.wrap} onClick={onClick(key)}>

							<div className={css.index}>
								{key + 1} шаг
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
