<template>
	<div :class="className">

		<button type="button" class="button text-uppercase text-bold" @click="onToggle">{{action}}</button>

		<el-dialog :visible.sync="opened" :title="title">

			<div class="form-row">
				<input v-model="name" type="text" placeholder="Имя" />
			</div>

			<div class="form-row">
				<input v-model="phone" type="tel" placeholder="Номер телефона" v-mask="'+7 (###) ###-##-##'" />
			</div>

			<div class="form-row text-center">
				<button type="button" class="button button-small" @click="onSend">
					Перезвоните мне
				</button>
			</div>

			<div class="form-row text-center text-small">
				Нажимая на кнопку, вы принимаете <a href="#">политику конфиденциальности</a>
			</div>

		</el-dialog>

	</div>
</template>

<script>
	export default {
		
		name: 'Action',

		props: {
			className: {
				type: String
			},
			action: {
				type: String,
				default: 'Записаться'
			},
			title: {
				type: String,
				default: 'Оставьте свой номер и мы вам перезвоним'
			},
		},

		data () {
			return {
				opened: false,

				name: '',
				phone: ''
			}
		},

		methods: {

			onToggle () {
				this.opened = !this.opened
			},

			onSend() {

			}

		}
	}
</script>

<style lang='styl'>

	.el-icon-close {
		content: '';
		display: block;
		background: no-repeat center / cover;
		// background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 492' style='enable-background:new 0 0 492 492;' xml:space='preserve'%3E%3Cpath d='M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z'/%3E%3C/svg%3E%0A");
		width: 18px;
		height: 18px;
		opacity: .5;
		transition: .2s ease forwards;

		&:hover {
			opacity: 1;
		}
	}

	.v-modal-enter {
		-webkit-animation: v-modal-in .2s ease;
		animation: v-modal-in .2s ease; }

	.v-modal-leave {
		-webkit-animation: v-modal-out .2s ease forwards;
		animation: v-modal-out .2s ease forwards; }

	@-webkit-keyframes v-modal-in {
		0% {
			opacity: 0; }
		100% { } }

	@keyframes v-modal-in {
		0% {
			opacity: 0; }
		100% { } }

	@-webkit-keyframes v-modal-out {
		0% { }
		100% {
			opacity: 0; } }

	@keyframes v-modal-out {
		0% { }
		100% {
			opacity: 0; } }

	.v-modal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		background: #000000; }

	.el-popup-parent--hidden {
		overflow: hidden; }

	.el-dialog {
		position: relative;
		margin: 0 auto 50px;
		background: #FFFFFF;
		border-radius: 1px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		width: 100%;
		max-width: 320px
		border-radius: 2px
	}
		.el-dialog.is-fullscreen {
			width: 100%;
			margin-top: 0;
			margin-bottom: 0;
			height: 100%;
			overflow: auto; }
		.el-dialog__wrapper {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			overflow: auto;
			margin: 0; }
		.el-dialog__header {
			padding: 25px 45px 0;
		}
		.el-dialog__headerbtn {
			position: absolute;
			top: 20px;
			right: 20px;
			padding: 0;
			background: transparent;
			border: none;
			outline: none;
			cursor: pointer;
			font-size: 16px; }
			.el-dialog__headerbtn .el-dialog__close {
				color: #909399; }
			.el-dialog__headerbtn:focus .el-dialog__close, .el-dialog__headerbtn:hover .el-dialog__close {
				color: #1daeea; }
		.el-dialog__title {
			font-size: 22px;
			color: #303133;
			text-align: center;
			display: block;
			line-height: 1.2;
		}
		.el-dialog__body {
			padding: 20px 20px 30px 20px;
			color: #606266;
			// font-size: 14px;
			// word-break: break-all;
		}
		.el-dialog__footer {
			padding: 20px;
			padding-top: 10px;
			text-align: right;
			box-sizing: border-box; }
		.el-dialog--center {
			text-align: center; }
			.el-dialog--center .el-dialog__body {
				text-align: initial;
				padding: 25px 25px 30px; }
			.el-dialog--center .el-dialog__footer {
				text-align: inherit; }

	.dialog-fade-enter-active {
		-webkit-animation: dialog-fade-in .3s;
		animation: dialog-fade-in .3s; }

	.dialog-fade-leave-active {
		-webkit-animation: dialog-fade-out .3s;
		animation: dialog-fade-out .3s; }

	@-webkit-keyframes dialog-fade-in {
		0% {
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0);
			opacity: 0; }
		100% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			opacity: 1; } }

	@keyframes dialog-fade-in {
		0% {
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0);
			opacity: 0; }
		100% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			opacity: 1; } }

	@-webkit-keyframes dialog-fade-out {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			opacity: 1; }
		100% {
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0);
			opacity: 0; } }

	@keyframes dialog-fade-out {
		0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			opacity: 1; }
		100% {
			-webkit-transform: translate3d(0, -20px, 0);
			transform: translate3d(0, -20px, 0);
			opacity: 0; } }

</style>