var main = function () {
  $("main h2").hide();
  $("main .user-info p").hide();

  $("main h2").fadeIn( function () {
    $("main .user-info p").slideDown(1000);
  });

  // $("body main form button").on("click", function () {
  //   // console.log($(".form-name").val());
  //   // console.log($(".form-email").val());
  //   // console.log($(".form-phone").val());
  //   // console.log($(".form-msg").val());
  //   alert($(".form-name").val());
  // })
}

$(document).ready(main);
