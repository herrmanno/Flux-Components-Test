class MyRouter extends ho.flux.Router {

	@ho.flux.Store.on(CONST.LOGIN_OK)
	onLogin_OK() {
		ho.flux.DISPATCHER.waitFor(ho.flux.STORES.get(LoginStore).id);
		let data = {state: 'private', args: null, extern: false};
		this.onStateChangeRequested(data);
	}
}
