define(['marionette', 
				'backbone',

        //Views
        'views/userView',
        'views/userListView',
        'views/userOptionsView',

        //Models
        'models/userModel',

        //Collections
        'collections/userCollection',

        //Tempaltes
				'hbs!templates/friendsTemplate'
        
], function(Marionette, Backbone, UserView, UserListView, UserOptionsView, UserModel, UserCollection, FriendsTemplate){

  var FriendsController = Marionette.Object.extend({
    initialize: function(){
      this.options.regionManager = new Marionette.RegionManager({
        regions: {
          userList: '#userList'
        }
      });
    },

    renderUserList: function(collection) {
      this.getOption('regionManager').get('userList').show(new UserListView({ collection: collection }));  
    }

  });

  return Marionette.LayoutView.extend({    
    
    template: FriendsTemplate,

    onShow: function(){
      this.initUserList();
    },

    initUserList: function() {
      this.userList = new UserCollection({
        
      });
      this.listenTo(this.userList, 'sync', this.showUserListView);
      this.userList.getAllUsers();
    },

    showUserListView: function() {
      this.controller.renderUserList(this.userList);
    },

    controller: new FriendsController()

  });
});
