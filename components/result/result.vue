<template>
	<div class="result">
		<div class="container">
			<div class="grid grid-center grid-stretch grid-large">

				<div v-if="image" class="width-medium-1-2">
					<div class="result-thumb" :style='`background-image: url(${image});`' />
				</div>

				<div class="width-medium-1-2">
					<h2 class="result-title">
						{{title}}
					</h2>
					<div class="result-text">
						<slot />
					</div>
				</div>

				<div v-if="action !== false" class="width-medium-1-1">
					<Action className='result-center' action="Записаться" />
				</div>

			</div>
		</div>
	</div>
</template>

<script>

	export default {
		
		name: 'Result',

		props: ['title', 'image', 'action']

	}
</script>

<style lang='stylus'>

	.result {
		padding: 60px 0 0;

		.grid > * {
			margin-bottom: 60px
		}

		& + .result .grid {
			flex-flow: row-reverse wrap
		}
	}

	.result-thumb {
		height: 100%;
		width 100%;
		background: no-repeat center / cover
		padding-bottom: 60%
	}

	.result-title {
		text-transform uppercase
		color #464646
		margin: 0 0 40px

		&::before {
			content: '';
			display inline-block
			vertical-align middle
			background: url("data:image/svg+xml,%0A%3Csvg width='38px' height='46px' viewBox='0 0 38 46' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='snape' fill='%23FE6128'%3E%3Cpath d='M38,19.0802 C38,8.54269 29.4932,0 19,0 C8.5068,0 0,8.54269 0,19.0802 C0,24.3521 2.13281,29.1201 5.57444,32.5737 L5.56505,32.5831 L19.1057,46 L25.593,39.3974 L12.1937,26.1207 L12.2031,26.1112 C10.3756,24.3294 9.2363,21.8402 9.2363,19.0802 C9.2363,13.6657 13.6076,9.2759 18.9994,9.2759 C24.3911,9.2759 28.7625,13.6657 28.7625,19.0802 C28.7625,21.8402 27.6225,24.3294 25.7951,26.1112 L25.8032,26.1194 L22.4904,29.4914 L29.064,36.0047 L32.4337,32.5756 L32.4281,32.5699 C35.8685,29.1169 38,24.3502 38,19.0802 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E") no-repeat center / contain
			width: 38px
			height 46px
			margin: 0 15px 0 0
		}
	}

	.result-center {
		text-align: center
	}

</style>