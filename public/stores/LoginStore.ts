interface ILoginStoreData {
	name: string;
	password: string;
}

class LoginStore extends ho.flux.Store<ILoginStoreData> {

	private loggedIn = false;

	isLoggedIn(): boolean {
		return this.loggedIn;
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

	login(user: ILoginStoreData): ho.promise.Promise<any, any> {
		return new ho.promise.Promise((resolve, reject) => {
			let users = localStorage['users'] && JSON.parse(localStorage['users']) || [];
			let found = users.filter(u => {return u.name === user.name})[0];
			if(found) {
				this.loggedIn = true;
				resolve(true);
			}
			else {
				this.loggedIn = false;
				reject('Wrong credentials');
			}
		});
	}
}
