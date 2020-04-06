function cont()
		{
			var ans = confirm("Oiya aku lupa belum ngucapin. Tekan OK buat mengizinkan !");
			if(ans == true) {
				window.open("next-page.html");
				return true;
			}
			else{
				return false;
			}
		}