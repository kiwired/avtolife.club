<template>
	<div>

		<header class="header">
			<div class="container">
			
				<div class="header-inner">
					
					<NuxtLink class="header-logo" to="/">
						<img src="/img/logo.svg" alt="avto life - styling and detailing">
					</NuxtLink>

					<NuxtLink class="header-home" to="/"></NuxtLink>

					<span class="header-toggle"><span></span><span></span><span></span></span>

					<div class="header-nav-overflow" />

					<div class="header-nav-wrap">
						<div class="header-nav">
							<NuxtLink to="/service/polishing">Полировка</NuxtLink>
							<NuxtLink to="/service/cleaning">Химчистка</NuxtLink>
							<span>
								<span>Защита</span>
								<ul>
									<li><NuxtLink to="/service/protection">Бронирование</NuxtLink></li>
									<li><NuxtLink to="/service/ceramics">Керамика</NuxtLink></li>
									<li><NuxtLink to="/service/alarm">Уст.сигнализации</NuxtLink></li>
								</ul>
							</span>
							<span>
								<span>Тонировка</span>
								<ul>
									<li><NuxtLink to="/service/tinting-auto">Автоматическая</NuxtLink></li>
									<li><NuxtLink to="/service/tinting-removable">Съемная</NuxtLink></li>
									<li><NuxtLink to="/service/tinting-athermal">Атермальная</NuxtLink></li>
									<li><NuxtLink to="/service/tinting-gost">по ГОСТу</NuxtLink></li>
									<li><NuxtLink to="/service/tinting-light">Тонировка фар</NuxtLink></li>
								</ul>
							</span>
							<NuxtLink to="/service/soundproofing">Шумоизоляция</NuxtLink>
							<NuxtLink to="/service/learning">Обучение</NuxtLink>
						</div>
						
						<Action className='header-call' action="Записаться" />
						
						<div class="header-addres">
							<span>г. Омск, ул. Химиков, 60</span>
							<a href="tel:83812492500">8 (3812) 49-25-00</a>
							<a href="tel:89083156307">8 (908) 315-63-07</a>
						</div>
					</div>

				</div>

			</div>
		</header>

		<Nuxt />

		<footer class="footer">
			<div class="container">
				<div class="footer-inner">

					<a class="footer-logo" href="/">
						<img src="/img/logo.svg" alt="avto life - styling and detailing">
					</a>

					<div class="footer-addres">
						<span>г. Омск, ул. Химиков, 60</span>
						<a href="tel:+73812492500">+7 (3812) 49-25-00</a>
					</div>

					<Action className='footer-call' action="Заказать звонок" />

				</div>
			</div>
		</footer>

	</div>
</template>

<style lang='styl'>
</style>