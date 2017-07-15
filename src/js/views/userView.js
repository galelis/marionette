define(['backbone', 
        'marionette',

        // Templates
        'hbs!templates/userTemplate'

], function(Backbone, Marionette, UserTemplate){

  return Marionette.ItemView.extend({

    template: UserTemplate,
    
  });
});
