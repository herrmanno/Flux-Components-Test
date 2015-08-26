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
        var self = this;
        return _super.prototype.init.call(this)
            .then(function () {
            self.stores['LoginStore'].register(self.loginStoreChanged, self);
        });
    };
    Navigation.prototype.loginStoreChanged = function (data) {
        this.loggedIn = !!data.name;
        this.render();
    };
    return Navigation;
})(FluxComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdmlnYXRpb24udHMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIk5hdmlnYXRpb24uY29uc3RydWN0b3IiLCJOYXZpZ2F0aW9uLmluaXQiLCJOYXZpZ2F0aW9uLmxvZ2luU3RvcmVDaGFuZ2VkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQXlCQSw4QkFBYUE7SUFBdENBO1FBQXlCQyw4QkFBYUE7UUFFckNBLFNBQUlBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7UUFFekJBLFdBQU1BLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO1FBRWhCQSxhQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTtJQWMxQkEsQ0FBQ0E7SUFaQUQseUJBQUlBLEdBQUpBO1FBQ0NFLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2hCQSxNQUFNQSxDQUFDQSxnQkFBS0EsQ0FBQ0EsSUFBSUEsV0FBRUE7YUFDbEJBLElBQUlBLENBQUNBO1lBQ0xBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLGlCQUFpQkEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLENBQUNBLENBQUNBLENBQUFBO0lBQ0hBLENBQUNBO0lBRVNGLHNDQUFpQkEsR0FBM0JBLFVBQTRCQSxJQUFxQkE7UUFDaERHLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1FBQzVCQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtJQUNmQSxDQUFDQTtJQUNGSCxpQkFBQ0E7QUFBREEsQ0FBQ0EsQUFwQkQsRUFBeUIsYUFBYSxFQW9CckMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgRmx1eENvbXBvbmVudCB7XG5cblx0aHRtbCA9IFwibmF2aWdhdGlvbi5odG1sXCI7XG5cblx0c3RvcmVzID0gW1wiTG9naW5TdG9yZVwiXTtcblxuXHRwcml2YXRlIGxvZ2dlZEluID0gZmFsc2U7XG5cblx0aW5pdCgpIHtcblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIHN1cGVyLmluaXQoKVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdHNlbGYuc3RvcmVzWydMb2dpblN0b3JlJ10ucmVnaXN0ZXIoc2VsZi5sb2dpblN0b3JlQ2hhbmdlZCwgc2VsZik7XG5cdFx0fSlcblx0fVxuXG5cdHByb3RlY3RlZCBsb2dpblN0b3JlQ2hhbmdlZChkYXRhOiBJTG9naW5TdG9yZURhdGEpOiB2b2lkIHtcblx0XHR0aGlzLmxvZ2dlZEluID0gISFkYXRhLm5hbWU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxufVxuIl19