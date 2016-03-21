var main = function () {
    "use strict";
    
    $("h2").hide();
    $("main .user-info p").hide();

    $("h2").fadeIn( function () {
    $("main .user-info p").slideDown(1000);
    });
}

$(document).ready(main);
