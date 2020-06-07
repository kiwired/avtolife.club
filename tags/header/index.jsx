import React from 'react'
import Link from 'next/link'

import list from '../../routes.json'

import Modal from '../../forms/call'

import css from './index.module.scss'

export default () => {
	return (
		<header className={css.container}>
			<div className={css.inner}>

				<Link href="/">
					<a className={css.logo}>
						<img src="/img/logo.svg" alt="avto life - styling and detailing" />
					</a>
				</Link>

					<Link href="/">
						<a className={css.home} />
					</Link>

					<span className={css.toggle}>
						<span />
						<span />
						<span />
					</span>

					<div className={css.overflow} />

					<div className={css.wrap}>
						<div className={css.overflow} />
						<div className={css.nav}>
							{list.map((val, key) => {

								const el = (v, k) => {
									return (
										<Link key={k} href={v.href}>
											<a>
												{v.title}
											</a>
										</Link>
									)
								}

								if (val.childs) {
									return (
										<span key={key}>
											<span>{val.title}</span>
											<ul>
												{val.childs.map((v, k) => (
													<li key={k}>
														{el(v, k)}
													</li>
												))}
											</ul>
										</span>
									)
								}

								return el(val, key)
							})}
						</div>

						<Modal className={css.call} action='Записаться' />

						<div className={css.address}>
							<span>г. Омск, ул. Химиков, 60</span>
							<a href="tel:83812492500">+7 (3812) 49-25-00</a>
						</div>

					</div>

			</div>
		</header>
	)
}
