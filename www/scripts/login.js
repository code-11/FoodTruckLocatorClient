OAuth.initialize('s6GkBwYgphGVqzw7xZG2ztdg3b8');
$(document).ready(function(){

	$("#facebook-login").click(function(){
		OAuth.redirect('facebook', 'http://foodinatorclient.herokuapp.com/www/login.html');
	});
	$("#google-login").click(function(){
		OAuth.redirect('google', 'http://foodinatorclient.herokuapp.com/www/login.html');
		//in your callback page (can be the same page)

		// OAuth.popup('google').done(function(google) {
		// 	window.location="mapview.html?"+google.access_token+"|0";
		// }).fail(function(err) {
		//   console.log(err);
		// });
	});
	$("#twitter-login").click(function(){
		OAuth.redirect('twitter', 'http://foodinatorclient.herokuapp.com/www/login.html');
	});
});
OAuth.callback('google',function(error,success) {
	if (typeof success !== "undefined") {
		window.location="mapview.html?"+success.access_token+"|0";
	}else{
		console.log(error);
	}
})
OAuth.callback('twitter',function(error,success) {
	if (typeof success !== "undefined") {
		// success.post('/1.1/statuses/update.json', {
  // 			data: {
  //   			status: "hello world!"
  // 			}
		// });
		window.location="mapview.html?"+success.oauth_token+"|0";
	}else{
		console.log(error);
	}
})
OAuth.callback('facebook',function(error,success) {
	if (typeof success !== "undefined") {
		// console.log(success);
		// success.post("/me/feed", {
  // 			message: "hello world!"
		// });
		window.location="mapview.html?"+success.access_token+"|0";
	}else{
		console.log(error);
	}
})



function onGoogleSignIn(googleUser) {
	// Useful data for your client-side scripts:
	var profile = googleUser.getBasicProfile();
	// console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	// console.log("Name: " + profile.getName());
	// console.log("Image URL: " + profile.getImageUrl());
	// console.log("Email: " + profile.getEmail());

	// The ID token you need to pass to your backend:
	var id_token = googleUser.getAuthResponse().id_token;
	//console.log("ID Token: " + id_token);
	document.getElementById("CLIENTID").innerHTML=profile.getId();
	//localStorage.setItem("user-info",profile.getId());
	window.location="mapview.html?"+profile.getId()+"|0";
}; 

function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'https://www.googleapis.com/auth/plus.login',
    'width': 500,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onGoogleSignIn,
    'onfailure': function(){console.log("failure");}
      });
  }