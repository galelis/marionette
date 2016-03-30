define(['marionette', 
		'backbone',
		'views/loginFormView',
		'text!templates/loginContainerTemplate'
], function(Marionette, Backbone, LoginFormView, LoginContainerTemplate){
	return Marionette.LayoutView.extend({
		template: LoginContainerTemplate,
		regions: {
			form: '#form',
			footer:  '#footer'
		},
		onBeforeShow: function(){
			this.showChildView('form', new LoginFormView());
		}
	});

});