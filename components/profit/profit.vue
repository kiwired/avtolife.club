<template>
	<div class="profit">
		<div class="container">
		
			<h2 class="profit-title">Почему это выгодно?</h2>
			
			<div class="profit-inner">

				<div v-for="(item, i) in list" :key="i" class="profit-item">
					<div class="profit-item-inner">
						<div class="profit-item-value">{{item.label}}</div>
						<div class="profit-item-label">{{item.value}}</div>
					</div>
				</div>

			</div>

			<div v-if="hint" class="profit-hint">
				<span>*</span> {{hint}}
			</div>

			<Action className='profit-call' action="Заказать звонок" />

		</div>
	</div>
</template>

<script>

	export default {
		
		name: 'profit',

		props: ['list', 'hint']

	}
</script>