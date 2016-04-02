var main = function (){

    /*toogling between "login" and "signup" */
    $('.tab a').on('click', function(e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');
        console.log(target);

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });

    $("button").on("click", function(){

        //Create variable to see if user is "logging in" of "signing up"
        var $loginOrSignUp = $('.tab-group .active').text();

        if ($loginOrSignUp === "Log In") {
            console.log("I am processing password and username");
            var loginEmail = $("#loginEmail").val();
            var loginPassword = $("#loginPassword").val();

            $("#loginEmail").val("");
            $("#loginPassword").val("");

            $.getJSON("http://localhost:3000/users", function(users) {
                console.log(users);
                var isUserFound = false;
                users.forEach(function(user) {

                    if (user.email === loginEmail) {

                        isUserFound = true;
                        console.log("user email found!");

                        if (user.password === loginPassword) {
                            console.log("login succesful!!");

                            // Set cookie to current user
                            setCookie("username", user.username, true);
                            
                            // Go to profile profile-page
                            window.location.href = "profile.html";
                        }
                        else {
                            alert("User entered incorrect password.");
                            console.log("User entered incorrect password.");
                        }
                    }
                });

                if (!isUserFound) {
                    alert("Email has not been registered.");
                    console.log("Email has not been registered.");
                }

            });
        }
        else {
            console.log("I am processing a new user TEST TEST");

            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var email = $("#email").val();
            var password = $("#password").val();
            var username = $("#username").val();
            var jobTitle = $("#jobTitle").val();
            var jobTags = $("#tags").val();
            var profilePic = $("#profilePic").val();
            var twitterURL = "http://twitter.com/" + $("#twitter").val();
            var facebookURL = "http://facebook.com/" + $("#facebook").val();
            
            var newUser = {
                "fname": fname,
                "lname": lname,
                "email": email,
                "password": password,
                "username": username,
                "jobTitle": jobTitle,
                "tags": jobTags, // tags are stored as a string becase json-server post problems
                "profilePicURL": profilePic,
                "twitterURL": twitterURL,
                "facebookURL": facebookURL
            };

            // Clearing all the input values
            $("#fname").val("");
            $("#lname").val("");
            $("#email").val("");
            $("#password").val("");
            $("#username").val("");
            $("#jobTitle").val("");
            $("#tags").val("");
            $("#profilePic").val("");
            $("#twitter").val("");
            $("#facebook").val("");
            
            $.post("http://localhost:3000/users", newUser, function () {
                // Set cookie to current user
                setCookie("username", newUser.username, true);
                
                // Go to profile profile-page
                window.location.href = "profile.html";
            });
        }
    });
}

$(document).ready(function(){
    "use strict";

   $("#signup").hide();
   $(".profile-page").hide();
   main();

});
