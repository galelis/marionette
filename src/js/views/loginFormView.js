define(['marionette',
		'backbone',
		'models/loginModel',
		'text!templates/loginFormTemplate'
], function(Marionette, Backbone, LoginModel, LoginFormTemplate){
	var LoginFormView = new Marionette.ItemView.extend({
		template: LoginFormTemplate,
		model: new LoginModel(),
		events: {
			'click @ui.submit':   'doLogin'
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
		}
	});

	return LoginFormView;

});