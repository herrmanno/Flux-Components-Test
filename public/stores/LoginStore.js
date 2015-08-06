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
    LoginStore.prototype.check = function (data) {
        var self = this;
        return new ho.promise.Promise(function (resolve, reject) {
            var redirect = {
                state: 'login',
                args: {},
                extern: false
            };
            self.loggedIn ? resolve(null) : reject(redirect);
        });
    };
    LoginStore.prototype.login = function (user) {
        var _this = this;
        return new ho.promise.Promise(function (resolve, reject) {
            var users = localStorage['users'] && JSON.parse(localStorage['users']) || [];
            var found = users.filter(function (u) { return u.name === user.name; })[0];
            if (found) {
                _this.loggedIn = true;
                resolve(true);
            }
            else {
                _this.loggedIn = false;
                reject('Wrong credentials');
            }
        });
    };
    return LoginStore;
})(ho.flux.Store);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2luU3RvcmUudHMiXSwibmFtZXMiOlsiTG9naW5TdG9yZSIsIkxvZ2luU3RvcmUuY29uc3RydWN0b3IiLCJMb2dpblN0b3JlLmlzTG9nZ2VkSW4iLCJMb2dpblN0b3JlLmNoZWNrIiwiTG9naW5TdG9yZS5sb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtJQUF5QkEsOEJBQThCQTtJQUF2REE7UUFBeUJDLDhCQUE4QkE7UUFFOUNBLGFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO0lBZ0MxQkEsQ0FBQ0E7SUE5QkFELCtCQUFVQSxHQUFWQTtRQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtJQUN0QkEsQ0FBQ0E7SUFFREYsMEJBQUtBLEdBQUxBLFVBQU1BLElBQXdCQTtRQUM3QkcsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDaEJBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQUNBLE9BQU9BLEVBQUVBLE1BQU1BO1lBQzdDQSxJQUFJQSxRQUFRQSxHQUF1QkE7Z0JBQ2xDQSxLQUFLQSxFQUFFQSxPQUFPQTtnQkFDZEEsSUFBSUEsRUFBRUEsRUFBRUE7Z0JBQ1JBLE1BQU1BLEVBQUVBLEtBQUtBO2FBQ2JBLENBQUNBO1lBQ0ZBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBO1FBQ2xEQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVESCwwQkFBS0EsR0FBTEEsVUFBTUEsSUFBcUJBO1FBQTNCSSxpQkFhQ0E7UUFaQUEsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsT0FBT0EsRUFBRUEsTUFBTUE7WUFDN0NBLElBQUlBLEtBQUtBLEdBQUdBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQzdFQSxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFBQSxDQUFDQSxJQUFLQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFBQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNoRUEsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1ZBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNyQkEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7WUFDZkEsQ0FBQ0E7WUFDREEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0xBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUN0QkEsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQTtZQUM3QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFDRkosaUJBQUNBO0FBQURBLENBQUNBLEFBbENELEVBQXlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQWtDckMifQ==