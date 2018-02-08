$(document).ready(function() {

  // Hier komt altijd je JQuery code omdat je dan zeker weet dat de
  // gehele pagina geladen is.
  // alert("Hallo JQuery Wereld!!!");
  
  $("")
  // Dit is het chainen van methods
  $("ol").css("border", "5px solid green")
         .css("padding", "25px");

  // We maken een javascriptobject
  var style_li = {"border" : "1px solid green",
                  "padding" : "25px",
                  "margin" : "5px"};

  // We selecteren een li tag en passen de css in een js object toe
  $("li").css(style_li);

  // We selecteren een tag met id="left" en passen css toe in een js object
  $("#left").css({"background-color" : "rgb(220, 220, 220)",
                  "color" : "white",
                  "font-size" : "24px"});
   
  // We selecteren een tag met id="right" en passen css toe in een js object
  $("#right").css({"background-color" : "rgb(200, 200, 200)"});

  // Met een spatie kun je een selectie binnen een selectie maken
  $("#left .red").css({"color" : "red"});

  // Met een asterisk kun je alles selecteren
  $("*").css({"font-size" : "16px"});

  // We zetten een click event op een button
  $("#first_li").on("click", function () {
    // We gaan het filter first toepassen op de selectie
    $("li:first").css({"background-color" : "rgb(10,10, 60)", "border-radius" : "5px"})
  });

  $("#last_li").on("click", function() {
    $("#left li:last").css({"background-color" : "rgb(10,50, 180)", "border-radius" : "5px"})
  });

  $("#even_li").on("click", function() {
    $("#left li:even").css({"background-color" : "rgb(255,30, 0)", "border-radius" : "5px"})
  });

  $("#odd_li").on("click", function() {
    $("#left li:odd").css({"background-color" : "rgb(0,255, 50)", "border-radius" : "5px"})
  });

  $("#gt_li").on("click", function() {
    $("#left li:gt(1)").css({"background-color" : "rgb(0,255, 50)", "border-radius" : "5px"})
  });

  $("#lt_li").on("click", function() {
    $("#left li:lt(2)").css({"background-color" : "rgb(0,255, 200)", "border-radius" : "5px"})
  });

  $("#eq_li").on("click", function() {
    $("#left li:eq(2)").css({"background-color" : "rgb(0,255, 200)", "border-radius" : "5px"})
  });










  // last, even, odd, gt(2), lt(2), eq(2) + 6 knoppen





  



});

// Einde lesweek 1


