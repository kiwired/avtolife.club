import React, { useState, useEffect, useLayoutEffect, useCallback, useRef, forwardRef } from 'react'
import { useTransition, useSpring, useChain, animated, config } from 'react-spring'
import Link from 'next/link'

import Modal from '../../forms/call'
import Nav from './Nav'
import Address from './Address'

import css from './index.module.scss'

export default function Header() {

	const [open, setOpen] = useState(false)
	const [mobile, setMobile] = useState(false)

	const onResize = () => {
		if (mobile && window.innerWidth > 640) {
			setMobile(false)
		} else if (!mobile && window.innerWidth <= 640) {
			setMobile(true)
		}
	}

	const onToggle = useCallback(() => setOpen(prev => {
		const next = !prev

		if (window.innerWidth > 640) {
			document.body.removeAttribute('style')
			return false
		}

		if (next) {
			document.body.setAttribute('style', 'overflow: hidden')
		} else {
			document.body.removeAttribute('style')
		}

		return next
	}))

	useEffect(() => {
		onResize()
		// window.addEventListener('load', onResize)
		window.addEventListener('resize', onResize)
		// window.addEventListener('scroll', onResize)

		return () => {
			// window.removeEventListener('load', onResize)
			window.removeEventListener('resize', onResize)
			// window.removeEventListener('scroll', onResize)
		}
	})

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

				<Wrap isMobile={mobile} open={open} />

			</div>
		</header>
	)
}


const Wrap = ({ isMobile = false, open = false }) => {

	if (!isMobile) {
		return (
			<div className={css.wrap}>
				<Nav />
				<Modal className={css.call} action='Записаться' />
				<Address />
			</div>
		)
	}

	const from = {
		opacity: 0,
		transform: 'translate(1.5rem, 0)'
	}

	const trans = useTransition(open, null, {
		from: from,
		leave: from,
		enter: {
			opacity: 1,
			transform: 'translate(0, 0)'
		}
	})

	return trans.map(({ item, props, key }) => !item ? null : (
		<animated.div key={key} className={css.wrap} style={props}>
			<div className={css.overflow} />
			<div className={css.bg}>
				<Nav />
				<Address />
			</div>
		</animated.div>
	))
}
