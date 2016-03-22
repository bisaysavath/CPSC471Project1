var main = function () {
    "use strict";

    var cookie = window.cookie;

    // If user hasn't signed in yet, create a main body prompting user to go to signup.html
    if (!cookie) {
        // console.log("no");
        var $header = $("<h2>").text = "Please login first";
        var $button = $("<button>");
        $button.append("Log in");

        $("main .container .user-name").append($header);
        $("main .container .user-para").append($button);
    }

    $("main .container .user-para button").on("click", function () {
        window.location.href = "login.html";
    });
};

$(document).ready(main);
