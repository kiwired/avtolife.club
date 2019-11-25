// import '@babel/polyfill';
// import render from 'preact-render-to-string';
import { h, render } from 'preact';
// import GAnalytics from 'ganalytics';

import './index.styl';

let elem, App;

function init() {
	App = require('./views').default;
	elem = render(App, document.body, elem);
}

init();

if (process.env.NODE_ENV === 'production') {
	// cache all assets if browser supports serviceworker
	if ('serviceWorker' in navigator && location.protocol === 'https:') {
		navigator.serviceWorker.register('/service-worker.js');
	}

	// add Google Analytics
	// window.ga = new GAnalytics('UA-65055726-1');
} else {
	// use preact's devtools
	require('preact/devtools');
	// listen for HMR
	if (module.hot) {
		module.hot.accept('./views', init);
	}
}
