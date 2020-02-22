$("#btnSearch").on("click", function() {

	var usrname = $("#txtUsername").val();
	if (usrname.length > 0) {

		switch($("#selSocial").prop('selectedIndex')) {
			case 0:
				// instagram
				console.log("instagram");
				handleInstagram(usrname);
				break;
		}
	} else {
		console.log("No username provided");
	}
});

$("#txtUsername").on("keyup", function(e) {
	console.log(e.keyCode);

	if (e.keyCode !== 13) {
		handleCard(false);
	} else {
		$("#btnSearch").click();
	}

});

function handleCard(bShowInstaCard) {
	if (bShowInstaCard) {
		if ($("#instaCard").hasClass("hideCard")) {
			$("#instaCard").removeClass("hideCard");
		}
	} else {
		if (!($("#instaCard").hasClass("hideCard"))) {
			$("#instaCard").addClass("hideCard");
		}
	}
}

function handleInstagram(usr) {
	$.getJSON("https://www.instagram.com/" + usr + "/?__a=1", function(e) {
		console.log(e);
		console.log(e.graphql.user.full_name);

		var usrSrc = e.graphql.user.profile_pic_url_hd;

		var usr = [];
		usr[0] = e.graphql.user.username;
		usr[1] = e.graphql.user.full_name;
		usr[2] = e.graphql.user.biography;
		usr[3] = e.graphql.user.edge_followed_by.count;
		usr[4] = e.graphql.user.edge_follow.count;
		
		$("#user-img").attr("src", usrSrc);
		$("#user-name").text(usr[1]);
		$("#user-at").text("@" + usr[0]);
		$("#user-des").text(usr[2]);
		$("#user-fol span").text(usr[3]);
		$("#user-fin span").text(usr[4]);

		popularityVal = (usr[3] - usr[4]);
		var popularityRange = popularityVal / usr[3];
		var popularityStars = "";

		console.log(popularityVal);
		console.log(popularityRange);

		if (popularityVal < 0) {
			// Not popular
			console.log("Least popular");
		} else  {

			if (popularityRange < 0.2) {
				// Mr lonely
				popularityStars += "&#xf005;";
			} else if (popularityRange < 0.4) {
				popularityStars += "&#xf005;&#xf005;";
			} else if (popularityRange < 0.6) {
				popularityStars += "&#xf005;&#xf005;&#xf005;";
			} else if (popularityRange < 0.8) {
				popularityStars += "&#xf005;&#xf005;&#xf005;&#xf005;";
			} else {
				// Mr popular
				popularityStars += "&#xf005;&#xf005;&#xf005;&#xf005;&#xf005;";
			}


			/*
			0.0 -> 0.2 *
			0.2 -> 0.4 **
			0.4 -> 0.6 ***
			0.6 -> 0.8 ****
			0.8 -> 1.0 *****
			*/

		}

			$("#user-pop span").html(popularityStars);

			handleCard(true);


	});
}