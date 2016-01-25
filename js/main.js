/*global require*/
require.config({
    baseUrl: '',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'uikit': 'bower_components/uikit/js/uikit.min',
        'angular': 'bower_components/angular/angular.min',
        'angular-route': 'bower_components/angular-route/angular-route.min',
        'angularAMD': 'bower_components/angularAMD/angularAMD.min',
        'NProgress': 'bower_components/nprogress/nprogress'
    },
    shim: {
        'uikit': {
            deps: ['jquery']
        },
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'NProgress': {
            deps: ['jquery'],
            exports: 'NProgress'
        }
    },
    config: {
        "uikit": {
            "base": "bower_components/uikit/js/"
        }
    },
    deps: ['js/app']
});
