(function () {	//IIFE
	"use strict";

	//Wyswietlenie kto wygral i usuwanie aktywnosci pól

	function win(who){
		
		for(var i=0; i<=8; i++) {
			field[i].removeEventListener("click", insert);
			field[i].classList.remove('field');
			field[i].classList.add('off');
		}
		
		result.innerHTML="<img src='img/"+who+".png'>";
	}

	//Sprawdzanie gdzie zaszla wygrana, czyli gdzie divy w lini sa takie same

	function ifWin(who){
		
		var divs = [];

		for (var i=0; i<=8; i++){
			divs[i]=field[i].innerHTML;
		}
		
		if( divs[0] === divs[1] && divs[1] === divs[2] ||
			divs[3] === divs[4] && divs[4] === divs[5] ||
			divs[6] === divs[7] && divs[7] === divs[8] ||
			divs[0] === divs[3] && divs[3] === divs[6] ||
			divs[1] === divs[4] && divs[4] === divs[7] ||
			divs[2] === divs[5] && divs[5] === divs[8] ||
			divs[0] === divs[4] && divs[4] === divs[8] ||
			divs[2] === divs[4] && divs[4] === divs[6]){
			win(who);
		}
		
		else if(round>9) win("draw");
	}


	//funkcja wstawajaca kolko lub krzyzyk w zaleznosci od rundy
	
	function insert(i){
		
		click.play();
		round++;
		
		if (round%2==0) {
			
			field[i].innerHTML="<img src='img/krzyzyk.png'>";
			if(round>=3) ifWin("x");
			return;
			
		}
		
		if(round%2!=0) {
			
			field[i].innerHTML="<img src='img/kolko.png'>";
			
			if(round>=3) ifWin("o");
			return;
			
		}
		
	}

	//Replay button
	
	document.getElementById("replay").addEventListener("click", clear);
		
	function clear(){
		
		for(i=0; i<=8; i++){
			field[i].innerHTML=i;
			field[i].classList.remove('off');
			field[i].classList.add('field');
		}

		result.innerHTML="";
		round=1;
	}

	//Tworzenie 9 divow z id 1,2,3...
	
	for (var i=0; i<9; i++){
		var field = document.createElement('div');
		field.classList.add('field');
		field.id = i;
		field.textContent =i;
		
		document.getElementById('fields').appendChild(field);
	}
	
	//Zmienne globalne:
	//Pola:
	var field = document.querySelectorAll('.field');	
	//Pole wyniku
	var result = document.getElementById("result");
	//Klik
	var click = new Audio("klik.wav");
	//Runda
	var round = 1;
	
		
	//Even Delegation https://davidwalsh.name/event-delegate
	
	document.getElementById("fields").addEventListener("click",function(e){
		if(e.target.classList.contains('field')){
			parseInt( e.target.id );
			insert( e.target.id );
		}
		
	});

})();	//IIFE

