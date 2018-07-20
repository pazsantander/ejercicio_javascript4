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
     
    //Agregar perfil del autor
    $("#author").change(function(){
        $(".create__select").attr('src', '/assets/images/profiles/' + this.value);
    });

    //Captura de los contenidos del formulario
    $("create__form").submit (function(e){
        var nombre = $("#name").val(); // la variable nombre tendrá el valor que tenga el input con la etiqueta name dentro del forulario. El .val lo que hace es obtener el valor de ese elemento y lo convierte en variable
        //Variables a recuperar (que ya existen en el formulario)
        var followers = $("#followers").val();
        var likes = $("#likes").val();
        var following = $("#following").val();
        var author_foto = $("#author").val();
        var author_name = $("#author").find(":selected").text();
        var image_foto = $("#image").val(); 
        var image_name = $("#image").find(":selected").text();

        // Variable nueva para las nuevas cards que se irán generando
        var new_card = $(".card").eq(0).clone();

        //Y ahora las funciones que se le aplicarán y dónde se pondrán: en este caso al final (appendTo) del div con clase cards
        new_card.appendTo(".cards");
        // ahora le indico los elementos dentro de la nueva tarjeta, dónde encontrarlos (find) y luego qué ponerle dentro (attr)
        new_card



        e.preventDefault(); //para evitar que el formulario se envíe y, en su lugar, pueda ocupar esos datos
    })


})