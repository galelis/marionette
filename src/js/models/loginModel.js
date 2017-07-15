define(['backbone'
  
], function(Backbone) {

  return Backbone.Model.extend({
    
    urlRoot: 'http://127.0.0.1:3000/login',

    defaults: {
      sessionId: '',
      username: '',
      password: ''
    },

    login: function(){
      this.save(this.attributes, {
        success: function(model, response){
          model.trigger('login:success', model, response);
        },
        error: function(model, response){
          model.trigger('login:failure', model, response);
        }
      });
    }
  });

});
