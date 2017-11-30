

function changeplayer(player) {
	//Let's figure out who's playing the game.

	if(player == "X"){
		document.getElementById("currentplayer").innerHTML = "O";
	} else{
		document.getElementById("currentplayer").innerHTML = "X";
	}
}


function set(idvalue){

	var buttonclicked = document.getElementById(idvalue); 
	var currentplayer = document.getElementById("currentplayer");
	if (buttonclicked.innerHTML == "" || buttonclicked.innerHTML==null){
		buttonclicked.innerHTML = currentplayer.innerHTML;
		if (check_win()){
			alert("The Winner is " + currentplayer.innerHTML + " !");
		}
		changeplayer(currentplayer.innerHTML);
	} else{
		alert("Sorry! This button is already clicked!");
	}

}

function check_win() {
	
	var player = document.getElementById("currentplayer").innerHTML;

	var box0 = document.getElementById("0").innerHTML;
	var box1 = document.getElementById("1").innerHTML;
	var box2 = document.getElementById("2").innerHTML;

	var box3 = document.getElementById("3").innerHTML;
	var box4 = document.getElementById("4").innerHTML;
	var box5 = document.getElementById("5").innerHTML;

	var box6 = document.getElementById("6").innerHTML;
	var box7 = document.getElementById("7").innerHTML;
	var box8 = document.getElementById("8").innerHTML;


	if ((box0 == box1) && (box1 == box2) && (box0 != "") ){
		return true;
	} 
	if ((box3 == box4) && (box4 == box5) && (box3 != "") ){
		return true;
	}
	if ((box6 == box7) && (box7 == box8) && (box6 != "") ){
		return true;
	}

	if ((box0 == box4) && (box4 == box8) && (box0 != "") ){
		return true;
	}

	if ((box2 == box4) && (box4 == box6) && (box2 != "") ){
		return true;
	}

	if ((box0 == box3) && (box3 == box6) && (box0 != "") ){
		return true;
	}

	if ((box1 == box4) && (box4 == box7) && (box1 != "") ){
		return true;
	}

	if ((box2 == box5) && (box5 == box8) && (box2 != "") ){
		return true;
	}


	return false; 

}

function reset1()
{
	var buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

	for(var counter = 0; counter < buttons.length; counter++)
	{
	var currentbutton = document.getElementById(buttons[counter]);
	currentbutton.innerHTML = "";
	}

}

















