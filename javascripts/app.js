var main = function () {
  $("h2").hide();
  $("main .user-info p").hide();

  $("h2").fadeIn( function () {
    $("main .user-info p").slideDown(1000);
  });

  $("body main button").on("click", function () {
    console.log($("body main form .input-name").val());
    console.log($("body main form .input-email").val());
    console.log($("body main form .input-phone").val());
    console.log($("body main form .input-message").val());
    $("body main form input").val("");
    $("body main form textarea").val("");
  })
}

$(document).ready(main);
