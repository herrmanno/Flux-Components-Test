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
