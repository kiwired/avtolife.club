<template>
	<div class='edge'>
		<div class='container'>
		
			<div class="edge-inner">

				<div v-for='(item, i) in list' :key='i' class="edge-item">
					<div class="edge-item-inner">

						<div class="edge-item-img">
							<img :src='item.img' :alt='`${item.value} - ${item.label}`' />
						</div>

						<div class="edge-item-value">
							{{item.value}}
						</div>

						<div class="edge-item-label">
							{{item.label}}
						</div>

					</div>
				</div>

			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		
		name: 'Edge',

		props: ['list']

	}
</script>