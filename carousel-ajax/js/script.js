// Dit zorgt ervoor dat de pagina index.html helemaal geladen is voordat we scripten
$(document).ready(function () {

  // We selectoren de select-tag
  $("#selectCategory").on("change", function () {

    // Dit is de gekozen waarde in de select
    var category = $(this).val();

    $.post("http://localhost/2017-2018/blok3/k-frte-am1c/carousel-ajax/data.php",
           {"category" : category},
           function(data) {
            // Hier komt code om de opgehaalde tekst weg te zetten op index.html
            console.log(data);
            $(".jumbotron p").html(data);
           },
           "text");
  })
});