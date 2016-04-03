var main = function () {
    "use strict";

    $("h2").hide();
    $("h2").fadeIn(500);
    
    var username = getCookie("username");
    var isLogIn = getCookie("login");

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
            deleteCookie("username", username);
        }
    });
}

// Credit: http://www.w3schools.com/js/js_cookies.asp
var setCookie = function (cname, cvalue, clogin) {
    var d = new Date();
    d.setTime(d.getTime() + (180*1000)); // Log in is good for 180 seconds
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    if (clogin === true) {
        document.cookie = "login=yes";
    }
    else {
        document.cookie = "login=no";
    }
}

var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

var deleteCookie = function (cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

$(document).ready(main);
