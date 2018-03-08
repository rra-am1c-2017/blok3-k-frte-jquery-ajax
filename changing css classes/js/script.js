$(document).ready(function () {
  
  $("#adborder").on("click", function () {
    $("#first").addClass("thick_border");
  })

  $("#changeCss").on("click", function () {
    $("#first").addClass("changeCss");
  });

  $("#addradius").on("click", function () {
    $("#second").addClass("radius");
  });

  $("#rmradius").on("click", function () {
    $("#second").removeClass("radius");
  });

  $("#toggle").on("click", function () {
    $("#third").toggleClass("toggle");
  })
});