function Login(){
	debugger;
	var email = document.getElementById('inputEmail').value;
	var password = document.getElementById('inputPassword').value;

	if (email==='admin@qualitysounds.com' && password ==='admin'){
		sessionStorage.setItem('admin', true);
		document.getElementById('home').click();
	}
	else {
		alert("Invalid Email/Password combination.");
	}

}