$(document).ready(function() {
	
	
	var _idleSecondsTimer = null;
	var _idleSecondsCounter = 0;
	var IDLE_TIMEOUT= 300 ; //seconds 300 means 5 min
	_idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);
	generateToken();
	function CheckIdleTime() {
        _idleSecondsCounter++;
        if (_idleSecondsCounter >= IDLE_TIMEOUT) {		
			_idleSecondsCounter=0;
            generateToken();			
		}
    }
		
});


	
	function generateToken(){
		var settings = {
		  "url": "https://apistaging.cashyear.io/auth/token",
		  "method": "POST",
		  "timeout": 0,
		  "headers": {
			"Content-Type": "application/json",
			"CY-TenantID": "DEFAULT"
		  },
		  "data": JSON.stringify({
			"clientId": "admin",
			"secret": "DMEBCWI0jiVylb3Q40E2FtoC1KlQZT"
		  }),
		};

		$.ajax(settings).done(function (response) {			
			setSession("accessToken",response.accessToken);
		});
	}
	function setSession(key, value) {	
		sessionStorage.setItem(key, value);
	}