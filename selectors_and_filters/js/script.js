$(document).ready(function() {

  // Hier komt altijd je JQuery code omdat je dan zeker weet dat de
  // gehele pagina geladen is.
  // alert("Hallo JQuery Wereld!!!");
  
  // Dit is het chainen van methods
  $("ol").css("border", "5px solid orange")
         .css("padding", "25px")
         .css("width", "400px");

  // We maken een javascriptobject
  var style_li = {"border" : "1px solid green",
                  "padding" : "25px",
                  "margin" : "5px"};

  $("li").css(style_li);


  $("#left").css({"background-color" : "rgb(220, 220, 220)",
                  "color" : "white",
                  "font-size" : "24px"});
                  
  $("#right").css({"background-color" : "rgb(200, 200, 200)"});
  

});


