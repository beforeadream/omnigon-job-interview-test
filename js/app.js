define(['angularAMD', 'angular-route'], function (angularAMD) {
    'use strict';

    var app = angular.module("omnigon", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when(
            '/main', angularAMD.route({
                templateUrl: 'views/main.html',
                controller: 'mainCtrl',
                controllerUrl: 'controllers/main'
            })
        ).otherwise({redirectTo: "/main"});
    });

    angularAMD.bootstrap(app);

    return app;
});