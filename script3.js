$(document).ready(function () {
	var loc = window.location.href+'';
	if (loc.indexOf('http://')==0){
		window.location.href = loc.replace('http://','https://');	// https redirect
}
		if(e.which == 13) { //enter
			window.open("https://geekprank.com/boot-device-not-found/","_self");
		}