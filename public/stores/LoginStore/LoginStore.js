var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoginStore = (function (_super) {
    __extends(LoginStore, _super);
    function LoginStore() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(LoginStore.prototype, "loggedIn", {
        get: function () {
            return !!this.data.name && !!this.data.password;
        },
        enumerable: true,
        configurable: true
    });
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
    LoginStore.prototype.onLogin_OK = function (user) {
        this.data = user;
        this.changed();
    };
    LoginStore.prototype.onLogin_ERR = function (user) {
        this.data = {};
        this.changed();
    };
    Object.defineProperty(LoginStore.prototype, "onLogin_OK",
        __decorate([
            ho.flux.Store.on(CONST.LOGIN_OK), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object]), 
            __metadata('design:returntype', void 0)
        ], LoginStore.prototype, "onLogin_OK", Object.getOwnPropertyDescriptor(LoginStore.prototype, "onLogin_OK")));
    Object.defineProperty(LoginStore.prototype, "onLogin_ERR",
        __decorate([
            ho.flux.Store.on(CONST.LOGIN_ERR), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object]), 
            __metadata('design:returntype', void 0)
        ], LoginStore.prototype, "onLogin_ERR", Object.getOwnPropertyDescriptor(LoginStore.prototype, "onLogin_ERR")));
    return LoginStore;
})(ho.flux.Store);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2luU3RvcmUudHMiXSwibmFtZXMiOlsiTG9naW5TdG9yZSIsIkxvZ2luU3RvcmUuY29uc3RydWN0b3IiLCJMb2dpblN0b3JlLmxvZ2dlZEluIiwiTG9naW5TdG9yZS5jaGVjayIsIkxvZ2luU3RvcmUub25Mb2dpbl9PSyIsIkxvZ2luU3RvcmUub25Mb2dpbl9FUlIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtJQUF5QkEsOEJBQThCQTtJQUF2REE7UUFBeUJDLDhCQUE4QkE7SUE2QnZEQSxDQUFDQTtJQTNCQUQsc0JBQUlBLGdDQUFRQTthQUFaQTtZQUNDRSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUNqREEsQ0FBQ0E7OztPQUFBRjtJQUVEQSwwQkFBS0EsR0FBTEEsVUFBTUEsSUFBd0JBO1FBQzdCRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUNoQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQ0EsT0FBT0EsRUFBRUEsTUFBTUE7WUFDN0NBLElBQUlBLFFBQVFBLEdBQXVCQTtnQkFDbENBLEtBQUtBLEVBQUVBLE9BQU9BO2dCQUNkQSxJQUFJQSxFQUFFQSxFQUFFQTtnQkFDUkEsTUFBTUEsRUFBRUEsS0FBS0E7YUFDYkEsQ0FBQ0E7WUFDRkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDbERBLENBQUNBLENBQUNBLENBQUNBO0lBQ0pBLENBQUNBO0lBR0RILCtCQUFVQSxHQURWQSxVQUNXQSxJQUFxQkE7UUFDL0JJLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2pCQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFHREosZ0NBQVdBLEdBRFhBLFVBQ1lBLElBQXFCQTtRQUNoQ0ssSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBb0JBLEVBQUVBLENBQUNBO1FBQ2hDQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFWREwsc0JBQ0FBLGtDQUFVQTs7WUFEVEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Ozs7V0FDakNBLGtDQUFVQSxrQ0FBVkEsa0NBQVVBLElBR1RBO0lBRURBLHNCQUNBQSxtQ0FBV0E7O1lBRFZBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBOzs7O1dBQ2xDQSxtQ0FBV0Esa0NBQVhBLG1DQUFXQSxJQUdWQTtJQUNGQSxpQkFBQ0E7QUFBREEsQ0FBQ0EsQUE3QkQsRUFBeUIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBNkJyQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJTG9naW5TdG9yZURhdGEge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmNsYXNzIExvZ2luU3RvcmUgZXh0ZW5kcyBoby5mbHV4LlN0b3JlPElMb2dpblN0b3JlRGF0YT4ge1xuXG5cdGdldCBsb2dnZWRJbigpIHtcblx0XHRyZXR1cm4gISF0aGlzLmRhdGEubmFtZSAmJiAhIXRoaXMuZGF0YS5wYXNzd29yZDtcblx0fVxuXG5cdGNoZWNrKGRhdGE6IGhvLmZsdXguSVJvdXRlRGF0YSk6IGhvLnByb21pc2UuUHJvbWlzZTxhbnksIGFueT4ge1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gbmV3IGhvLnByb21pc2UuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgcmVkaXJlY3Q6IGhvLmZsdXguSVJvdXRlRGF0YSA9IHtcblx0XHRcdFx0c3RhdGU6ICdsb2dpbicsXG5cdFx0XHRcdGFyZ3M6IHt9LFxuXHRcdFx0XHRleHRlcm46IGZhbHNlXG5cdFx0XHR9O1xuXHRcdFx0c2VsZi5sb2dnZWRJbiA/IHJlc29sdmUobnVsbCkgOiByZWplY3QocmVkaXJlY3QpO1xuXHRcdH0pO1xuXHR9XG5cblx0QGhvLmZsdXguU3RvcmUub24oQ09OU1QuTE9HSU5fT0spXG5cdG9uTG9naW5fT0sodXNlcjogSUxvZ2luU3RvcmVEYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gdXNlcjtcblx0XHR0aGlzLmNoYW5nZWQoKTtcblx0fVxuXG5cdEBoby5mbHV4LlN0b3JlLm9uKENPTlNULkxPR0lOX0VSUilcblx0b25Mb2dpbl9FUlIodXNlcjogSUxvZ2luU3RvcmVEYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gPElMb2dpblN0b3JlRGF0YT57fTtcblx0XHR0aGlzLmNoYW5nZWQoKTtcblx0fVxufVxuIl19