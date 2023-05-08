$(document).ready(function() {
	$(".login-btn").css({"pointer-events":"none"});
	$(".send-otp").css({"pointer-events":"none"});
	
    $(".send-otp").click(function(){		
		var phonenumber = $("#phonenumber").val();
		var phoneno = /^\d{10}$/;
		  if(phonenumber.match(phoneno)){		
			$(".send-otp").css({"pointer-events":"painted"});
				getOTP(phonenumber);
		  }else{
			 alert("Not a valid Phone Number");
			 $(".send-otp").css({"pointer-events":"none"});
			 return false;
		  }
	});
	
	$("#phonenumber").keyup(function(){		
		var phonenumber = $("#phonenumber").val();		
		var phoneno = /^\d{10}$/;
		  if(phonenumber.match(phoneno)){		
			$(".send-otp").css({"pointer-events":"painted"});				
		  }else{			 
			 $(".send-otp").css({"pointer-events":"none"});
			 return false;
		  }
	});
	$(".otp").keyup(function(){		
		var current = $(this).val();		
		if(current != ""){			 			 			 
			 $("#"+$(this).attr("index")).focus();
		}
		
		var inputs = document.getElementsByClassName("otp");		
		var flag=1;
		var arr=[];
		for(let i=0; i<inputs.length;i++){						
			if(inputs[i].value == ""){
				flag=0;
				arr.push(inputs[i].value);
			}
		}
		if(flag){
		  $(".login-btn").css({"pointer-events":"painted"});
		  var otp=arr[0]+arr[1]+arr[2]+arr[3]; 
		  //verifyotp(otp);
		}else{
			$(".login-btn").css({"pointer-events":"none"});
		}		
	});
	
	$(".login-btn").click(function(){
		var otp=$("#1").val()+$("#2").val()+$("#3").val()+$("#4").val(); 
		verifyotp(otp);
	});
	
});

function verifyotp(otp){
	
	var settings = {
	  "url": "https://apistaging.cashyear.io/customer/login/verifyotp",
	  "method": "POST",
	  "timeout": 0,
	  "headers": {
		"Content-Type": "application/json",
		"CY-TenantID": "DEFAULT",
		"Authorization": "Bearer "+sessionStorage.getItem("accessToken")
	  },
	  "data": JSON.stringify({
		"mobile": sessionStorage.getItem("phonenumber"),
		"otp": otp
	  }),
	};
	$.ajax(settings).done(function (response) {
	  console.log(response);
	});	
}
function getOTP(phonenumber){
		var settings = {
			  "url": "https://apistaging.cashyear.io/customer/login",
			  "method": "POST",
			  "timeout": 0,
			  "headers": {
				"Content-Type": "application/json",
				"CY-TenantID": "DEFAULT",
				"Authorization": "Bearer "+sessionStorage.getItem("accessToken")
			  },
			  "data": JSON.stringify({
				"mobile": phonenumber
			  }),
			};
			$.ajax(settings).done(function (response) {
			  console.log(response);
			  setSession("phonenumber",phonenumber);
			});
	}