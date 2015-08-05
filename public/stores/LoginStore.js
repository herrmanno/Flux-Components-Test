var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoginStore = (function (_super) {
    __extends(LoginStore, _super);
    function LoginStore() {
        _super.apply(this, arguments);
        this.loggedIn = false;
    }
    LoginStore.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return LoginStore;
})(ho.flux.Store);
