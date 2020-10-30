import React from 'react'
import Link from 'next/link'

import list from '../../routes.json'

import css from './index.module.scss'

export default function Nav() {
	return (
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
	)
}
