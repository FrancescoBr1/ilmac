
    // il bottone scroll to top appare
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	window.scroll({
	top: 0, 
	});
}

// setta l'altezza dell'immagine copertina uguale a quella del testo a sinistra + 60 margine, inoltre posiziona correttamente il bg destro, escluso su mobile

if ($(window).width() > 800) {
	var divHeight = $('.corso-top_left p').height() + $('.corso-top_left h1').height() + 60; 
	$('.corso-img').height(divHeight);
	$('.corso-topbg_right').css({'top' : divHeight + 102});
}


// tasty hamburger css e funzione che fa apparire il menu mobile

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
			var x = document.getElementById("hamblist");
				if (x.style.width == "") {
						x.style.width = "100%";
						x.style.opacity = "1" ;
				} else { 
						x.style.width = "";
						x.style.opacity = "";
						}
  });
	

// toglie sfondo bianco e offset su schermo più piccolo di 800

window.onload = function offsetRemove() {
	if ($(window).width() < 800) {
		$('.lmargin-offset').removeClass('lmargin-offset');
	}
	if ($(window).width() < 800) {
		$('.rmargin-offset').removeClass('rmargin-offset');
	}

  }
  