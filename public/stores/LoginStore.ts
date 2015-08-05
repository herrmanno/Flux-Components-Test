interface ILoginStoreData {

}

class LoginStore extends ho.flux.Store<ILoginStoreData> {

	private loggedIn = false;

	isLoggedIn(): boolean {
		return this.loggedIn;
	}
}
