define(['marionette', 'backbone', 'config/socialRouter'], function(Marionette, Backbone, SocialRouter){
  return Marionette.Application.extend({    
    initialize: function(){
      this.router = new SocialRouter();
      //console.log('app created!' + options.optionA + options.optionB );
      Backbone.history.start();
    },
    onStart: function(options){
      console.log('app created!' + options.optionA + options.optionB );
    }
  });
});
