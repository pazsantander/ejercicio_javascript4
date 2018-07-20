$( document ).ready( function (){
    //Apertura de la tarjeta
    $(".card").click (function(){
        $(this).toggleClass("card--open");
    });
   
    //Like
   $(".card__like").click (function(e){
        $(".card__like").toggleClass("card__like--red");
        e.stopPropagation();
        e.preventDefault();
        // return false; también habría hecho stopPropagation + preventDefault
   });

    //Botón seguir
    $(".card__follow-btn").click (function(){
        $(this).toggleClass("card__follow-btn--following");
        return false;
   });

   //Agregar imagen seleccionada
    $("#image").change(function(){
        $(".create__image").attr('src', '/assets/images/squared/' + this.value);
    });
        

})