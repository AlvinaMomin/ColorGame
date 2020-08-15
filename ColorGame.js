var numSquares = 6; 
var colors = genRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay=document.getElementById("ColorDisplay");
var message=document.getElementById("message");
var h1= document.querySelector("h1");
var resetColors=document.querySelector("#reset");
var easy= document.querySelector("#easyBtn");
var hard= document.querySelector("#hardBtn");


easy.addEventListener("click", function() {
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquares=3;
	colors = genRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for (var i = 0; i < squares.length;i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else { 
			squares[i].style.display="none";
		}
	}
});

hard.addEventListener("click", function() {
	easy.classList.remove("selected");
	hard.classList.add("selected");

	numSquares=6;
	colors = genRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for (var i = 0; i < squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display="block";
	}
});
resetColors.addEventListener("click", function (){
	//generating new colors and picking a new color
	colors = genRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

		for (var i = 0; i <squares.length; i++){
			//adding colors to the squares
			squares[i].style.backgroundColor= colors[i];
		}

	h1.style.backgroundColor= "steelblue";
	message.textContent=""; 
	this.textContent="New Colors"; 
	 });

colorDisplay.textContent = pickedColor;


for (var i =0; i<squares.length; i++){
	//adding colors to the squares
	squares[i].style.backgroundColor= colors[i];
	// adding event listeners
	squares[i].addEventListener("click", function(){
		//comparing clicked answer to answer
		var clickedColor= this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent="Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor  = clickedColor;
				resetColors.textContent="Play Again?"
			} else {
				this.style.backgroundColor=" #232323";
				message.textContent="Try Again";
			}
	});
} 

function changeColors(color) {
	//changing all colors to match winning color
	for (var i = 0; i < squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// assigning the RGB we're looking for
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function genRandomColors(num) {
	//array of 6 or 3 random colors
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColors())
	}
	return arr;
}

function randomColors() {
	//picking 0 to 255 in all 3 sections
	var red = Math.floor(Math.random() * 256); 
	var green = Math.floor(Math.random() * 256); 
	var blue = Math.floor(Math.random() * 256); 

	return "rgb(" + red + ", " + green + ", " + blue + ")";

}

