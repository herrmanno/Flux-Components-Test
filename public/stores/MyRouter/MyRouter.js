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
        _super.apply(this, arguments);
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
})(ho.flux.Router);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlSb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeVJvdXRlci50cyJdLCJuYW1lcyI6WyJNeVJvdXRlciIsIk15Um91dGVyLmNvbnN0cnVjdG9yIiwiTXlSb3V0ZXIub25Mb2dpbl9PSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQXVCQSw0QkFBY0E7SUFBckNBO1FBQXVCQyw4QkFBY0E7SUFRckNBLENBQUNBO0lBTEFELDZCQUFVQSxHQURWQTtRQUVDRSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUM5REEsSUFBSUEsSUFBSUEsR0FBR0EsRUFBQ0EsS0FBS0EsRUFBRUEsU0FBU0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsS0FBS0EsRUFBQ0EsQ0FBQ0E7UUFDekRBLElBQUlBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDbkNBLENBQUNBO0lBTERGLHNCQUNBQSxnQ0FBVUE7O1lBRFRBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBOzs7O1dBQ2pDQSxnQ0FBVUEsa0NBQVZBLGdDQUFVQSxJQUlUQTtJQUNGQSxlQUFDQTtBQUFEQSxDQUFDQSxBQVJELEVBQXVCLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQVFwQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE15Um91dGVyIGV4dGVuZHMgaG8uZmx1eC5Sb3V0ZXIge1xuXG5cdEBoby5mbHV4LlN0b3JlLm9uKENPTlNULkxPR0lOX09LKVxuXHRvbkxvZ2luX09LKCkge1xuXHRcdGhvLmZsdXguRElTUEFUQ0hFUi53YWl0Rm9yKGhvLmZsdXguU1RPUkVTLmdldChMb2dpblN0b3JlKS5pZCk7XG5cdFx0bGV0IGRhdGEgPSB7c3RhdGU6ICdwcml2YXRlJywgYXJnczogbnVsbCwgZXh0ZXJuOiBmYWxzZX07XG5cdFx0dGhpcy5vblN0YXRlQ2hhbmdlUmVxdWVzdGVkKGRhdGEpO1xuXHR9XG59XG4iXX0=