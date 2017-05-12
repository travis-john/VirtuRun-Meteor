Template.signup.events({
    'click #submit': function(e, t) {
        e.preventDefault();
        // Retrieve the input field values
        var email = $('#emailAddress').val(),
            firstName = $('#firstName').val(),
            lastName = $('#lastName').val(),
            location = $('#location').val(),
            password = $('#password').val(),
            passwordAgain = $('#password2').val();

//         weight = $('#weight').val(),
//
//         height = $('#height').val(),
//                   age = $('#age').val(),
//               sex = $('#sex').val();

        // Trim Helper
        var trimInput = function(val) {
            return val.replace(/^\s*|\s*$/g, "");
        }
        var email = trimInput(email);

        // Check password is at least 6 chars long
        var isValidPassword = function(pwd, pwd2) {
            if (pwd === pwd2) {
                return pwd.length >= 6 ? true : false;
            } else {
                return swal({
                    title: "Passwords don't match",
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
            }
        }

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        if (isValidPassword(password, passwordAgain)) { 
            Accounts.createUser({
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                location: location
//                height: height,
//                age: age,
//                weight: weight,
//                sex: sex
            }, function(error) {
                if (error) {
                    return swal({
                    title: error.reason,
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
                } else {
                    FlowRouter.go('/homesignout');
                }
            });
        }

        return false;
    }
});
