Template.login.events({
    'click #login': function(e, t) {
        e.preventDefault();
        var email = $('#emailAddress').val(),
            password = $('#password').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                return swal({
                    title: "Email or password Incorect",
                    text: "Please try again or create an account",
                    timer: 1700,
                    showConfirmButton: false,
                    type: "error"
                });
            } else {
                FlowRouter.go('/homesignout');
            }
        });
        return false;
    }
});
