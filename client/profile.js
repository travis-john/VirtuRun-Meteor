Template.profile.events({
    'click #profilesignout': function(e, t) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
    }
    
});