class LoginForm extends FluxComponent {

	stores = ["LoginStore"];
	actions = ["LoginActions"];
	attributes = ["Bind", "BindBi", "Disable"];
	html = "loginform.html";

	private error = "";
	private user: ILoginStoreData = {name: '', password: ''};

	login() {
		ho.flux.ACTIONS.get(LoginActions).login(this.user);
	}
}
