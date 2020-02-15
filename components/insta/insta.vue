<template>
	<div v-if="list.length > 0" class="insta">
		<div class="container">
			<div class="grid grid-stretch">

				<div v-for='(item, i) in list' :key='i' class='insta-item'>
					<img :src="item.media" />
					<div>
						<span>
							{{item.likes}}
						</span>
						<span>
							{{item.comments}}
						</span>
					</div>
					<a :href="item.link" target="_blank" />
				</div>

			</div>
		</div>
	</div>
</template>

<script>

	export default {
		
		name: 'Insta',

		props: ['keys'],

		data () {
			return {
				list: []
			}
		},

		mounted () {
			this.onLoad();
		},

		methods: {
			onLoad () {
				let args = {
					credentials: 'same-origin'
				};
				fetch(`https://handmademakers.com/?sr_insta_query=${this.keys}`, args)
					.then(res => res.json())
					.then(res => {
						if (!res.success) {
							console.error(res.data);
							return;
						}
						this.list = res.data
					});
				}
		}
	}
</script>

<style lang='stylus'>
</style>