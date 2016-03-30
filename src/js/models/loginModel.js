define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    //USE TIAGO'S IP, OR RODOLFO WILL GET MAD
    urlRoot: 'http://192.168.0.75:3000/login',
    defaults: {
      sessionId: '',
      username: '',
      password: ''
    },
    login: function(){
      
    }
  });

});
