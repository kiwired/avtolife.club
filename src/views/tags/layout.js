import { h, Component } from 'preact';


class Layout extends Component {

	state = {
		viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
		fontSize: '100%'
	}

	onRatio = () => {

		const width = window.innerWidth || document.documentElement.innerWidth;

		let viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';
		let fontSize = 100;

		if (width > 640) {
			fontSize = (width / 1280 * 100) + '%';
			viewport = 'user-scalable=no, width=1280';
		} else {
			fontSize = (width / 480 * 100) + '%';
		}

		this.viewport.setAttribute('content', viewport);
		document.documentElement.style.fontSize = fontSize;
	}

	componentDidMount() {

		this.viewport = document.querySelector('meta[name="viewport"]');

		if (!this.viewport) {
			return;
		}

		let timeout = window.requestAnimationFrame(this.onRatio);

		window.addEventListener('resize', () => {
			// If there's a timer, cancel it
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}
			// Setup the new requestAnimationFrame()
			timeout = window.requestAnimationFrame(this.onRatio);
		});
	}

	render(props) {
		return props.children[0];
		// return (
		// 	<div class='layout' {...props} />
		// );
	}
}

export default Layout;
