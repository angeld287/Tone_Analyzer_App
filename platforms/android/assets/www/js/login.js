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
					var url = 'http://localhost:8080/tone_analyzer/database/login/validate_user.php'
					var dataString="name="+name+"&password="+password+"&id=";
					//alert(dataString);
					$.ajax({
						type: "GET",
						url: url,
						data: dataString,
						dataType: "json",
						crossDomain: true,
						cache: false,
						beforeSend: function(){},
						success: function(result){
							//alert(result);
									if(result == 0){
										alert("login mal");
										
									}else {
										result.forEach(function(loc) { 
											//alert(loc.name+" == "+ name +" && "+loc.password+" == "+password);
												if(loc.name == name || loc.email == name){
													localStorage.setItem("userToken", loc.password+loc.name+loc.id);
													localStorage.setItem("userName", loc.name);
													localStorage.setItem("userId", loc.id);
													window.location.replace("../home/home.html");
												}
										 });
									}
							 	},
						error: function(request, status, error){
									alert(request.responseText+" | "+status+" | "+error);
								}
					});
				}
			});
		}
	});
});
