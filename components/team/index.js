import Component from './team';

/* istanbul ignore next */
Component.install = function (Vue) {
	Vue.component(Component.name, Component);
};

export default Component;