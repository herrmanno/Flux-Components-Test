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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGVzLnRzIl0sIm5hbWVzIjpbIlN0YXRlcyIsIlN0YXRlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7UUFFQ0MsV0FBTUEsR0FBR0E7WUFDUkE7Z0JBQ0NBLElBQUlBLEVBQUVBLE1BQU1BO2dCQUNaQSxHQUFHQSxFQUFFQSxNQUFNQTtnQkFDWEEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGVBQWVBLEVBQUNBO2lCQUN0Q0E7YUFDREE7WUFDREE7Z0JBQ0NBLElBQUlBLEVBQUVBLE9BQU9BO2dCQUNiQSxHQUFHQSxFQUFFQSxPQUFPQTtnQkFDWkEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUNBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLGlCQUFpQkEsRUFBQ0E7aUJBQ3hDQTthQUNEQTtZQUNEQTtnQkFDQ0EsSUFBSUEsRUFBRUEsU0FBU0E7Z0JBQ2ZBLEdBQUdBLEVBQUVBLFNBQVNBO2dCQUNkQSxNQUFNQSxFQUFFQSxVQUFBQSxJQUFJQTtvQkFDWEEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25EQSxDQUFDQTtnQkFDREEsSUFBSUEsRUFBRUE7b0JBQ0xBLEVBQUVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQUVBLElBQUlBLEVBQUVBLDBCQUEwQkEsRUFBRUE7aUJBQ25EQTthQUNEQTtZQUNEQTtnQkFDQ0EsSUFBSUEsRUFBRUEsVUFBVUE7Z0JBQ2hCQSxHQUFHQSxFQUFFQSxJQUFJQTtnQkFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7YUFDaEJBO1NBQ0RBLENBQUNBO0lBQ0hBLENBQUNBO0lBQURELGFBQUNBO0FBQURBLENBQUNBLEFBakNELElBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RhdGVzIGltcGxlbWVudHMgaG8uZmx1eC5JU3RhdGVzIHtcblxuXHRzdGF0ZXMgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ2hvbWUnLFxuXHRcdFx0dXJsOiAnaG9tZScsXG5cdFx0XHR2aWV3OiBbXG5cdFx0XHRcdHtuYW1lOiAndmlldzEnLCBodG1sOiAnPGgzPkhvbWU8L2gzPid9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnbG9naW4nLFxuXHRcdFx0dXJsOiAnbG9naW4nLFxuXHRcdFx0dmlldzogW1xuXHRcdFx0XHR7bmFtZTogJ3ZpZXcxJywgaHRtbDogJ2h0bWwvbG9naW4uaHRtbCd9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAncHJpdmF0ZScsXG5cdFx0XHR1cmw6ICdwcml2YXRlJyxcblx0XHRcdGJlZm9yZTogZGF0YSA9PiB7XG5cdFx0XHRcdHJldHVybiBoby5mbHV4LlNUT1JFUy5nZXQoTG9naW5TdG9yZSkuY2hlY2soZGF0YSk7XG5cdFx0XHR9LFxuXHRcdFx0dmlldzogW1xuXHRcdFx0XHR7IG5hbWU6ICd2aWV3MScsIGh0bWw6ICc8cD5QUklWQVRFISBHbyBhd2F5ITwvcD4nIH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdjYXRjaGFsbCcsXG5cdFx0XHR1cmw6ICcuKicsXG5cdFx0XHRyZWRpcmVjdDogJ2hvbWUnXG5cdFx0fVxuXHRdO1xufVxuIl19