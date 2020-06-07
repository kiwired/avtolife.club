import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

import Modal from '../../forms/call'

import css from './index.module.scss'

export default ({ title, label, list = [] }) => {

	list = list.map((v, id) => ({ ...v, id }))

	let ref = null

	const [active, setActive] = useState([0])
	const [price, setPrice] = useState(0)

	const onInput = useCallback((key, isRadio) => (e) => setActive(prev => {
		let isActive = prev.includes(key)

		if (isRadio && !isActive) {
			for (let i = 0; i < list.length; i++) {
				if (!list[i].multi) {
					prev = [...prev.filter(k => k !== i)]
				}
			}
		}

		if (isActive) {
			prev = [...prev.filter(i => i !== key)]
		} else {
			prev = [...prev, key]
		}

		return prev
	}))

	useEffect(() => {
		let nodes = ref.querySelectorAll('input:checked')
		let price = 0

		for (let i = 0; i < nodes.length; i++) {
			price += nodes[i].value * 1
		}

		price = new Intl.NumberFormat('ru-RU').format(price)
		setPrice(price)
	})

	const trans = useTransition(list[0], item => item.id, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 }
	})

	return (
		<div className={css.container}>
			<div className={css.flex}>

				<div className={css.row}>

					<h2 className={css.title}>{title}</h2>
					
					<div className={css.desc}>{label}</div>

					<div className={css.list} ref={e => ref = e}>
						{list.map((val, key) => {
							let type = val.multi ? 'checkbox' : 'radio'
							let name = val.multi ? `price[${key}]` : 'price[]'
							return (
								<Input
									key={key}
									type={type}
									name={name}
									value={val.value}
									label={val.label}
									onClick={onInput(key, !val.multi)}
									onChange={() => {}}
									checked={active.includes(key)}
									// defaultChecked={active === key}
								/>
							)
						})}
					</div>

					<div className={css.price}>от {price} ₽</div>

					<div className={css.call}>
						<Modal action="Заказать звонок" />
					</div>

				</div>

				<div className={css.row}>
					{trans.map(({ item, props, key }) => (
						<animated.div key={key} className={css.bg} style={{ ...props, backgroundImage: `url(${item.thumb})` }} />
					))}
				</div>

			</div>
		</div>
	)
}


const Input = ({ name, value, label, type = 'radio', ...props }) => {
	return (
		<label className={css.item}>
			<input type={type} name={name} value={value} {...props} />
			<span>{label}</span>
		</label>
	)
}