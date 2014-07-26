define(['js/app', 'services/tweetManager'], function (app) {
    'use strict';

    app.register.controller('mainCtrl', ['$scope', 'tweetManager', function ($scope, tweetManager) {
        var url = 'http://api.massrelevance.com/reccosxof/matchtrax_hashclash_featured_tweets.json';

        tweetManager.on(url, 15, 15);
    }]);
});