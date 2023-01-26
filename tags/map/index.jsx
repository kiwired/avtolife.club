import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Visibility from 'react-visibility-sensor'

import Modal from '../../forms/call'

import css from './index.module.scss'

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API


const loader = (src, cb) => {
	let script = document.createElement('script')
	script.async = false
	script.src = src
	script.onload = cb
	document.body.appendChild(script)
}

export default function Map() {

	const node = useRef()
	const [visible, onChange] = useState(false)

	const onInit = () => {

		let lat = 55.0568497
		let lng = 73.3055238

		let ops = {
			// How zoomed in you want the map to start at (always required)
			zoom: 17,
			center: new google.maps.LatLng(lat + 0.0005, lng - 0.003),
			scrollwheel: false,
			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [
				{
					featureType: 'all',
					elementType: 'all',
					stylers: [
						{
							saturation: -100
						},
						{
							gamma: 0.5
						}
					]
				}
			]
		}

		// Create the Google Map using our element and options defined above
		let map = new google.maps.Map(node.current, ops)

		// Let's also add a marker while we're at it
		let marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lng),
			map: map,
			title: 'Map'
		})

		// let path = [
		// 	new google.maps.LatLng(55.071506, 73.295374),
		// 	new google.maps.LatLng(55.070554, 73.296045),
		// 	new google.maps.LatLng(55.070730, 73.296790),
		// 	new google.maps.LatLng(55.070180, 73.297210),
		// 	new google.maps.LatLng(55.070345, 73.297875),
		// 	new google.maps.LatLng(55.069580, 73.298450)
		// ]

		// let flight = new google.maps.Polyline({
		// 	path: path,
		// 	geodesic: true,
		// 	strokeColor: '#f25a23',
		// 	strokeOpacity: 1.0,
		// 	strokeWeight: 2
		// })

		// flight.setMap(map)
	}

	const onVisible = next => onChange(prev => {
		if (prev || !next || !apiKey) {
			return
		}
		const src = `//maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&language=ru_RU&key=${apiKey}`
		loader(src, onInit)
		return next || visible
	})

	return (
		<Visibility onChange={onVisible} partialVisibility>
			<div className={css.map}>
				<div className={css.inner}>

					<div className={css.card}>

						<Link href='/'>
							<a className={css.logo}>
								<img src='/img/logo-gray.svg' alt='avto life - styling and detailing' />
							</a>
						</Link>

						<div className={css.address}>
							<span>г. Омск, ул. Химиков, 60</span>
							<a href='tel:+73812492500'>+7 (3812) 49-25-00</a>
						</div>

						<div className={css.time}>
							<span>Работаем в будни</span>
							<b>с 10:00 до 20:00</b>
							<span>Суббота: 10:00 до 17:00</span>
							<span>Воскресение: выходной</span>
						</div>

						<div className={css.navigate}>
							<span>Открыть в</span>
							<a target='_blank' href='//maps.apple.com/?ll=55.057492,73.306156&dirflg=d&address=Омск+ул.Химиков+60'>Карты</a>
							{', '}<a target='_blank' href='yandexnavi://show_point_on_map?lat=55.057492&lon=73.306156&zoom=12&no-balloon=0&desc=AvtoLife'>Я.Навигатор</a>
						</div>

						<Modal className={css.call} action="Заказать звонок" />

					</div>

				</div>

				<div ref={node} className={css.wrap} />

			</div>
		</Visibility>
	)
}