Template.homesignout.events({
    'click #signout': function(e, t) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
//        var email = $('#login-email').val(),
//            password = $('#login-password').val();
//
//        Meteor.loginWithPassword(email, password, function(error) {
//            if (error) {
//                return swal({
//                    title: "Email or password Incorect",
//                    text: "Please try again or create an account",
//                    timer: 1700,
//                    showConfirmButton: false,
//                    type: "error"
//                });
//            } else {
//                FlowRouter.go('/homesignout');
//            }
//        });
//        return false;
    }
});
