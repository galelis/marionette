define(['marionette', 
        'backbone',

        // Layouts
        'layouts/myAppMainLayout',
        'layouts/loginLayout',
        'layouts/homeLayout',
        'layouts/friendsLayout'

], function(Marionette, Backbone, MyAppMainLayout, LoginLayout, HomeLayout, FriendsLayout) {
    var SocialController = Marionette.Object.extend({
      initialize: function(){
        this.options.regionManager = new Marionette.RegionManager({
            regions: {
                main: 'body',
                footer: 'footer'
            }
        });
      },
      doLogin: function(){
        this.getOption('regionManager').get('main').show(new LoginLayout());
      },
      doHello: function(){
        this.getOption('regionManager').get('main').show(new MyAppMainLayout());
      },
      doHome: function(){
        this.getOption('regionManager').get('main').show(new HomeLayout());
      },
      doRequests: function(){
        this.getOption('regionManager').get('main').show(new FriendsLayout());
      },
      handleLoginSuccess: function(model, response){
        this.sessionId = response;
        sessionStorage.sessionId = response;
        Backbone.history.navigate('home', {trigger: true});
      },
    });

    return Marionette.AppRouter.extend({

      appRoutes: {
        'login' : 'doLogin',
        'home' : 'doHome',
        'requests' : 'doRequests',
        '*path' : 'doHello'
      },

      controller: new SocialController(),

      execute: function(callback, args, path) {
        if( path !== 'doLogin' && !sessionStorage.sessionId ){
          Backbone.history.navigate('login', {trigger: true});
          return false;
        }else if(path==='doLogin' && sessionStorage.sessionId){
          Backbone.history.navigate('home', {trigger: true});
          return false;
        }else {
          if(callback){
            callback.apply(this, args);
          }
        }
      }
    });
});
