import Vue from 'vue'
import About from '~/components/about'
import Action from '~/components/action'
import Edge from '~/components/edge'
import GMap from '~/components/gmap'
import Head from '~/components/head'
import Insta from '~/components/insta'
import Price from '~/components/price'
import Profit from '~/components/result'
import Result from '~/components/profit'
import Steps from '~/components/steps'
import Team from '~/components/team'

const components = [
	About,
	Action,
	Edge,
	GMap,
	Head,
	Insta,
	Price,
	Profit,
	Result,
	Steps,
	Team
];

components.forEach(component => {
	Vue.component(component.name, component);
});
