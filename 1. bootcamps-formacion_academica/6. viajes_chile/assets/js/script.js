$(function () {
    // Cambio de color del navbar
    $("#carousel").mouseenter(function () {
        $('#navegacion').removeClass("negro");
        $('#navegacion').addClass("transparente");
    })
    $("#header").mouseleave(function () {
        $('#navegacion').removeClass("transparente");
        $('#navegacion').addClass("negro");
    })

    // cambio tamaño por el navbar

    $(".nav-link").click(function(){
        var numeral=this.hash

        $("html, body").animate({
            scrollTop: $(numeral).offset().top -60 // 60->Tamaño del navbar
        }, 1000)
        
    });
});

// tooltipis bootstrap

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})