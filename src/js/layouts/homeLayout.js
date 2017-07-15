define(['marionette', 
				'backbone',

        //Views
        'views/userView',
        'views/userOptionsView',

        //Models
        'models/userModel',

        //Tempaltes
				'hbs!templates/homeLayoutTemplate'
        
], function(Marionette, Backbone, UserView, UserOptionsView, UserModel, HomeLayoutTemplate){

  var HomeController = Marionette.Object.extend({
    initialize: function(){
      this.options.regionManager = new Marionette.RegionManager({
        regions: {
          profile: '#profile',
          userOptions: '#userOptions'
        }
      });
    },

    renderProfile: function(model) {
      this.getOption('regionManager').get('profile').show(new UserView({ model: model }));  
    },

    renderUserOptions: function() {
      this.getOption('regionManager').get('userOptions').show(new UserOptionsView());  
    }

  });

  return Marionette.LayoutView.extend({    
    
    template: HomeLayoutTemplate,

    onShow: function(){
      this.initProfile();
      this.showUserOptions();
    },

    initProfile: function() {
      this.userModel = new UserModel({
        id: 'me'
      });
      this.listenTo(this.userModel, 'sync', this.showProfileView);
      this.userModel.fetch({
        headers: {
          'Authorization': 'bearer ' + sessionStorage.sessionId
        }
      });
    },

    showUserOptions: function() {
      this.controller.renderUserOptions();
    },

    showProfileView: function(){
      this.controller.renderProfile(this.userModel);
    },

    controller: new HomeController()

  });
});
