//Tworzenie 9 divow z id 1,2,3...
function makefields()
{
	var pola ="";
	
	for (i=1; i<=9; i++)
	{
	pola = pola +'<div id="'+i+'" class="pole" style="float: left" onclick="postaw('+i+')"><p>'+i+'</p></div>';
		document.getElementById("pola").innerHTML=pola;
	}
	
}
window.onload=makefields;

//Wyswietlenie remisu i usuwanie aktywnosci pól
function remis()
 {
	for(i=1; i<=9; i++) 
	{
		var nr = ""+i;
		document.getElementById(nr).onclick="";
		document.getElementById(nr).setAttribute("class", "off");
	}
	document.getElementById("wynik").innerHTML="<img src='img/remis.png'>";
}

//Wyswietlenie kto wygral i usuwanie aktywnosci pól

function win(who){
	for(i=1; i<=9; i++) 
	{
		var nr = ""+i;
		document.getElementById(nr).onclick="";
		document.getElementById(nr).setAttribute("class", "off");
	}
	document.getElementById("wynik").innerHTML="<img src='img/win"+who+".png'>";
	
	
}

//Sprawdzanie gdzie zaszla wygrana, czyli gdzie divy w lini sa takie same

function ifwin(who){
	
	if(document.getElementById("1").innerHTML === document.getElementById("2").innerHTML && document.getElementById("2").innerHTML === document.getElementById("3").innerHTML ||
		document.getElementById("4").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("6").innerHTML ||
		document.getElementById("7").innerHTML === document.getElementById("8").innerHTML && document.getElementById("8").innerHTML === document.getElementById("9").innerHTML ||
		document.getElementById("1").innerHTML === document.getElementById("4").innerHTML && document.getElementById("4").innerHTML === document.getElementById("7").innerHTML ||
		document.getElementById("2").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("8").innerHTML ||
		document.getElementById("3").innerHTML === document.getElementById("6").innerHTML && document.getElementById("6").innerHTML === document.getElementById("9").innerHTML ||
		document.getElementById("1").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("9").innerHTML ||
		document.getElementById("3").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("7").innerHTML) 
		win(who);
	
}

	
var klik = new Audio("klik.wav");
var runda = 1;

//funkcja wstawajaca kolko lub krzyzyk w zaleznosci od rundy
function postaw(i)
{

	//Porownanie zawartosci poczatkowej diva
	var div = ""+i;
	var get = document.getElementById(div).innerHTML;
	var stan="<p>"+i+"</p>";
	
	
	if (runda%2==0 && get == stan) {
		
		document.getElementById(i).innerHTML="<img src='img/krzyzyk.png'>";
		klik.play();
		var who = "x";
		if(runda>=3) ifwin(who);
		runda++;
		
		if (runda>9){
			remis();
			return 0;
		}
		
		return 0;
	}
	
	if(runda%2!=0 && get == stan) {
		
		document.getElementById(i).innerHTML="<img src='img/kolko.png'>";
		klik.play();
		var who = "o";
		if(runda>=3) ifwin(who);
		runda++;
		
		if (runda>9){
			remis();
			return 0;
		}
		
		
		return 0;
	}
	
	
	

}


