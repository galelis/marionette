define(['backbone', 
        'marionette', 

        // Models
        'models/loginModel', 

        // Templates
        'hbs!templates/loginFormTemplate'
        
], function(Backbone, Marionette, LoginModel, LoginFormTemplate){

  return Marionette.ItemView.extend({
  
    template: LoginFormTemplate,
  
    model: new LoginModel(),
    
    modelEvents: {
      'login:failure': 'handleLoginFailure',
      'login:success': 'handleLoginSuccess'
    },
    
    events: {
      'click @ui.submit': 'doLogin'
    },
    
    ui: {
      usernameField: 'input[name="username"]',
      passwordField: 'input[name="password"]',
      submit: 'button'
    },
    
    doLogin: function(){
      this.model.set('username', this.ui.usernameField.val());
      this.model.set('password', this.ui.passwordField.val());
      this.model.login();
    },

    handleLoginSuccess: function(model, response){
      this.sessionId = sessionStorage.sessionId = response;
      this.triggerMethod('childView:login:success', this.sessionId);
    },

    handleLoginFailure: function(){
      this.triggerMethod('childView:login:failure');
    }
  });
});
