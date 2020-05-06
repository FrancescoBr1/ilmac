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

	var divHeight = $('.corso-top_left p').height() + $('.corso-top_left h1').height();
	$('.corso-img').height(divHeight + 60);
		
}

// tutte le pagine (o quasi): prende l'altezza del testo in copertina e lo usa per dare l'altezza e la posizione delle barre


if ($(window).width() > 800) {

var topHeight = $('#top-copy').height();

	$('#bg-img').height( topHeight * .75 + ($(window).height() / 24 ) ); //posiziona il bg in base all'altezza dell'immagine e della viewport
	$('#bg-img').css({ 'top': topHeight * .25 + ($(window).height() / 20 )}); 
	$('#alt-top-bg').height( topHeight * .25 + 90 );

}

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

if ($(window).width() < 800) {
	$('.lmargin-offset').removeClass('lmargin-offset');
	$('.rmargin-offset').removeClass('rmargin-offset');
}
