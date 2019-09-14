import { h, Component } from 'preact';
import Header from './header';
import throttle from 'lodash/throttle';


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
		// this.setState({ viewport, fontSize });
	}

	componentDidMount() {

		this.viewport = document.querySelector('meta[name="viewport"]');

		if (!this.viewport) {
			return;
		}

		this.onRatio = throttle(this.onRatio, 100);

		this.onRatio();

		window.addEventListener('resize', this.onRatio);
	}

	render(props) {
		return (
			<div class='layout'>
				<Header />
				<main {...props} />
			</div>
		);
	}
}

export default Layout;
