require.config({
    baseUrl: "js",
    paths: {
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'underscore': '../../bower_components/underscore/underscore-min',
        'backbone': '../../bower_components/backbone/backbone-min',
        'marionette': '../../bower_components/marionette/lib/backbone.marionette.min',
        'hbs': '../../bower_components/hbs/hbs'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        underscore: {
            'exports': '_'
        }
    }

});
