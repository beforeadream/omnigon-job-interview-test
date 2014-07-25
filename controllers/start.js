define(['js/app'], function (app) {
    'use strict';

    app.register.controller('startCtrl', ['$scope', '$http', function ($scope, $http) {
        var url = 'http://api.massrelevance.com/reccosxof/matchtrax_hashclash_featured_tweets.json';
        var responsePromise = $http.get(url);

        responsePromise.success(function(data) {
            console.log(data)
        });

        responsePromise.error(function(data, status, headers, config) {
            console.log('fail');
        });
    }]);
});