var main = function () {
    "use strict";
    
    var contactContainer = {};

    $("body main button").on("click", function () {
      contactContainer.name = ($("body main form .input-name").val());
      contactContainer.email = ($("body main form .input-email").val());
      contactContainer.phone = ($("body main form .input-phone").val());
      contactContainer.message = ($("body main form .input-message").val());
      $("body main form input").val("");
      $("body main form textarea").val("");

      console.log(contactContainer);
  });
}

$(document).ready(main);
