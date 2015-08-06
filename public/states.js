var States = (function () {
    function States() {
        this.states = [
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
    }
    return States;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGVzLnRzIl0sIm5hbWVzIjpbIlN0YXRlcyIsIlN0YXRlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7UUFFQ0MsV0FBTUEsR0FBR0E7WUFDUkE7Z0JBQ0NBLElBQUlBLEVBQUVBLE1BQU1BO2dCQUNaQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUNBO2lCQUN0Q0E7YUFDREE7WUFDREE7Z0JBQ0NBLElBQUlBLEVBQUVBLE9BQU9BO2dCQUNiQSxHQUFHQSxFQUFFQSxPQUFPQTtnQkFDWkEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBQ0E7aUJBQ3hDQTthQUNEQTtZQUNEQTtnQkFDQ0EsSUFBSUEsRUFBRUEsU0FBU0E7Z0JBQ2ZBLEdBQUdBLEVBQUVBLFNBQVNBO2dCQUNkQSxNQUFNQSxFQUFFQSxVQUFBQSxJQUFJQTtvQkFDWEEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25EQSxDQUFDQTtnQkFDREEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLDBCQUEwQkEsRUFBRUE7aUJBQ25EQTthQUNEQTtZQUNEQTtnQkFDQ0EsSUFBSUEsRUFBRUEsVUFBVUE7Z0JBQ2hCQSxHQUFHQSxFQUFFQSxJQUFJQTtnQkFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7YUFDaEJBO1NBQ0RBLENBQUNBO0lBQ0hBLENBQUNBO0lBQURELGFBQUNBO0FBQURBLENBQUNBLEFBakNELElBaUNDIn0=