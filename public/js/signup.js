import signup from '../modules/signup';
//import sanitizeUsername from '../../modules/sanitize-username';

Template.signup.onRendered( () => {
  signup({ form: '#signup', template: Template.instance() });
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault(),
  'keyup [name="username"]' ( event ) {
    let value     = event.target.value,
        formatted = sanitizeUsername( value );
    event.target.value = formatted;
  }
});

//Accounts.onCreateUser(function (options, user) {
//
//    if (twitterProfile) {
//      // Add Google login credentials to the user document in Mongo
//Meteor.users.update({...}, {$set: {"services.twitter": twitterProfile}});
//
//  }
//
//  // Returning a user object will create a new one in Mongo.
//
//  return user;
//});
