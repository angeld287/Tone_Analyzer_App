$(function(){	
	$("#loginForm").validate({
		rules:{
			name:{
				required: true
			},
			password: {
				required: true
			}
		},
		messages:{
			password:{
				required: 'este campo es requerido'
			},
			name:{
				required: 'este campo es requerido'
			}
		},
		submitHandler: function(){
			$("#submit-button").click(function(){
				if($("#loginForm").valid()) {
					var name=$("#name").val();
					var password=$("#password").val();
					var url = 'http://localhost:8080/tone_analyzer/database/login/validate_login.php'
					var dataString="name="+name+"&password="+password;
					$.ajax({
						type: "GET",
						url: url,
						data: dataString,
						crossDomain: true,
						cache: false,
						beforeSend: function(){},
						success: function(data){
									alert(data);
									if(data == "true"){
										alert("entra login");
										getUserData(name)
										
									}else if(data == "false"){
										alert("login mal");
									}
							 	},
						error: function(data){
									alert("Error de servicio xampp");
								}
					});
				}
			});
		}
	});
});

function getUserData(nameOrmail){
	//localStorage.setItem("userToken", "Alen");
	//localStorage.getItem("name"); //will return Alen
	alert("getUserData function");
	var url = "http://localhost:8080/tone_analyzer/database/login/validate_user.php";
	 $.getJSON(
		url,
		function(result){
			alert(result);
		}
		);
}
