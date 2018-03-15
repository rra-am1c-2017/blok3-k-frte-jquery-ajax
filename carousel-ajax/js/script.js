$(document).ready(function () {
  $("#selectCategory").on("change", function () {

    // Dit is de gekozen waarde in de select
    var category = $(this).val();

    $.post("http://localhost/2017-2018/blok3/k-frte-am1c/carousel-ajax/data.php",
           {"category" : category},
           function(data) {
            // Hier komt code om de opgehaalde tekst weg te zetten op index.html
           },
           "text");
  })
});