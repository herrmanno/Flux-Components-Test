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
                name: 'catchall',
                url: '.*',
                redirect: 'home'
            }
        ];
    }
    return States;
})();
