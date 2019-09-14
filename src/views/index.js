import { h } from 'preact'
import { Router } from 'preact-router';
// import AsyncRoute from 'preact-async-route';

// import Preloader from 'components/preloader'

// const Loader = () => {
// 	return (
// 		'[loading]'
// 	)
// }

import Home from './pages/home';
import Layout from './tags/layout';
import Article from './pages/article';
import Error404 from './pages/errors/404';
import Credit from './pages/credit';
import Blog from './pages/blog';

/*const getComponent = (component) => {
	return import(component).then(module => module.default);
}

const Route = ({ path, component }) => {
	return (
		<AsyncRoute
			path={path}
			getComponent={() => getComponent(component)}
			loading={() => <Loader />}
		/>
	);
}*/

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp:obj.url });

export default (
	<Layout>
		<Router onChange={ onChange }>
			<Home path="/" />
			<Blog path="/blog" />
			<Article path="/blog/:title" />
			<Credit path="/credit" />
			{/*<AsyncRoute path="/credit" component='./pages/credit' />*/}
			<Error404 default />
		</Router>
	</Layout>
);
