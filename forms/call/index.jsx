import axios from 'axios'
import React, { useState, useEffect, useCallback, useRef, forwardRef } from 'react'
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

	const onScroll = useCallback(() => {

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
	}, [])

	useEffect(() => {
		onScroll()
		window.addEventListener('load', onScroll)
		window.addEventListener('resize', onScroll)
		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('load', onScroll)
			window.removeEventListener('resize', onScroll)
			window.removeEventListener('scroll', onScroll)
		}
	}, [onScroll])

	const onClick = useCallback(() => setStatus(prev => !prev), [])

	const onSubmit = useCallback((event) => {
		event.preventDefault()
		setLoading(true)

		setAlert(null)
		axios.post('/api/call', {
			name: form.name,
			phone: form.phone,
			url: window.location.href,
		})
			.then(() => {
				setAlert('Ваша заявка принята. В ближайшее время с Вами свяжется наш администратор')
			})
			.catch((error) => {
				setAlert(error.response?.data?.data || error.message)
			})
			.finally(() => setLoading(false))
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

			{trans.map(({ item, props, key }) => item && (
				<animated.div key={key} className={css.wrap} style={props}>
					<animated.div className={css.overflow} style={styleOverflow} onClick={onClick} />
					<animated.div className={css.window} style={propsBody} role='dialog' aria-modal='true' aria-labelledby='call-form-title'>
						<button type='button' className={css.close} onClick={onClick} aria-label='Закрыть форму'>×</button>
						<form onSubmit={onSubmit}>
							<div className={css.title} id='call-form-title'>
								{title}
							</div>

							<div className={css.subtitle}>
								Оставьте контакты, и мы ответим на ваши вопросы
							</div>

							<div className={css.row}>
								<Input id='call-name' type='text' name='name' label='Имя:' placeholder='Иван' autoComplete='name' required onInput={onInput('name')} />
							</div>

							<div className={css.row}>
								<Input id='call-phone' type='tel' name='phone' label='Номер телефона:' placeholder='+7 (908) 315-63-07' autoComplete='tel' required onInput={onInput('phone')} />
							</div>

							<div className={css.action}>
								<Button type='submit' size='small' disabled={loading}>
									Перезвонить мне
								</Button>
							</div>

							{alert && (
								<div className={css.row} role='status'>
									{alert}
								</div>
							)}
						</form>
					</animated.div>
				</animated.div>
			))}

		</>
	)
})
