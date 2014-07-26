/**
 * Created by beforeadream on 26.07.2014.
 */

define(['js/app', 'uikit!notify', 'NProgress'], function (app, notify, NProgress) {
    'use strict';

    app.register.service('tweeManager', ['$http', function($http) {
        var tweeManager = {
            on: function (url, limit, interval, $scope) {
                var responsePromise = $http.get(url + '?limit=' + limit);

                responsePromise.success(function(data) {
                    tweeManager.message('Success');

                    $scope.messages = data;

                    tweeManager.reload(url, limit, interval, $scope);
                });

                responsePromise.error(function(data, status, headers, config) {
                    tweeManager.message('Something went wrong', status);
                });
            },
            reload: function (url, limit, interval, $scope) {
                NProgress.start();

                setTimeout(function () {
                    NProgress.done();

                    tweeManager.on(url, limit, interval, $scope);
                }, interval);
            },
            message: function (text) {
                notify.notify(text, {
                    pos: 'top-right'
                });
            }
        };

        return  {
            on: function (url, limit, interval, $scope) {
                NProgress.configure({
                    trickleRate: 0.02,
                    trickleSpeed: interval / 100
                });

               return tweeManager.on(url, limit, interval, $scope);
            }
        };
    }]);
});
