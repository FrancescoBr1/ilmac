
window.onscroll = function () { //tutte le funzioni onscroll devono stare qui
	scrollFunction() //funzione che fa apparire il bottone scroll to top
	stickyNav() //funzione che sticka il nav
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

// pagine dei corsi: setta l'altezza dell'immagine copertina uguale a quella del testo a sinistra + 60 margine

if ($(window).width() > 800) {

	var divHeight = $('.corso-top_left p').height() + $('.corso-top_left h1').height();
	$('.corso-img').height(divHeight + 64);	
}

// tutte le pagine (o quasi): prende l'altezza del testo in copertina e lo usa per dare l'altezza e la posizione delle barre


if ($(window).width() > 800) {

var topHeight = $('#top-copy').height();

	$('#bg-img').height( topHeight * .75 + ($(window).height() / 30 ) ); //posiziona il bg in base all'altezza dell'immagine e della viewport
	$('#bg-img').css({ 'top': topHeight * .35 + ($(window).height() / 40 )}); 
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

// sticky navigation

// prende la roba da modificare

var navLinks = document.querySelectorAll("nav div a");
var textHvrNav = document.querySelectorAll(".texthvr-nav");

if ($(window).width() > 800) {
	var navbar = document.getElementsByClassName("nav_desktop")[0];
	var mainlogo = document.getElementsByClassName("main-logo")[1]; // seleziona solo il logo desktop
}

if ($(window).width() < 800) {
	var navbar = document.getElementsByClassName("nav_mobile")[0];
	var mainlogo = document.getElementsByClassName("main-logo")[0]; // seleziona solo il logo mobile
}

// modifica le proprietà per ottenere il menu di navigazione pinnato

function stickyNav() {
 if (document.documentElement.scrollTop > 120) {
		navbar.classList.add ("sticky");
		mainlogo.classList.add ("main-logo_sticky");
		mainlogo.src = "/asset/logomin.svg";
			var i;	// modifica stile per tutti gli elementi, navlinks e il relativo hvr in questo caso
			for (i = 0; i < navLinks.length; i++) {
			navLinks[i].style.marginTop = "2rem";
			}
			for (i = 0; i < textHvrNav.length; i++) {
				textHvrNav[i].style.top = "2.6rem";
			}
		document.getElementById("hamblist").style.top ="8.5rem";

	} else {
		navbar.classList.remove ("sticky");
		mainlogo.classList.remove ("main-logo_sticky");
		mainlogo.src = "/asset/logo.svg";
			var i;
			for (i = 0; i < navLinks.length; i++) {
			navLinks[i].style.marginTop = "";
			}	
			for (i = 0; i < textHvrNav.length; i++) {
				textHvrNav[i].style.top = "";
			}
		document.getElementById("hamblist").style.top ="";	
	}
}

document.getElementById("minibanner_btn").addEventListener("click", bannerClose);

function bannerClose() {
	var x =	document.getElementById("minibanner");
	x.style.transform = "translateY(+100%)";
}


