// il bottone scroll to top appare

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
		document.getElementById("btnTop").style.display = "block";
	} else {
		document.getElementById("btnTop").style.display = "none";
	}
}

// bottone scroll to top torna all'inizio della pagina

function topFunction() {
	window.scroll({
		top: 0,
	});
}

// pagine dei corsi: setta l'altezza dell'immagine copertina uguale a quella del testo a sinistra + 60 margine, inoltre posiziona correttamente il bg destro, escluso su mobile

if ($(window).width() > 800) {
	var divHeight = $('.corso-top_left p').height() + $('.corso-top_left h1').height() + 60;
	$('.corso-img').height(divHeight);
	$('.corso-topbg_right').css({
		'top': divHeight + 102
	});
}

// tutte le pagine: setta il margine top del bg di destra rispetto all'altezza dell'immagine accanto
// per ora non funziona bene, l'altezza dei diversi contenuti è troppo diversa e risulta in bg distanziati in modo incoerente

/* var topHeight = $('#top-copy').height();

	$('#bg-img').height( topHeight / 1.7 );
	$('#bg-img').css({ 'top': topHeight / 1.5 }); */

// tasty hamburger css e funzione che fa apparire il menu mobile

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
	$hamburger.toggleClass("is-active");
	var x = document.getElementById("hamblist");
	if (x.style.width == "") {
		x.style.width = "100%";
		x.style.opacity = "1";
	} else {
		x.style.width = "";
		x.style.opacity = "";
	}
});

// toglie sfondo bianco e offset su schermo più piccolo di 800

window.onload = function offsetRemove() {
	if ($(window).width() < 800) {
		$('.lmargin-offset').removeClass('lmargin-offset');
		$('.rmargin-offset').removeClass('rmargin-offset');
	}
}