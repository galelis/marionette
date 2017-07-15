define(['marionette', 
		'backbone',

		// Templates
		'hbs!templates/helloWorldTemplate'

], function(Marionette, Backbone, HelloWorldTemplate){

  return Marionette.LayoutView.extend({  

    template: HelloWorldTemplate,

    regions:{
      content: '#content'
    }
  });
});
