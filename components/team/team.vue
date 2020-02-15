<template>
	<div class='team'>
		<div class='container'>
		
			<h2 class='team-title'>Наша команда</h2>
			
			<div class="team-inner">

				<div v-for='(item, i) in list' :key='i' class='team-item'>
					<div class='team-item-img' :style='`background-image: url(${item.picture});`'>
					</div>
					<div class='team-item-name'>
						{{item.name}}
					</div>
					<div class='team-item-position'>
						{{item.position}}
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		
		name: 'team',

		data() {
			return {
				list: [
					{
						picture: '',
						name: 'Антон',
						position: 'Директор'
					},
					{
						picture: '',
						name: 'Яков',
						position: 'Специалист по тонировке'
					},
					{
						picture: '',
						name: 'Владимир',
						position: 'Специалист по тонировке'
					},
					{
						picture: '',
						name: 'Александр',
						position: 'Детейлинг-мастер'
					},
					{
						picture: '',
						name: 'Сергей',
						position: 'Специалист по перетяжке салона'
					},
				]
			}
		}
	}
</script>