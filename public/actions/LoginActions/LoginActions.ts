class LoginActions extends ho.flux.actions.Action {

	login(user: ILoginStoreData) {
		ho.flux.DISPATCHER.dispatch({type: CONST.LOGIN, data:user});

		let ls = localStorage['users'];
		let users =  !!ls ? JSON.parse(ls) : [];
		let found = users.filter(u => {return u.name === user.name && u.password === user.password});

		if(found.length === 1)
			ho.flux.DISPATCHER.dispatch({type: CONST.LOGIN_OK, data:user});
		else
			ho.flux.DISPATCHER.dispatch({type: CONST.LOGIN_ERR, data:user});
	}
}
