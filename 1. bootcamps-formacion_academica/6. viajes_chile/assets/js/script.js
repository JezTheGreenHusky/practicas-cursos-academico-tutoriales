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

    // Cambio de color con botones

    $(".nav-link").click(function(){
        var numeral=this.hash

        $("html, body").animate({
            scrollTop: $(numeral).offset().top -60 // 60->Tamaño del navbar
        }, 1000)
        
    });

    /*
    cambio de color segun el nivel de scroll:
    var carousel = document.getElementById("carousel");
    pixeles = carousel.clientHeight;
    pixeles = parseInt(pixeles);

    $(window).scroll(function () {
        if ($(window).scrollTop() <= pixeles) {
            $(".navbar").css({
                "background-color": "transparent"
            })

        } else {
            $(".navbar").css({
                "background-color": "#0dcaf0"

            })
        }
    */
});

// tooltipis bootstrap

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})