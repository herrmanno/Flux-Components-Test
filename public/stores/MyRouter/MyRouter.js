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
                    { name: 'view1', html: 'html/login.html' }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeVJvdXRlci50cyJdLCJuYW1lcyI6WyJNeVJvdXRlciIsIk15Um91dGVyLmNvbnN0cnVjdG9yIiwiTXlSb3V0ZXIub25Mb2dpbl9PSyJdLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QztJQUF1QkEsNEJBQU1BO0lBRTVCQTtRQUNDQyxpQkFBT0EsQ0FBQ0E7UUFXVEEsWUFBT0EsR0FBSUE7WUFDVkE7Z0JBQ0NBLElBQUlBLEVBQUVBLE1BQU1BO2dCQUNaQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUNBO2lCQUN0Q0E7YUFDREE7WUFDREE7Z0JBQ0NBLElBQUlBLEVBQUVBLE9BQU9BO2dCQUNiQSxHQUFHQSxFQUFFQSxPQUFPQTtnQkFDWkEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBQ0E7aUJBQ3hDQTthQUNEQTtZQUNEQTtnQkFDQ0EsSUFBSUEsRUFBRUEsU0FBU0E7Z0JBQ2ZBLEdBQUdBLEVBQUVBLFNBQVNBO2dCQUNkQSxNQUFNQSxFQUFFQSxVQUFBQSxJQUFJQTtvQkFDWEEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25EQSxDQUFDQTtnQkFDREEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLDBCQUEwQkEsRUFBRUE7aUJBQ25EQTthQUNEQTtZQUNEQTtnQkFDQ0EsSUFBSUEsRUFBRUEsVUFBVUE7Z0JBQ2hCQSxHQUFHQSxFQUFFQSxJQUFJQTtnQkFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7YUFDaEJBO1NBQ0RBLENBQUNBO1FBeENEQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxzQkFBc0JBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQzFEQSxDQUFDQTtJQUdERCw2QkFBVUEsR0FEVkE7UUFFQ0UsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDOURBLElBQUlBLElBQUlBLEdBQUdBLEVBQUNBLEtBQUtBLEVBQUVBLFNBQVNBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUVBLEtBQUtBLEVBQUNBLENBQUNBO1FBQ3pEQSxJQUFJQSxDQUFDQSxzQkFBc0JBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUxERixzQkFDQUEsZ0NBQVVBOztZQURUQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQTs7OztXQUNqQ0EsZ0NBQVVBLGtDQUFWQSxnQ0FBVUEsSUFJVEE7SUFpQ0ZBLGVBQUNBO0FBQURBLENBQUNBLEFBN0NELEVBQXVCLE1BQU0sRUE2QzVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZy5kLnRzXCIvPlxuXG5jbGFzcyBNeVJvdXRlciBleHRlbmRzIFJvdXRlciB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm9uKCdTVEFURScsIHRoaXMub25TdGF0ZUNoYW5nZVJlcXVlc3RlZC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdEBoby5mbHV4LlN0b3JlLm9uKENPTlNULkxPR0lOX09LKVxuXHRvbkxvZ2luX09LKCkge1xuXHRcdGhvLmZsdXguRElTUEFUQ0hFUi53YWl0Rm9yKGhvLmZsdXguU1RPUkVTLmdldChMb2dpblN0b3JlKS5pZCk7XG5cdFx0bGV0IGRhdGEgPSB7c3RhdGU6ICdwcml2YXRlJywgYXJnczogbnVsbCwgZXh0ZXJuOiBmYWxzZX07XG5cdFx0dGhpcy5vblN0YXRlQ2hhbmdlUmVxdWVzdGVkKGRhdGEpO1xuXHR9XG5cblx0bWFwcGluZyA9ICBbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2hvbWUnLFxuXHRcdFx0dXJsOiAnaG9tZScsXG5cdFx0XHR2aWV3OiBbXG5cdFx0XHRcdHtuYW1lOiAndmlldzEnLCBodG1sOiAnPGgzPkhvbWU8L2gzPid9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnbG9naW4nLFxuXHRcdFx0dXJsOiAnbG9naW4nLFxuXHRcdFx0dmlldzogW1xuXHRcdFx0XHR7bmFtZTogJ3ZpZXcxJywgaHRtbDogJ2h0bWwvbG9naW4uaHRtbCd9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAncHJpdmF0ZScsXG5cdFx0XHR1cmw6ICdwcml2YXRlJyxcblx0XHRcdGJlZm9yZTogZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBoby5mbHV4LlNUT1JFUy5nZXQoTG9naW5TdG9yZSkuY2hlY2soZGF0YSk7XG5cdFx0XHR9LFxuXHRcdFx0dmlldzogW1xuXHRcdFx0XHR7IG5hbWU6ICd2aWV3MScsIGh0bWw6ICc8cD5QUklWQVRFISBHbyBhd2F5ITwvcD4nIH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjYXRjaGFsbCcsXG5cdFx0XHR1cmw6ICcuKicsXG5cdFx0XHRyZWRpcmVjdDogJ2hvbWUnXG5cdFx0fVxuXHRdO1xufVxuIl19