
$(function () {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// punto 3
	$('#correo').click(function() {
		alert("El correo fue enviado correctamente...");
	});

	// punto 4
	// opcion 1:
	/*
	$('.subtitulo').dblclick(function(){
		$(this).addClass('text-danger');
	});*/

	// opcion 2
	$('body').on('dblclick', '.subtitulo', function () {
        $(this).css("color", '#dc3545');
    });

	// punto 5
	$('.card-title').click(function(){
		$('.card-text').toggle()
	})
});