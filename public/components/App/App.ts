/// <reference path="../../typing.d.ts"/>

class App extends ho.components.Component {

	html = "app.html";

	requires = ["Navigation", "View"];

	init() {
		return ho.flux.STORES.loadStore('LoginStore');
	}
}
