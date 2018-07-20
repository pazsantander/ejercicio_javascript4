$( document ).ready( function (){
     //Apertura de la tarjeta
     $(".card").click (function(){
        $(this).toggleClass("card--open")
    });
   
    //Like
   $(".card__like").click (function(e){
        $(this).toggleClass("card__like--red");
        e.preventDefault();
   });


})