var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.apply(this, arguments);
        this.stores = ["LoginStore"];
        this.attributes = ["Bind"];
        this.html = "loginform.html";
        this.error = "";
        this.user = {};
    }
    LoginForm.prototype.login = function () {
        alert(JSON.stringify(this.user));
    };
    return LoginForm;
})(Stored);
