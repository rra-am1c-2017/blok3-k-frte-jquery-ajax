$(document).ready(function () {
  setInterval(toggle, 500);

  function toggle() {
    $("#third").toggleClass("toggle");
  }

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