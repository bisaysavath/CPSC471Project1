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
            
            $.getJSON("javascripts/db.json", function(users) {
                console.log(users);
                var isUserFound = false;
                users.forEach(function(user) {
                    
                    if (user.email === loginEmail) {

                        isUserFound = true;
                        console.log("user email found!");

                        if (user.password === loginPassword) {
                            console.log("login succesful!!");
                            //code to display profile of user
         
                            //removing the login form for now
                            $(".form").remove();
                            
                            //changing info
                            $(".profile-picture").attr("src", user.profilePicURL);
                            $(".user-name").text(user.fname + " " + user.lname);
                            $(".user-info p").text(user.jobTitle)
                            $("#twitterURL").attr("href",user.twitterURL);
                            $("#facebookURL").attr("href",user.facebookURL);
                            
                            $(".profile-page").fadeIn(600);
                            
                        }
                        else {
                            console.log("user entered incorrect password");
                        }
                    }
                })
       
            });
            
            //  var url = "http://localhost:3000/users";
            // $.get(url, function (users){
                
            //     var isUserFound = false;
            //     users.forEach(function(user){
                    
            //         if (user.email === loginEmail){
                        
            //             isUserFound = true;
            //             console.log("user email found!");
                        
            //             if (user.password === loginPassword)
            //             {
            //                 console.log("login succesful!!");
            //             }
            //             else{
            //                 console.log("user entered incorrect password");
            //             }
            //         }
            //     })
            // });
            
        } 
        else {
            console.log("I am processing a new user");

            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var email = $("#email").val();
            var password = $("#password").val();
            var username = $("#username").val();
            var jobTitle = $("#jobTitle").val();
            var jobTags = $("#tags").val();
            var profilePic = $("#profilePic").val();
            
            var newUser = {
                fname: fname,
                lname: lname,
                email: email,
                password: password,
                username: username,
                jobTitle: jobTitle,
                tags: jobTags,
                profilePic: profilePic
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
            $.post("http://localhost:3000", newUser);
            // if (fname != "" && lname != "" && email != "" && password != "" && username != "" && jobTitle != ""
            // && tags != "" && profilePic != "")
            // {
            //     $.("http://localhost:3000/users", newUser);
            // }
            // else{
            //     console.log("didn't ");
            // }
        }
    });
    
}
$(document).ready(function(){
    "use strict";
    
   $("#signup").hide(); 
   $(".profile-page").hide();
   main();
    
});