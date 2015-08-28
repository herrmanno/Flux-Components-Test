/// <reference path="../../typing.d.ts"/>

class MyRouter extends Router {

	constructor() {
		super();
		this.on('STATE', this.onStateChangeRequested.bind(this));
	}

	@ho.flux.Store.on(CONST.LOGIN_OK)
	onLogin_OK() {
		ho.flux.DISPATCHER.waitFor(ho.flux.STORES.get(LoginStore).id);
		let data = {state: 'private', args: null, extern: false};
		this.onStateChangeRequested(data);
	}

	mapping =  [
		{
			name: 'home',
			url: 'home',
			view: [
				{name: 'view1', html: '<h3>Home</h3>'}
			]
		},
		{
			name: 'login',
			url: 'login',
			view: [
				{name: 'view1', component: 'LoginForm'}
			]
		},
		{
			name: 'private',
			url: 'private',
			before: data => {
				return ho.flux.STORES.get(LoginStore).check(data);
			},
			view: [
				{ name: 'view1', html: '<p>PRIVATE! Go away!</p>' }
			]
		},
		{
			name: 'catchall',
			url: '.*',
			redirect: 'home'
		}
	];
}
