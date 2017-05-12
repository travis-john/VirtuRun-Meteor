Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty profile object
    user.profile = options.profile || {};

    // Assigns the first and last names to the newly created user object
    user.profile.firstName = options.firstName;
    user.profile.lastName = options.lastName;
    user.profile.location = options.location;
    

//    user.profile.weight = options.weight;
//    user.profile.age = options.age;
//    user.profile.height = options.height;
//    user.profile.sex = options.sex;
    
    // Basic Prof Picture Setup
    //user.profile.profPicture = Meteor.absoluteUrl() + "img/default/user.jpg";
    // Organization
  //  user.profile.organization = ["Org"];
    //Basic Role Set Up
  //  user.roles = ["User"];

    // Returns the user object
    return user;
});
