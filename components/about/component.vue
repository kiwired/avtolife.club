<template>
	<div class='about'>
		<div class='container'>
		
			<h2 class='about-title'>
				Как мы работаем?
			</h2>

			<div class="about-inner">
				
				<div v-for='(item, i) in list' :key='i' class="about-item">
					<div class="about-item-inner">

						<div class="about-item-index">
							{{item.index}}
						</div>

						<div class="about-item-value">
							{{item.value}}
						</div>

						<div class="about-item-label">
							{{item.label}}
						</div>

					</div>
				</div>
				
			</div>
			
			<div class="about-desc-wrap">
				<div class="about-desc">

					<h2 class="about-title">
						О Нас
					</h2>

					<div class='about-desc-list'>
						<div v-for='(item, i) in facts' :key='i' class='about-desc-item'>
							<span>{{item.label}}</span> {{item.value}}
						</div>
					</div>

				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		
		name: 'About',

		props: ['list'],

		data () {
			return {
				facts: [
					{
						label: '70+',
						value: 'Брендов-партнеров с мировым именем',
					},
					{
						label: '850+',
						value: 'Автомобилей теперь как новые',
					},
					{
						label: '0',
						value: 'Случаев порчи электрики или салона',
					},
					{
						label: '125+',
						value: 'Различных средств и инструментов',
					}
				]
			}
		}

	}
</script>