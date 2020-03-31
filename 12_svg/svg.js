// Vishwaa Sofat & Akhmed Sultan -- MUNy Problems
// K12 - Connect the dots svg style

console.log("connected svg.js");
// ELEMENT SELECTORS
var clearButton = document.getElementById("clear-button");
var screenImage = document.getElementById("screenImage");

var sampleDot = document.getElementById("sample-dot");
var sampleLine = document.getElementById("sample-line");

var prevX = -1;
var prevY = -1;

var clear = function(e) {

	while ( screenImage.firstChild ) {
		screenImage.removeChild( screenImage.firstChild );
	}
	prevX = -1;
	prevY = -1;
	console.log("children of screenImage removed")
}

var addDot = function(e) {
	e.preventDefault();
	console.log(e);
	console.log(prevX,prevY);

	let newDot = sampleDot.cloneNode();
	let newLine = sampleLine.cloneNode();

	newDot.setAttribute("cx",e.layerX);
	newDot.setAttribute("cy",e.layerY);
	newDot.removeAttribute("display");
	newDot.removeAttribute("id");
	screenImage.appendChild(newDot);

	if(prevX != -1 && prevY != -1){
		newLine.setAttribute("x1",prevX);
		newLine.setAttribute("y1",prevY);
		newLine.setAttribute("x2",e.layerX);
		newLine.setAttribute("y2",e.layerY);
		newLine.removeAttribute("display");
		newLine.removeAttribute("id");
		screenImage.appendChild(newLine);
	}
	prevX = e.layerX;
	prevY = e.layerY;
}

clearButton.addEventListener('click',clear);
screenImage.addEventListener('click',addDot);
