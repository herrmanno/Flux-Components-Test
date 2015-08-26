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
        this.actions = ["LoginActions"];
        this.attributes = ["Bind", "BindBi", "Disable"];
        this.html = "loginform.html";
        this.error = "";
        this.user = { name: '', password: '' };
    }
    LoginForm.prototype.login = function () {
        ho.flux.ACTIONS.get(LoginActions).login(this.user);
    };
    return LoginForm;
})(FluxComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Gb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5Gb3JtLnRzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIkxvZ2luRm9ybS5jb25zdHJ1Y3RvciIsIkxvZ2luRm9ybS5sb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUF3QkEsNkJBQWFBO0lBQXJDQTtRQUF3QkMsOEJBQWFBO1FBRXBDQSxXQUFNQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtRQUN4QkEsWUFBT0EsR0FBR0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLGVBQVVBLEdBQUdBLENBQUNBLE1BQU1BLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO1FBQzNDQSxTQUFJQSxHQUFHQSxnQkFBZ0JBLENBQUNBO1FBRWhCQSxVQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNYQSxTQUFJQSxHQUFvQkEsRUFBQ0EsSUFBSUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUEsRUFBRUEsRUFBQ0EsQ0FBQ0E7SUFLMURBLENBQUNBO0lBSEFELHlCQUFLQSxHQUFMQTtRQUNDRSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNwREEsQ0FBQ0E7SUFDRkYsZ0JBQUNBO0FBQURBLENBQUNBLEFBYkQsRUFBd0IsYUFBYSxFQWFwQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvZ2luRm9ybSBleHRlbmRzIEZsdXhDb21wb25lbnQge1xuXG5cdHN0b3JlcyA9IFtcIkxvZ2luU3RvcmVcIl07XG5cdGFjdGlvbnMgPSBbXCJMb2dpbkFjdGlvbnNcIl07XG5cdGF0dHJpYnV0ZXMgPSBbXCJCaW5kXCIsIFwiQmluZEJpXCIsIFwiRGlzYWJsZVwiXTtcblx0aHRtbCA9IFwibG9naW5mb3JtLmh0bWxcIjtcblxuXHRwcml2YXRlIGVycm9yID0gXCJcIjtcblx0cHJpdmF0ZSB1c2VyOiBJTG9naW5TdG9yZURhdGEgPSB7bmFtZTogJycsIHBhc3N3b3JkOiAnJ307XG5cblx0bG9naW4oKSB7XG5cdFx0aG8uZmx1eC5BQ1RJT05TLmdldChMb2dpbkFjdGlvbnMpLmxvZ2luKHRoaXMudXNlcik7XG5cdH1cbn1cbiJdfQ==