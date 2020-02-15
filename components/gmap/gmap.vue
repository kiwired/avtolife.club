<template>
	<div class='map'>

		<div class='container'>

			<div class='map-card'>

				<NuxtLink to='/' class='map-logo'>
					<img src='/img/logo-gray.svg' alt='avto life - styling and detailing' />
				</NuxtLink>

				<div class='map-addres'>
					<span>г. Омск, ул. Химиков, 60</span>
					<a href='tel:+73812492500'>+7 (3812) 49-25-00</a>
				</div>

				<div class='map-time'>
					<span>Работаем ежедневно</span>
					<b>с 9:00 до 21:00</b>
				</div>

				<div class='map-navigate'>
					<span>Открыть в</span>
					<a target='_blank' href='//maps.apple.com/?ll=55.057492,73.306156&dirflg=d&address=Омск+ул.Химиков+60'>Карты</a>
					<a target='_blank' href='yandexnavi://show_point_on_map?lat=55.057492&lon=73.306156&zoom=12&no-balloon=0&desc=AvtoLife'>Я.Навигатор</a>
				</div>

				<Action className='map-call' action="Заказать звонок" />

			</div>

		</div>

		<div ref='mapRef' class='map-wrap' />

	</div>
</template>

<script>

	export default {
		
		name: 'gmap',
		
		mounted() {
			// this.$refs.mapRef
		},
		
		methods: {

			onClick(value) {
				// this.$emit('update:model', value);
			},

		}
	}
</script>

<style lang='styl'>
</style>