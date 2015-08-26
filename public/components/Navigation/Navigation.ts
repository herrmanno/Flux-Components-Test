class Navigation extends FluxComponent {

	html = "navigation.html";

	stores = ["LoginStore"];

	private loggedIn = false;

	init() {
		let self = this;
		return super.init()
		.then(() => {
			self.stores['LoginStore'].register(self.loginStoreChanged, self);
		})
	}

	protected loginStoreChanged(data: ILoginStoreData): void {
		this.loggedIn = !!data.name;
		this.render();
	}
}
