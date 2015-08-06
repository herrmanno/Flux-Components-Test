/// <reference path="../../typing.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
        this.html = "app.html";
        this.requires = ["Navigation", "View"];
    }
    App.prototype.init = function () {
        return ho.flux.STORES.loadStore('LoginStore');
    };
    return App;
})(ho.components.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5pbml0Il0sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7Ozs7OztBQUV6QztJQUFrQkEsdUJBQXVCQTtJQUF6Q0E7UUFBa0JDLDhCQUF1QkE7UUFFeENBLFNBQUlBLEdBQUdBLFVBQVVBLENBQUNBO1FBRWxCQSxhQUFRQSxHQUFHQSxDQUFDQSxZQUFZQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUtuQ0EsQ0FBQ0E7SUFIQUQsa0JBQUlBLEdBQUpBO1FBQ0NFLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0lBQy9DQSxDQUFDQTtJQUNGRixVQUFDQTtBQUFEQSxDQUFDQSxBQVRELEVBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQVN4QyJ9