<template>
	<div class="calc">
		<div class="container">
			<div class="calc-wrap">
				<div class="calc-inner">

					<h2 class="calc-title">Стоимость <small>{{title}}</small></h2>
					
					<div class="calc-desc">{{label}}</div>

					<div class="calc-select">

						<label v-for="(item, i) in list" :key="i">
							<input type="checkbox" name="car" :value="item.value"><span>{{item.label}}</span>
						</label>

					</div>
					
					<div class="calc-price">от 0 ₽</div>
					
					<Action className='calc-call' action="Заказать звонок" />

				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		
		name: 'price',

		props: ['title', 'label', 'list']

	}
</script>