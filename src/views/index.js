import { h } from 'preact'
import { Router } from 'preact-router';

import Layout from './tags/layout';

import Home from './pages/home';
import Article from './pages/article';
import Error404 from './pages/errors/404';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp: obj.url });

export default (
	<Layout>
		<Router onChange={onChange}>
			<Home path='/' />
			<Article path='/:title' />
			<Error404 default />
		</Router>
	</Layout>
);
