<template>
	<div class='step' :style='`backgroundImage: url(${list[active] ? list[active].thumb : null})`'>
		<div class='container'>
			<div class="step-inner">

				<div v-for='(item, i) in list' :key='i' :class="`step-item ${active == i ? 'active' : ''}`" @click="onClick(i)">
					<div class="step-item-inner">

						<div class="step-item-index">
							{{i + 1}} шаг
						</div>

						<div class="step-item-value">
							{{item.value}}
						</div>

						<div v-if="item.label" class="step-item-label">
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
		
		name: 'Steps',

		props: ['list'],

		data () {
			return {
				active: 0
			}
		},

		methods: {

			onClick (key) {
				this.active = key
			},

		}
	}
</script>