$(function () {
    // Cambio de color del navbar
    $("#header").mouseenter(function () {
        $('#navegacion').removeClass("negro");
        $('#navegacion').addClass("transparente");
    })
    $("#header").mouseleave(function () {
        $('#navegacion').removeClass("transparente");
        $('#navegacion').addClass("negro");
    })
});

// tooltipis bootstrap

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})