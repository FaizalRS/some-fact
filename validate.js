function validate()
{
	var password = document.getElementById("password").value;
	if ( password == "missyou")
	{	
		var val = prompt("Konfirmasi password !");
		if (val == "missyou") 
		{
			alert("Login Berhasil !")
			window.open("home.html");
		}
		else
		{
			alert("Password nya salah !");
		}

	}
	else if ( password != "missyou" && password != "")
	{
		window.alert("Passwordnya salah");
	}
	if ( password == "")
	{
		alert("Kamu belum masukin password !");
	}
}