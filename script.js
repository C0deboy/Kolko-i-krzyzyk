(function () {	//IIFE
	"use strict";

//Wyswietlenie kto wygral i usuwanie aktywnosci pól

function win(who){
	for(var i=0; i<=8; i++) 
	{
		document.getElementById(i).removeEventListener("click", insert);
		document.getElementById(i).classList.remove('field');
		document.getElementById(i).classList.add('off');
	}
	document.getElementById("result").innerHTML="<img src='img/"+who+".png'>";
}

//Sprawdzanie gdzie zaszla wygrana, czyli gdzie divy w lini sa takie same

function ifWin(who){
		var divs = [];

		for (var i=0; i<=8; i++)
		{
			divs[i]=document.getElementById(i).innerHTML;
		}
	if(divs[0] === divs[1] && divs[1] === divs[2] ||
		divs[3] === divs[4] && divs[4] === divs[5] ||
		divs[6] === divs[7] && divs[7] === divs[8] ||
		divs[0] === divs[3] && divs[3] === divs[6] ||
		divs[1] === divs[4] && divs[4] === divs[7] ||
		divs[2] === divs[5] && divs[5] === divs[8] ||
		divs[0] === divs[4] && divs[4] === divs[8] ||
		divs[2] === divs[4] && divs[4] === divs[6]) 
		win(who);
	else if(round>9) win("draw");
}

	
var click = new Audio("klik.wav");
var round = 1;

//funkcja wstawajaca kolko lub krzyzyk w zaleznosci od rundy
function insert(i)
{
	//Porownanie zawartosci poczatkowej diva
	
	var getState = document.getElementById(i).innerHTML;
	var state=i;
	if (round%2==0 && getState == state) {
		
		document.getElementById(i).innerHTML="<img src='img/krzyzyk.png'>";
		click.play();
		
		round++;
		if(round>=3 && round<=10) ifWin("x");
		return;
		
	}
	if(round%2!=0 && getState == state) {
		
		document.getElementById(i).innerHTML="<img src='img/kolko.png'>";
		click.play();
		
		round++;
		if(round>=3 && round<=10) ifWin("o");
		return;
		
	}
	
}
	//Replay button
	document.getElementById("replay").addEventListener("click", clear);
	
	function clear(){
		for(i=0; i<=8; i++){
			document.getElementById(i).innerHTML=i;
			document.getElementById(i).classList.remove('off');
			document.getElementById(i).classList.add('field');
			}
		document.getElementById("result").innerHTML="";
		round=1;
	}


	//Tworzenie 9 divow z id 1,2,3...
	
	
	for (var i=0; i<9; i++)
{
	var field = document.createElement('div');
    field.classList.add('field');
    field.id = i;
    field.textContent =i;

    document.getElementById('fields').appendChild(field);
}
	
	//Even Delegation https://davidwalsh.name/event-delegate
	document.getElementById("fields").addEventListener("click",function(e) 
	{
	if (e.target && e.target.matches("div.field")) 
	{
		var i = e.target.id;
		insert(i);
	}
	});

})();	//IIFE

