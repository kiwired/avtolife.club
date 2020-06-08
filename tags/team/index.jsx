import React from 'react'

import css from './index.module.scss'

export default () => {

	const list = [
		// {
		// 	picture: '/img/team/01.jpg',
		// 	name: 'Антон',
		// 	position: 'Директор'
		// },
		{
			picture: '/img/team/04.jpg',
			name: 'Яков',
			position: 'Специалист по тонировке'
		},
		{
			picture: '/img/team/01.jpg',
			name: 'Владимир',
			position: 'Специалист по тонировке'
		},
		{
			picture: '/img/team/02.jpg',
			name: 'Александр',
			position: 'Детейлинг-мастер'
		},
		// {
		// 	// picture: '/img/team/01.jpg',
		// 	name: 'Сергей',
		// 	position: 'Специалист по перетяжке салона'
		// },
	]

	return (
		<div className={css.team}>
			<div className={css.inner}>

				<h2 className={css.title}>Наша команда</h2>

				<div className={css.list}>
					{list.map((val, key) => (
						<div key={key} className={css.item}>

							{val.picture && (
								<img className={css.img} src={val.picture} />
							)}

							<div className={css.name}>
								{val.name}
							</div>

							<div className={css.position}>
								{val.position}
							</div>

						</div>
					))}
				</div>

			</div>
		</div>
	)
}
