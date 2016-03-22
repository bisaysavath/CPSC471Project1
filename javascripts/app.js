var main = function () {
    "use strict";

    $("h2").hide();

    $("h2").fadeIn();

    // Check cookie if the user is signed in
    var cookie = document.cookie;
    var username = cookie.substring("username=".length, cookie.length);

    // If user is logged in, show Log out
    if (username !== "") {
        // select the "login" a tag
        $("body header nav a:nth-child(3)").empty()
        $("body header nav a:nth-child(3)").append("Log out");
    }

    // When the user clicks the log out button
    $("body header nav a:nth-child(3)").on("click", function () {
        if (username !== "") {
            // Set username in a cookie to empty
            document.cookie = "username=;";
        }
    });
}

$(document).ready(main);
