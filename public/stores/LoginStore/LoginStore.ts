interface ILoginStoreData {
	name: string;
	password: string;
}

class LoginStore extends ho.flux.Store<ILoginStoreData> {

	get loggedIn() {
		return !!this.data.name && !!this.data.password;
	}

	check(data: ho.flux.IRouteData): ho.promise.Promise<any, any> {
		let self = this;
		return new ho.promise.Promise((resolve, reject) => {
			let redirect: ho.flux.IRouteData = {
				state: 'login',
				args: {},
				extern: false
			};
			self.loggedIn ? resolve(null) : reject(redirect);
		});
	}

	@ho.flux.Store.on(CONST.LOGIN_OK)
	onLogin_OK(user: ILoginStoreData) {
		this.data = user;
		this.changed();
	}

	@ho.flux.Store.on(CONST.LOGIN_ERR)
	onLogin_ERR(user: ILoginStoreData) {
		this.data = <ILoginStoreData>{};
		this.changed();
	}
}
