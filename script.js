var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("#btn");

// 1. Write code so that the colour inputs match the background
// generated on the first page load.
body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

// 2. Display the initial CSS linear gradient property on page load.
css.textContent = body.style.background + ";"

function setGradient(){
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
var array = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function randomHexColor(){
	var col = "";
	for(var i = 0; i < 6; i++){
		col = col + array[Math.floor(Math.random()*16)];
	}
	return "#" + col;			
}

function setRandomGradient(){
	color1.value = randomHexColor();
	color2.value = randomHexColor();
	setGradient();
}

btn.addEventListener("click", setRandomGradient);



