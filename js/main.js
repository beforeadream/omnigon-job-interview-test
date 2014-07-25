/*global require*/
require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'bower_components/jquery/jquery.min',
        'uikit': 'bower_components/uikit/dist/js/uikit.min'
    },
    shim: {
        'uikit': {
            deps: ['jquery']
        }
    }
});