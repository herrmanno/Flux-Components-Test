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
        this.attributes = ["Bind", "BindBi"];
        this.html = "loginform.html";
        this.error = "";
        this.user = {};
    }
    LoginForm.prototype.login = function () {
        var self = this;
        ho.flux.STORES.get(LoginStore).login(this.user)
            .then(function () {
            self.error = '';
            window.alert('Login success');
        })
            .catch(function (e) {
            self.error = e;
        });
    };
    return LoginForm;
})(Stored);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIkxvZ2luRm9ybS5jb25zdHJ1Y3RvciIsIkxvZ2luRm9ybS5sb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUF3QkEsNkJBQU1BO0lBQTlCQTtRQUF3QkMsOEJBQU1BO1FBRTdCQSxXQUFNQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtRQUN4QkEsZUFBVUEsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDaENBLFNBQUlBLEdBQUdBLGdCQUFnQkEsQ0FBQ0E7UUFFaEJBLFVBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ1hBLFNBQUlBLEdBQXFDQSxFQUFFQSxDQUFDQTtJQWFyREEsQ0FBQ0E7SUFYQUQseUJBQUtBLEdBQUxBO1FBQ0NFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTthQUM5Q0EsSUFBSUEsQ0FBQ0E7WUFDTEEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDaEJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBO1FBQy9CQSxDQUFDQSxDQUFDQTthQUNEQSxLQUFLQSxDQUFDQSxVQUFBQSxDQUFDQTtZQUNQQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNoQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7SUFDSEEsQ0FBQ0E7SUFDRkYsZ0JBQUNBO0FBQURBLENBQUNBLEFBcEJELEVBQXdCLE1BQU0sRUFvQjdCIn0=