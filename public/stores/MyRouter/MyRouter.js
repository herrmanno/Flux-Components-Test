/// <reference path="../../typing.d.ts"/>
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
var MyRouter = (function (_super) {
    __extends(MyRouter, _super);
    function MyRouter() {
        _super.call(this);
        this.mapping = [
            {
                name: 'home',
                url: 'home',
                view: [
                    { name: 'view1', html: '<h3>Home</h3>' }
                ]
            },
            {
                name: 'login',
                url: 'login',
                view: [
                    { name: 'view1', component: 'LoginForm' }
                ]
            },
            {
                name: 'private',
                url: 'private',
                before: function (data) {
                    return ho.flux.STORES.get(LoginStore).check(data);
                },
                view: [
                    { name: 'view1', html: '<p>PRIVATE! Go away!</p>' }
                ]
            },
            {
                name: 'catchall',
                url: '.*',
                redirect: 'home'
            }
        ];
        this.on('STATE', this.onStateChangeRequested.bind(this));
    }
    MyRouter.prototype.onLogin_OK = function () {
        ho.flux.DISPATCHER.waitFor(ho.flux.STORES.get(LoginStore).id);
        var data = { state: 'private', args: null, extern: false };
        this.onStateChangeRequested(data);
    };
    Object.defineProperty(MyRouter.prototype, "onLogin_OK",
        __decorate([
            ho.flux.Store.on(CONST.LOGIN_OK), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], MyRouter.prototype, "onLogin_OK", Object.getOwnPropertyDescriptor(MyRouter.prototype, "onLogin_OK")));
    return MyRouter;
})(Router);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeVJvdXRlci50cyJdLCJuYW1lcyI6WyJNeVJvdXRlciIsIk15Um91dGVyLmNvbnN0cnVjdG9yIiwiTXlSb3V0ZXIub25Mb2dpbl9PSyJdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QztJQUF1QkEsNEJBQU1BO0lBRTVCQTtRQUNDQyxpQkFBT0EsQ0FBQ0E7UUFXVEEsWUFBT0EsR0FBSUE7WUFDVkE7Z0JBQ0NBLElBQUlBLEVBQUVBLE1BQU1BO2dCQUNaQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUNBO2lCQUN0Q0E7YUFDREE7WUFDREE7Z0JBQ0NBLElBQUlBLEVBQUVBLE9BQU9BO2dCQUNiQSxHQUFHQSxFQUFFQSxPQUFPQTtnQkFDWkEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFdBQVdBLEVBQUNBO2lCQUN2Q0E7YUFDREE7WUFDREE7Z0JBQ0NBLElBQUlBLEVBQUVBLFNBQVNBO2dCQUNmQSxHQUFHQSxFQUFFQSxTQUFTQTtnQkFDZEEsTUFBTUEsRUFBRUEsVUFBQUEsSUFBSUE7b0JBQ1hBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNuREEsQ0FBQ0E7Z0JBQ0RBLElBQUlBLEVBQUVBO29CQUNMQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxJQUFJQSxFQUFFQSwwQkFBMEJBLEVBQUVBO2lCQUNuREE7YUFDREE7WUFDREE7Z0JBQ0NBLElBQUlBLEVBQUVBLFVBQVVBO2dCQUNoQkEsR0FBR0EsRUFBRUEsSUFBSUE7Z0JBQ1RBLFFBQVFBLEVBQUVBLE1BQU1BO2FBQ2hCQTtTQUNEQSxDQUFDQTtRQXhDREEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMxREEsQ0FBQ0E7SUFHREQsNkJBQVVBLEdBRFZBO1FBRUNFLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQzlEQSxJQUFJQSxJQUFJQSxHQUFHQSxFQUFDQSxLQUFLQSxFQUFFQSxTQUFTQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFFQSxLQUFLQSxFQUFDQSxDQUFDQTtRQUN6REEsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNuQ0EsQ0FBQ0E7SUFMREYsc0JBQ0FBLGdDQUFVQTs7WUFEVEEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7Ozs7V0FDakNBLGdDQUFVQSxrQ0FBVkEsZ0NBQVVBLElBSVRBO0lBaUNGQSxlQUFDQTtBQUFEQSxDQUFDQSxBQTdDRCxFQUF1QixNQUFNLEVBNkM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmcuZC50c1wiLz5cblxuY2xhc3MgTXlSb3V0ZXIgZXh0ZW5kcyBSb3V0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5vbignU1RBVEUnLCB0aGlzLm9uU3RhdGVDaGFuZ2VSZXF1ZXN0ZWQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRAaG8uZmx1eC5TdG9yZS5vbihDT05TVC5MT0dJTl9PSylcblx0b25Mb2dpbl9PSygpIHtcblx0XHRoby5mbHV4LkRJU1BBVENIRVIud2FpdEZvcihoby5mbHV4LlNUT1JFUy5nZXQoTG9naW5TdG9yZSkuaWQpO1xuXHRcdGxldCBkYXRhID0ge3N0YXRlOiAncHJpdmF0ZScsIGFyZ3M6IG51bGwsIGV4dGVybjogZmFsc2V9O1xuXHRcdHRoaXMub25TdGF0ZUNoYW5nZVJlcXVlc3RlZChkYXRhKTtcblx0fVxuXG5cdG1hcHBpbmcgPSAgW1xuXHRcdHtcblx0XHRcdG5hbWU6ICdob21lJyxcblx0XHRcdHVybDogJ2hvbWUnLFxuXHRcdFx0dmlldzogW1xuXHRcdFx0XHR7bmFtZTogJ3ZpZXcxJywgaHRtbDogJzxoMz5Ib21lPC9oMz4nfVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2xvZ2luJyxcblx0XHRcdHVybDogJ2xvZ2luJyxcblx0XHRcdHZpZXc6IFtcblx0XHRcdFx0e25hbWU6ICd2aWV3MScsIGNvbXBvbmVudDogJ0xvZ2luRm9ybSd9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAncHJpdmF0ZScsXG5cdFx0XHR1cmw6ICdwcml2YXRlJyxcblx0XHRcdGJlZm9yZTogZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBoby5mbHV4LlNUT1JFUy5nZXQoTG9naW5TdG9yZSkuY2hlY2soZGF0YSk7XG5cdFx0XHR9LFxuXHRcdFx0dmlldzogW1xuXHRcdFx0XHR7IG5hbWU6ICd2aWV3MScsIGh0bWw6ICc8cD5QUklWQVRFISBHbyBhd2F5ITwvcD4nIH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjYXRjaGFsbCcsXG5cdFx0XHR1cmw6ICcuKicsXG5cdFx0XHRyZWRpcmVjdDogJ2hvbWUnXG5cdFx0fVxuXHRdO1xufVxuIl19