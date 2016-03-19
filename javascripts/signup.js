var main = function (){
    
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
        console.log("Button clicked");
        //foreach field-wrap class
        //if all input.value is filled out
        //put into db.json
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var username = $("#username").val();
        var jobTitle = $("#jobTitle").val();
        var jobTags = $("#tags").val();
        var birthday = $("#birthday").val();
        var gender = $("#gender").val();
        var profilePic = $("#profilePic").val();
        
        var newUser = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            username: username,
            jobTitle: jobTitle,
            tags: jobTags,
            birthday: birthday,
            gender: gender,
            profilePic: profilePic
        };
        
        
        $("#fname").val("");
        $("#lname").val("");
        $("#email").val("");
        $("#password").val("");
        $("#username").val("");
        $("#jobTitle").val("");
        $("#tags").val("");
        $("#birthday").val("");
        $("#gender").val("");
        $("#profilePic").val("");
        $.post("http://localhost:3000/users", newUser);
        
 
    });
    
}
$(document).ready(function(){
    "use strict";
    
    // $.getJSON("javascripts/db.json", function(users){
    //     main(users);
        
    // });
   
   $("#signup").hide(); 
   main();
    
});