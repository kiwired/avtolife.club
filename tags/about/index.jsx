import React, { useState } from 'react'
import Visibility from 'react-visibility-sensor'
import { useSpring, animated } from 'react-spring'

import css from './index.module.scss'

export default function About () {

	const list = [
		{
			index: 1,
			value: 'Звонок или заявка',
			label: 'Вы можете записаться к нам на услугу через сайт'
		},
		{
			index: 2,
			value: 'Согласование времени',
			label: 'Мы выбираем свободное и удобное для вас время'
		},
		{
			index: 3,
			value: 'Прием авто в работу',
			label: 'Консультирование и прием автомобиля в работу'
		},
		{
			index: 4,
			value: 'Возвращаем авто',
			label: 'После качественно выполенной работы вы забираете автомобиль'
		}
	]

	const facts = [
		{
			label: 70,
			postfix: '+',
			value: 'Брендов-партнеров с мировым именем',
		},
		{
			label: 850,
			postfix: '+',
			value: 'Автомобилей теперь как новые',
		},
		{
			label: 0,
			postfix: null,
			value: 'Случаев порчи электрики или салона',
		},
		{
			label: 125,
			postfix: '+',
			value: 'Различных средств и инструментов',
		}
	]

	const [visible, onChange] = useState(false)

	return (
		<div className={css.container}>

			<div className={css.inner}>

				<h2 className={css.title}>Как мы работаем?</h2>

				<div className={css.inner}>
					{list.map((val, key) => (
						<div key={key} className={css.item}>
							<div className={css.wrap}>

								<div className={css.index}>
									{val.index}
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


			<div className={css.descWrap}>
				<div className={css.desc}>

					<h2 className={css.title}>
						О Нас
					</h2>

					<Visibility onChange={e => onChange(e || visible)} partialVisibility>
						<div className={css.descList}>
							{facts.map((val, key) => {
								let props = useSpring({ val: val.label, from: { val: 0 }, reset: visible })
								let inter = v => {
									v = Math.floor(v)
									if (v > 0) {
										v += '+'
									}
									return v
								}
								return (
									<div key={key} className={css.descItem}>
										<animated.span>{props.val.interpolate(inter)}</animated.span> {val.value}
									</div>
								)
							})}
						</div>
					</Visibility>
				</div>

			</div>

		</div>
	)
}
