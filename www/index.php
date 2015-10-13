<!DOCTYPE html>
<html>
  <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <title>Foodinator</title>


        <!-- LOGIN -->
        <meta name="google-signin-scope" content="profile email">
		    <meta name="google-signin-client_id" content="994388041614-nr93o5el3st1nfgq0k8mrmj5odemn6l8.apps.googleusercontent.com">
		    <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script async defer type="text/javascript" src="js/login.js"></script>

        <!--<script type="text/javascript" src="js/geolocationmarker/src/geolocationmarker-compiled.js"> </script>-->
  </head>
  <body>
  	<p id="CLIENTID"></p>
  	<div id="login-slide">
  		<div class="g-signin2" data-onsuccess="onGoogleSignIn" data-theme="dark"></div>
  	</div> 
  </body>
</html>