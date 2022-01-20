$(function() {
    // Cambio de color del navbar
    $("#header").mouseenter(function(){
        $('#navegacion').removeClass("negro");
         $('#navegacion').addClass("transparente");
    })
    $("#header").mouseleave(function(){
        $('#navegacion').removeClass("transparente");
         $('#navegacion').addClass("negro");
    })
});