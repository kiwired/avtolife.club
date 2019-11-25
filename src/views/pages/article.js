import { h } from 'preact';
import { route, Link } from 'preact-router';
import Page from '../tags/page';
import Container from '../tags/container';

import Heading from '../tags/heading';
import Edge from '../tags/edge';
import Step from '../tags/step';
import About from '../tags/about';
import Calc from '../tags/calc';
import Profit from '../tags/profit';
import Team from '../tags/team';
import Maps from '../tags/map';

// componentWillMount() {
// 	route(this.props.to, true);
// }

export default function (props) {
	
	const title = props.slug;

	return (
		<Page>
			
			<Heading />
		
			<Edge />

			<Step />
			
			<About />

			<Calc />

			<Profit />

			<Team />

			<Maps />

		</Page>
	);
}
