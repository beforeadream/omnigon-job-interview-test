/**
 * Created by beforeadream on 26.07.2014.
 */

define(['js/app'], function (app) {
    'use strict';

    app.register.service('tweetManager', ['$http', function($http) {
        var tweetManager = {
            on: function (url, limit, interval) {
                var responsePromise = $http.get(url);

                responsePromise.success(function(data) {
                    console.log(data)
                });

                responsePromise.error(function(data, status, headers, config) {
                    console.log('fail');
                });
            }
        };

        return  {
            on: function (url, limit, interval) {
                tweetManager.on(url, limit, interval)
            }
        };
    }]);
});
