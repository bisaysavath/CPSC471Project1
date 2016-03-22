var main = function () {
    "use strict";

    $("h2").hide();

    $("h2").fadeIn();

    // Check cookie if the user is signed in
    var cookie = document.cookie;
    var username = cookie.substring("username=".length, cookie.length);
    var isLogIn = cookie.substring(username.length + "login=".length + 1, cookie.length);

    // If user is logged in, show Log out
    if (username !== "" && isLogIn !== "no") {
        // select the "login" a tag
        $("body header nav a:nth-child(3)").empty()
        $("body header nav a:nth-child(3)").append("Log out");
    }

    // When the user clicks the log out button
    $("body header nav a:nth-child(3)").on("click", function () {
        if (username !== "") {
            // Delete cookie by setting it to passed date
            document.cookie = "username=" + username + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    });
}

$(document).ready(main);
