class LoginForm extends Stored {

	stores = ["LoginStore"];
	attributes = ["Bind", "BindBi"];
	html = "loginform.html";

	private error = "";
	private user: ILoginStoreData = <ILoginStoreData>{};

	login() {
		let self = this;
		ho.flux.STORES.get(LoginStore).login(this.user)
		.then(() => {
			self.error = '';
			window.alert('Login success');
		})
		.catch(e => {
			self.error = e;
		})
	}
}
