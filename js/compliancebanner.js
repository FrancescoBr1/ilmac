
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') c = c.substring(1);
	  if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
  }
  function createAcceptCookie() {
	var cookieBanner = document.getElementById("cookie-banner");
	document.cookie = "accepted_cookie_policy=yes; expires=" + setExpiryDate() + ";";
	cookieBanner.classList.add("accepted-cookie-policy");
  }
  function setExpiryDate() {
	var d = new Date();
	d.setFullYear(d.getFullYear() + 1);
	return d.toUTCString();
  }
  var isCookieSet = getCookie("accepted_cookie_policy");
  if (isCookieSet === "") {
	document.getElementById("cookie-button").addEventListener("click", createAcceptCookie);
  } else {
	document.getElementById("cookie-banner").classList.add("accepted-cookie-policy");
  }