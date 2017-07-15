define(['backbone', 
        'marionette', 

        // Models
        'models/friendshipModel', 

        // Templates
        'hbs!templates/userInteractiveTemplate'

], function(Backbone, Marionette, FriendshipModel, userInteractiveTemplate){

  return Marionette.ItemView.extend({

    template: userInteractiveTemplate,
    
    modelEvents: {
    },
    
    events: {
      'click @ui.addFriendButton' : 'addFriendHandler',
      'click @ui.acceptRequestButton' : 'acceptRequestHandler'
    },
    
    ui: {
      addFriendButton: '#addFriend',
      waittingApprovalButton: '#waitingApproval',
      acceptRequestButton: '#acceptRequest',
      friendDisclaimer: '#friendDisclaimer'
    },

    initialize: function() {
      this.friendship = new FriendshipModel({
        id: this.model.get('idAttribute')
      });
      this.listenTo(this.friendship, 'sync', this.adjustFriendshipStatus);
      this.friendship.getFriendship();
    },

    renderTemplate: function(){
      //Marionette.ItemView.prototype.render.apply(this, arguments);
      console.log('test');
    },

    adjustFriendshipStatus: function(){
      var friendshipStatusCode = this.friendship.get('status');
      _.each(this.ui, function(value, key, object){
        object[key].addClass('hide');
      });
      if( friendshipStatusCode === 0 && this.friendship.get('userRequested') !== this.model.get('idAttribute')) {
        this.ui.acceptReqeustButton.removeClass('hide');
      } else if (friendshipStatusCode === 0){
        this.ui.waittingApprovalButton.removeClass('hide');
      } else if (friendshipStatusCode === 1){
        this.ui.friendDisclaimer.removeClass('hide');
      } else {
        this.ui.addFriendButton.removeClass('hide');
      }
    },

    addFriendHandler: function() {
      this.friendship.addFriend();
    },

    acceptRequestHandler: function() {
      this.friendship.acceptRequest();
    },
  });
});
