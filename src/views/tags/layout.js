import { h, Component } from 'preact';


class Layout extends Component {

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

	onResize = () => {
		// If there's a timer, cancel it
		if (this.timeout) {
			window.cancelAnimationFrame(this.timeout);
		}
		// Setup the new requestAnimationFrame()
		this.timeout = window.requestAnimationFrame(this.onRatio);
	}

	componentDidMount() {

		this.viewport = document.querySelector('meta[name="viewport"]');

		if (!this.viewport) {
			return;
		}

		this.onResize();

		window.addEventListener('resize', this.onResize);
	}

	render(props) {
		return props.children[0];
		// return (
		// 	<div class='layout' {...props} />
		// );
	}
}

export default Layout;
