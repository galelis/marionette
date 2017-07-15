define(['backbone', 
        'marionette',

        // Templates
        'hbs!templates/userOptionsTemplate'

], function(Backbone, Marionette, UserOptionsTemplate){

  return Marionette.ItemView.extend({

    template: UserOptionsTemplate,
    
  });
});
