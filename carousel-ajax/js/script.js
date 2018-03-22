// Dit zorgt ervoor dat de pagina index.html helemaal geladen is voordat we scripten
$(document).ready(function () {
  ajaxCall("fruit");

  // We selectoren de select-tag
  $("#selectCategory").on("change", function () {

    // Dit is de gekozen waarde in de select
    var category = $(this).val();

    ajaxCall(category);
  })


  function ajaxCall(value) {
    $.post("http://localhost/2017-2018/blok3/k-frte-am1c/carousel-ajax/data.php",
    {"category" : value},
    function(data) {
     // Hier komt code om de opgehaalde tekst weg te zetten op index.html
     for ( var i = 0; i < data.length; i++) {
       console.log(data[i].name);
       $(".carousel-inner img").eq(i).attr("src" , "./images/" + data[i].name);
       $(".carousel-inner h5").eq(i).html(data[i].title);
       $(".carousel-inner p").eq(i).html(data[i].info);
     }
    },
    "json");
  }
});