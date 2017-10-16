$(document).ready(function () {
	function animateArrow() {
		$('.down i').removeAttr('style');
		$('.down i').animate({
			marginTop: '10px',
		}, 1500, animateArrow)
	}
	animateArrow();
});
$('.down i').click(function () {
	$('html,body').animate({
		scrollTop: $('#com').offset().top
	}, 'slow')
});


$(function () {
	tamanhoTela = $('.tela-inner').width();

	function insereTexto() {
		var insere = $('.tela-inner .textinho');
		insere.each(function (index) {
			tamanhoTextinho = Math.floor((Math.random() * tamanhoTela - 10) + 10);
			$(this).delay(500 * index).animate({
				'width': tamanhoTextinho
			}, Math.floor((500 * tamanhoTextinho) / 100));
		});
	}

	var containerNotebook = $('.container-notebook');

	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	scroll_primeira_vez = false;
	$(window).scroll(function () {
		var valor = isScrolledIntoView(containerNotebook);
		if (valor && !scroll_primeira_vez) {
			insereTexto();
			scroll_primeira_vez = true;
		}
	});
});


$('.com-experiences .category')[0];