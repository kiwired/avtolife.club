import React, { useState, useEffect, useLayoutEffect, useCallback, useRef, forwardRef } from 'react'
import { useTransition, useSpring, useChain, animated, config } from 'react-spring'
import Link from 'next/link'

import list from '../../routes.json'

import Modal from '../../forms/call'

import css from './index.module.scss'

export default () => {

	const [open, setOpen] = useState(false)

	const onScroll = () => {
		if (!open && window.innerWidth > 768) {
			setOpen(true)
		}
	}

	const onToggle = useCallback(() => setOpen(prev => {
		const next = !prev

		if (window.innerWidth > 768) {
			return next
		}

		if (next) {
			document.body.setAttribute('style', 'overflow: hidden')
		} else {
			document.body.removeAttribute('style')
		}

		return next
	}))

	useEffect(() => {

		// console.log('useEffect')
		window.addEventListener('load', onScroll)
		window.addEventListener('resize', onScroll)
		// window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('load', onScroll)
			window.removeEventListener('resize', onScroll)
			// window.removeEventListener('scroll', onScroll)
		}
	})


	const from = {
		opacity: 0,
		transform: 'translate(1.5rem, 0)'
	}

	const trans = useTransition(open, null, {
		from: from,
		enter: {
			opacity: 1,
			transform: 'translate(0, 0)'
		},
		leave: from
	})

	// const style = useSpring({
	// 	// config: config.stiff,
	// 	from: {
	// 		opacity: 0
	// 	},
	// 	to: {
	// 		// ...rect.from,
	// 		opacity: open ? 1 : 0,
	// 		// transform: open ? `scale(${rect.scale})` : 'scale(0.1)'
	// 	}
	// })


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

				<span className={`${css.toggle} ${open && css.active}`} onClick={onToggle}>
					<span />
					<span />
					<span />
				</span>

				{trans.map(({ item, props, key }) => !item ? null : (
					<animated.div key={key} className={css.wrap} style={props}>
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

					</animated.div>
				))}

			</div>
		</header>
	)
}
