define(['js/app', 'services/tweeManager'], function (app) {
    'use strict';

    app.register.controller('mainCtrl', ['$scope', 'tweeManager', function ($scope, tweeManager) {
        var url = 'http://api.massrelevance.com/reccosxof/matchtrax_hashclash_featured_tweets.json';

        tweeManager.on(url, 3, 10000, $scope);
    }]);
});