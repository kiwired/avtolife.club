import { NextSeo } from 'next-seo'
import Link from 'next/link'

import list from '../routes.json'

import css from './index.module.scss'

import Modal from '../forms/call'

const SEO = {
	title: 'Тонировка авто в Омске. Тонирование стекол американской пленкой',
	keywords: 'Тонировка авто в Омске',
	description: 'Avto-life выполнит тонировку автомобиля по ГОСТу качественной американской пленкой. Цена от 2000 руб. Эксклюзивно автоматическая и съемная тонировка стекол',
}

export default () => {

	return (
		<>

			<NextSeo config={SEO} />

			<div className={css.home}>

				<div className={css.inner}>

					<div className={css.head}>
						<div className={css.headLogo}>
							<img src='/img/logo-small.svg' alt='AvtoLife - Основа качественного и безукоризненного результата ' /> Основа качественного и безукоризненного результата
						</div>
						<div className={css.headAddress}>
							г.Омск, ул.Химиков, 60
						</div>
						<div className={css.headPhone}>
							<a href='tel:+73812492500'>+7 (3812) 49-25-00</a>
							<a href='tel:+79083156307'>+7 (908) 315-63-07</a>
						</div>
						<div className={css.headSocial}>
							<a href='//vk.com/clubcarbon'></a>
							<a href='//instagram.com/avtolife.club'></a>
							<a href='//wa.me/79083156307'></a>
						</div>
						<Modal className={css.headCall} action="Записаться" />
					</div>

					<div className={css.nav}>

						{list.map((val, key) => {

							if (val.childs) {
								return (
									<div className={css.navItem} style={{ backgroundImage: `url(${val.thumb})` }}>
										<span className={css.navItemBg} />
										<div className={css.navItemTitle}>
											{val.title} <img src="data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.00211 3.90065L1.26098 0.159678C1.15821 0.0566697 1.02081 2.86102e-06 0.874309 2.86102e-06C0.727724 2.86102e-06 0.590406 0.0566697 0.48748 0.159678L0.159837 0.487482C0.056748 0.590328 0 0.727808 0 0.874312C0 1.02082 0.056748 1.15813 0.159837 1.26106L4.61398 5.71529C4.71724 5.81862 4.8552 5.87521 5.00187 5.8748C5.14919 5.87521 5.28699 5.8187 5.39033 5.71529L9.84016 1.26521C9.94325 1.16228 10 1.02496 10 0.878377C10 0.731873 9.94325 0.594556 9.84016 0.491548L9.51252 0.163824C9.29927 -0.049428 8.95211 -0.049428 8.73894 0.163824L5.00211 3.90065Z' fill='white'/%3E%3C/svg%3E%0A" />
										</div>
										<span className={css.navItemList}>
											{val.childs.map((v, k) => (
												<Link key={k} href={v.href}>
													<a>{v.title}</a>
												</Link>
											))}
										</span>
									</div>
								)
							}

							return (
								<Link key={key} href={val.href}>
									<a className={css.navItem} style={{ backgroundImage: `url(${val.thumb})` }}>
										<span className={css.navItemBg} />
										<span className={css.navItemTitle}>
											{val.title}
										</span>
									</a>
								</Link>
							)
						})}

					</div>

				</div>

			</div>

		</>
	)
}
