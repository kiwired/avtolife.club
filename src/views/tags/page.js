import { h, Component } from 'preact';
import Header from './header';
import Footer from './footer';


class Page extends Component {

	render(props) {
		return (
			<div className='page'>
				<Header />
				<main {...props} />
				<Footer />
			</div>
		);
	}
}

export default Page;
