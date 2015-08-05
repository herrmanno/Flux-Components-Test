class LoginForm extends Stored {

	stores = ["LoginStore"];
	attributes = ["Bind"];
	html = "loginform.html";

	private error = "";
	private user = {};

	login() {
		alert(JSON.stringify(this.user));
	}
}
