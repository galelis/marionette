define(['marionette', 
		'backbone',

		// Views
		'views/loginFormView',

		// Templates
		'hbs!templates/loginContainerTemplate'
], function(Marionette, Backbone, LoginFormView, LoginContainerTemplate){

	return Marionette.LayoutView.extend({

		template: LoginContainerTemplate,

		regions: {
			form: '#form',
			footer:  '#footer'
		},

		childEvents: {
			'childView:login:failure': 'handleLoginFailure',
			'childView:login:success': 'handleLoginSuccess'
		},

		onBeforeShow: function(){
			this.showChildView('form', new LoginFormView());
		},

		handleLoginSuccess: function(itemView, sessionId){
      console.log(sessionId);
    },

    handleLoginFailure: function(){
      console.log('ferrou');
    }

	});

});