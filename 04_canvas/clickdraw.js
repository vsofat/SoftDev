var mode = "circle"
const canvas = document.getElementById("canv");
const toggler = document.getElementById("swap");
const status = document.getElementById("status");
const clear = document.getElementById("clear");
const ctx = canvas.getContext("2d");


var swap = function(e){
	if (mode === "circle"){
		mode = "rect";
		status.innerHTML = "rectangle";
	}

	else{
		mode = "circle";
		status.innerHTML = "circle";

	}


};

toggler.addEventListener("click", swap);
clear.addEventListener("click", function(){ctx.clearRect(0, 0, canvas.width, canvas.height);});

var draw = function (e, state){
	var rect = canvas.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	if (e.buttons > 0){
		if (state === "rect"){
						ctx.beginPath();
						ctx.rect(x-10, y-10, 20, 20);
						ctx.strokeStyle = "red";
						ctx.stroke();

	        }
	        else {
							ctx.beginPath();
							ctx.arc(x, y, 10, 0, 2 * Math.PI);
							ctx.strokeStyle = "blue";
							ctx.stroke();
		}
	}
};

canvas.addEventListener("mousemove", function(e, state){draw(e, mode)});

# worked with Jude
