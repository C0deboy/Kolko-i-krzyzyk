//(function () {	//IIFE
	"use strict";
//Tworzenie 9 divow z id 1,2,3...
function makefields()
{
	var fields ="";
	
	for (var i=1; i<=9; i++)
	{
		fields = fields +'<div id="'+i+'" class="field" onclick="insert('+i+')"><p>'+i+'</p></div>';
		document.getElementById("fields").innerHTML=fields;
//nie działo prawidłowo->		document.getElementById(i).addEventListener("click", function(){insert(i);}, false);
	}
}
makefields();

//Wyswietlenie remisu i usuwanie aktywnosci pól
function draw()
 {
	for(var i=1; i<=9; i++) 
	{
		document.getElementById(i).onclick="";
		document.getElementById(i).classList.remove('field');
		document.getElementById(i).classList.add('off');
	}
	document.getElementById("result").innerHTML="<img src='img/remis.png'>";
}

//Wyswietlenie kto wygral i usuwanie aktywnosci pól

function win(who){
	for(var i=1; i<=9; i++) 
	{
		document.getElementById(i).onclick="";
		document.getElementById(i).classList.remove('field');
		document.getElementById(i).classList.add('off');
	}
	document.getElementById("result").innerHTML="<img src='img/win"+who+".png'>";
	
	
}

//Sprawdzanie gdzie zaszla wygrana, czyli gdzie divy w lini sa takie same

function ifwin(who){
		var divs = new Array;

		for (var i=1; i<=9; i++)
		{
			divs[i]=document.getElementById(i).innerHTML;
		}
	if(divs[1] === divs[2] && divs[2] === divs[3] ||
		divs[4] === divs[5] && divs[5] === divs[6] ||
		divs[7] === divs[8] && divs[8] === divs[9] ||
		divs[1] === divs[4] && divs[4] === divs[7] ||
		divs[2] === divs[5] && divs[5] === divs[8] ||
		divs[3] === divs[6] && divs[6] === divs[9] ||
		divs[1] === divs[5] && divs[5] === divs[9] ||
		divs[3] === divs[5] && divs[5] === divs[7]) 
		win(who);
}

	
var click = new Audio("klik.wav");
var round = 1;

//funkcja wstawajaca kolko lub krzyzyk w zaleznosci od rundy
function insert(i)
{

	//Porownanie zawartosci poczatkowej diva
	var div = ""+i;
	var getstate = document.getElementById(div).innerHTML;
	var state="<p>"+i+"</p>";
	
	
	if (round%2==0 && getstate == state) {
		
		document.getElementById(i).innerHTML="<img src='img/krzyzyk.png'>";
		click.play();
		var who = "x";
		if(round>=3) ifwin(who);
		round++;
		
		if (round>9){
			draw ();
			return 0;
		}
		
		return 0;
	}
	
	if(round%2!=0 && getstate == state) {
		
		document.getElementById(i).innerHTML="<img src='img/kolko.png'>";
		click.play();
		var who = "o";
		if(round>=3) ifwin(who);
		round++;
		
		if (round>9){
			draw ();
			return 0;
		}
		
		
		return 0;
	}
	
}
//Replay button
document.getElementById("replay").addEventListener("click", function(){location.reload();}, false);

//})();	//IIFE

