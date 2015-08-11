var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        _super.apply(this, arguments);
        this.html = "navigation.html";
        this.stores = ["LoginStore"];
        this.loggedIn = false;
    }
    Navigation.prototype.init = function () {
        var _this = this;
        return _super.prototype.init.call(this)
            .then(function () {
            ho.flux.STORES.get(LoginStore).register(_this.loginStoreChanged, _this);
        });
    };
    Navigation.prototype.loginStoreChanged = function (data) {
        this.loggedIn = !!data.name;
    };
    return Navigation;
})(Stored);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdmlnYXRpb24udHMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIk5hdmlnYXRpb24uY29uc3RydWN0b3IiLCJOYXZpZ2F0aW9uLmluaXQiLCJOYXZpZ2F0aW9uLmxvZ2luU3RvcmVDaGFuZ2VkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQXlCQSw4QkFBTUE7SUFBL0JBO1FBQXlCQyw4QkFBTUE7UUFFOUJBLFNBQUlBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7UUFFekJBLFdBQU1BLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1FBRWhCQSxhQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtJQVkxQkEsQ0FBQ0E7SUFWQUQseUJBQUlBLEdBQUpBO1FBQUFFLGlCQUtDQTtRQUpBQSxNQUFNQSxDQUFDQSxnQkFBS0EsQ0FBQ0EsSUFBSUEsV0FBRUE7YUFDbEJBLElBQUlBLENBQUNBO1lBQ0xBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLEtBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsS0FBSUEsQ0FBQ0EsQ0FBQ0E7UUFDdkVBLENBQUNBLENBQUNBLENBQUFBO0lBQ0hBLENBQUNBO0lBRVNGLHNDQUFpQkEsR0FBM0JBLFVBQTRCQSxJQUFxQkE7UUFDaERHLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUNGSCxpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFsQkQsRUFBeUIsTUFBTSxFQWtCOUIifQ==