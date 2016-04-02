var main = function () {
    "use strict";

    var username = getCookie("username");
    console.log(username);
    console.log(document.cookie.split(';'));
    
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
        $.get("/users", function (users) {
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
                    $facebookURL.append($facebookIcon);

                    $(".user-social-media").append($twitterURL, $facebookURL);

                    // Set user's title
                    $(".user-title").append(user.jobTitle);

                    // Set user's tags
                    user.tags.split(",").forEach(function (tag) {

                        // Remove white space from tag
                        if (tag.indexOf(" ") === 0) {
                            tag = tag.substring(1);
                        }

                        var $tagSpan = $("<span>").append( " #" + tag);

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

$(document).ready(main);
