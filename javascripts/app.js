var main = function () {
  $("main h2").hide();
  $("main .user-info p").hide();

  $("main h2").fadeIn( function () {
    $("main .user-info p").slideDown(1000);
  });

}

$(document).ready(main);
