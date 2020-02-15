<template>
	<div class='heading' :style='`backgroundImage: url(${thumb})`'>
		<div class='container'>

			<h1 class="heading-title">
				{{title}} <small>{{text}}</small>
			</h1>

			<div v-if="action !== false" class="heading-inner">
				<a class='heading-action'>Расчитать</a>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		
		name: 'Head',

		props: ['title', 'text', 'thumb', 'action']

	}
</script>