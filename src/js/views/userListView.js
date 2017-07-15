define(['backbone', 
		'marionette', 

		// Views
		'views/userInteractiveView'

], function(Backbone, Marionette, UserInteractiveView){

  return Marionette.CollectionView.extend({

    childView: UserInteractiveView
    
  });
});