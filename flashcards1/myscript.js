// functions

function addition(){
	var ourAnswer = document.getElementById("answer").value;
	isNaN(ourAnswer);
	if(isNaN(ourAnswer)){
	document.getElementById("output").innerHTML = "Hey! " + ourAnswer + " is not a number.";
	} else {
		if (ourAnswer == correctAnswer){
			document.getElementById("output").innerHTML = "<h2>correct</h2>";
		} else {
			document.getElementById("output").innerHTML = "<h2>not correct dumb ass</h2>";
		}
			//document.getElementById("output").innerHTML = ourAnswer;
	}
	//return "Hello " + firstname;
}

function newCard(){
	document.getElementById("output").innerHTML = " ";
	document.getElementById("answer").value = " ";
	numOne = (Math.floor(Math.random() * 10) + 1);
    numTwo = (Math.floor(Math.random() * 10) + 1);
    document.getElementById("demo").innerHTML = numOne + " + " + numTwo;
    correctAnswer = numOne + numTwo;
}