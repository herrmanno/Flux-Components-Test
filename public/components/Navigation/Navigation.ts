class Navigation extends Stored {

	html = "navigation.html";

	stores = ["LoginStore"];

	private loggedIn = false;

	init() {
		return super.init()
		.then(() => {
			ho.flux.STORES.get(LoginStore).register(this.loginStoreChanged, this);
		})
	}

	protected loginStoreChanged(data: ILoginStoreData): void {
		this.loggedIn = !!data.name;
	}
}
