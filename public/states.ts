class States implements ho.flux.IStates {

	states = [
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
				{name: 'view1', html: 'html/login.html'}
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
