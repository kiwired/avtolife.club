import axios from 'axios'
import React, { useState, useEffect, useLayoutEffect, useCallback, useRef, forwardRef } from 'react'
import { useTransition, useSpring, useChain, animated, config } from 'react-spring'


import Button from '../../tags/button'
import { Input } from '../../tags/form'

import css from './index.module.scss'


const calcScale = (btn, scrollY, iW, iH) => {
	let rect = btn.getBoundingClientRect()
	let btnW = rect.height
	let btnH = rect.height
	let btnRadius = btnW / 2
	let left = rect.left + btnRadius
	let top = rect.top + btnRadius - scrollY
	return scaleValue(top, left, btnRadius, iW, iH)
}

const scaleValue = (top, left, radius, winW, winH) => {
	let maxDistHor = (left > winW / 2) ? left : (winW - left)
	let maxDistVert = (top > winH / 2) ? top : (winH - top)
	return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radius)
}

export default forwardRef(({ className, title = 'Обратный звонок', action = 'Записаться' }, ref) => {

	const button = useRef(null)
	const [open, setStatus] = useState(false)
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState(null)
	const [form, setForm] = useState({
		name: '',
		phone: ''
	})
	const onInput = useCallback((key) => {
		return (event) => {
			setForm((form) => ({ ...form, [key]: event.target.value }))
		}
	}, [])

	// const [scale, setScale] = useState(1)
	// const [defaultRect, setDefRect] = useState({})
	// const [finishRect, setFinishRect] = useState({})
	const [rect, setRect] = useState({})

	// let scale = 1
	// let defaultRect = {}
	// let finishRect = {}

	const onScroll = () => {

		let scale = calcScale(button.current, window.scrollY, window.innerWidth, window.innerHeight)

		let rect = button.current.getBoundingClientRect()
		// if (open) {
		// 	console.log(rect)
		// }

		setRect({
			scale,
			from: {
				width: `${rect.height / 1}px`,
				height: `${rect.height / 1}px`,
				top: `${rect.top / 1}px`,
				left: `${(rect.left + (rect.width / 2) - (rect.height / 2)) / 1}px`,
				opacity: 0
			},
			to: {
				width: `${window.innerWidth}px`,
				height: `${window.innerHeight}px`,
				top: '0px',
				left: '0px',
				opacity: 1
			}
		})
	}

	useEffect(() => {

		// console.log('useEffect')
		window.addEventListener('load', onScroll)
		window.addEventListener('resize', onScroll)
		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('load', onScroll)
			window.removeEventListener('resize', onScroll)
			window.removeEventListener('scroll', onScroll)
		}
	})

	// useLayoutEffect(() => {
	// 	console.log('useLayoutEffect')
	// 	onScroll()
	// })

	const onClick = useCallback(() => setStatus(prev => {
		let open = !prev
		console.log('onClick', open)
		// let style = document.documentElement.getAttribute('style')
		// if (open) {
		// 	document.documentElement.setAttribute('style', 'overflow: hidden')
		// } else {
		// 	document.documentElement.removeAttribute('style')
		// }
		return open
	}))

	const onSubmit = useCallback((event) => {
		event.preventDefault()
		setLoading(true)

		const params = {
			to: '79237672918',
			text: `Запрос звонка с сайта. ${form.phone} ${form.name}`,
		}

		axios.post('/api/sms', {}, { params })
			.then((res) => {
				console.log(res)
				setAlert('Ваша заявка принята. В ближайшее время с Вами свяжется наш администратор')
			})
			.catch((error) => {
				setAlert(error.message)
			})
	}, [form])

	const refWrap = useRef()
	const trans = useTransition(open, null, {
		ref: refWrap,
		config: {
			duration: 10
		},
		from: { ...rect.to, opacity: 0 },
		enter: rect.to,
		leave: { ...rect.to, opacity: 0 }
	})

	const refOverflow = useRef()
	const styleOverflow = useSpring({
		ref: refOverflow,
		// config: config.stiff,
		from: rect.from,
		to: {
			...rect.from,
			opacity: open ? 1 : 0,
			transform: open ? `scale(${rect.scale})` : 'scale(0.1)'
		}
	})

	const refBody = useRef()
	const propsBody = useSpring({
		ref: refBody,
		config: config.stiff,
		from: {
			opacity: 0,
			transform: 'scale(0.5) skewX(0deg)'
		},
		to: open ? {
			opacity: 1,
			transform: 'scale(1) skewX(-3deg)'
		} : {
			opacity: 0,
			transform: 'scale(0.5) skewX(0deg)'
		},
	})

	useChain(open ? [refWrap, refOverflow, refBody] : [refBody, refOverflow, refWrap], [0, 0.5, 1])

	return (
		<>

			<Button className={className} onClick={onClick}>
				<span ref={button}>{action}</span>
			</Button>

			{/* <div key={key} className={css.wrap} style={props}>
				<div className={css.overflow} style={styleOverflow} onClick={onClick} />
				<div className={css.window} style={propsBody}>
					<form onSubmit={onSubmit}>

						<div className={css.title}>
							{title}
						</div>

						<div className={css.subtitle}>
							Пожалуйста, укажите Ваши контактные данные, в ближайшее время мы перезвоним
						</div>

						<div className={css.row}>
							<Input type='text' name='fullname' label='Имя:' placeholder='Иван' onInput={onInput('name')} />
						</div>

						<div className={css.row}>
							<Input type='tel' name='phone' label='Номер телефона:' placeholder='+7 (908) 315-63-07' onInput={onInput('phone')} />
						</div>

						<div className={css.action}>
							<Button size={'small'} disabled={loading}>
								Перезвонить мне
							</Button>
						</div>

						{alert && (
							<div className={css.row}>
								{alert}
							</div>
						)}

					</form>
				</div>
			</div> */}

		</>
	)
})
