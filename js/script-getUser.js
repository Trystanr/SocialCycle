var userName = "";

$( document ).ready(function() {
    $(function(){
		setInterval(getLatestUser, 1000);
	});
});

function getLatestUser() {
	console.log("Getting");


	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://affix.joburg/SocialCycle/php/getLatest.php", true);
	xhr.send();
	xhr.onload = function() {
  		// Get the latest username from database

  		res = xhr.response;

  		resUsername = res.substring(res.indexOf(',')+1);

  		if (userName == "") {
			userName = resUsername;
		} else {

			if (userName !== resUsername) {
				// Bounce Animation
				addClass(document.getElementById('usr-center-cont'), "bounce");
			} else {
				// Remove bounce animation
				removeClass(document.getElementById('usr-center-cont'), "bounce");
			}
		}

		userName = resUsername;

  		document.getElementById('usr-center-cont').innerHTML = resUsername;
	};


	
}

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}
