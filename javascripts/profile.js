var main = function () {
    "use strict";

    // var cookie = document.cookie;
    //
    // // Get a username in a cookie and grab only a username
    // var username = (cookie.substring("username=".length, cookie.length - 1));

    var username = getCookie("username");
    console.log(username);

    // If user hasn't signed in yet, create a main body prompting user to go to signup.html
    if (username == "") {
        // console.log("no");
        var $header = $("<h2>").text = "Please login first";
        var $button = $("<button>");
        $button.append("Log in");

        $("main .container .user-name").append($header);
        $("main .container .user-title").append($button);
    }
    else // Load that specific info about user from db.json
    {
        $.get("http://localhost:3000/users", function (users) {
            users.forEach(function (user) {
                if (user.username === username) {
                    // Load profile picture
                    var $profielPic = $("<img>").attr( {
                        "class" : "profile-picture",
                        "src" : user.profilePicURL,
                        "width" : "auto",
                        "height" : "auto",
                        "alt" : user.username
                    });

                    $(".user-pic").append($profielPic);

                    // Set user's name
                    $("h2.user-name").append(user.fname + " " + user.lname);

                    // Set user's social media
                    // Twitter
                    var $twitterURL = $("<a>").attr( {
                        "id" : "twitterURL",
                        "href" : user.twitterURL
                    });
                    var $twitterIcon = $("<i>").attr("class", "fa fa-twitter");
                    $twitterURL.append($twitterIcon);

                    // Facebook
                    var $facebookURL = $("<a>").attr( {
                        "id" : "facebookURL",
                        "href" : user.facebookURL
                    });
                    var $facebookIcon = $("<i>").attr("class", "fa fa-facebook");
                    $twitterURL.append($facebookIcon);

                    $(".user-social-media").append($twitterURL, $facebookURL);

                    // Set user's title
                    $(".user-title").append(user.jobTitle);

                    // Set user's tags
                    user.tags.forEach(function (tag) {
                        var $tagSpan = $("<span>").append( "#" + tag);

                        $(".user-tags").append($tagSpan);
                    });
                }
            });
        });
    }

    $("main .container .user-title button").on("click", function () {
        window.location.href = "login.html";
    });
};

var getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

$(document).ready(main);
