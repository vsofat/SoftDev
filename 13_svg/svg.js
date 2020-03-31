// Ahmed Sultan and Vishwaa Sofat -- MUNy Problems
// SoftDev pd9
// K13 - Ask Circles [Change || Die]
// 2020-03-30

const container = document.getElementById("container");
const clear = document.getElementById("clear");
const xmlns = "http://www.w3.org/2000/svg";

var drawDot = true;

var clearcont = function(event) {
     console.log("CLEARING CLEARING CLEARING");
     /* was originally going to just paint container white,
     but found this answer on StackOverflow we really liked and
     want to keep in our records for future use */
     while (container.lastChild) {
          container.removeChild(container.lastChild);
     }
     console.log("...COMPLETED!")
}

var draw = function(event) {
     if (drawDot) {
          const mouseX = event.offsetX;
          const mouseY = event.offsetY;
          console.log("drawing dot at " + mouseX + ", " + mouseY);
          // creating the dot
          const dot = document.createElementNS(xmlns, "circle");
          // assigning dot attributes
          dot.setAttribute("r", 15);
          dot.setAttribute("fill", "black");
          dot.setAttribute("cx", mouseX);
          dot.setAttribute("cy", mouseY);
          // appending dot to svg container
          container.appendChild(dot);

          console.log("...completed!")
     }
}

var multiclick = function(event) {
     drawDot = false;
     const mouseX = event.offsetX;
     const mouseY = event.offsetY;

     drawDot = true;

     if (container.hasChildNodes()) {
          let dots = container.childNodes;
          for (let i = 0; i < dots.length; i++) {
               if (dots[i].hasAttributes) {
                    var attrs = dots[i].attributes;
                    console.log(attrs[2].value);
                    // doing it within a RANGE of values instead
                    if ((attrs[2].value >= mouseX - 5) && (attrs[2].value <= mouseX + 5) && (attrs[3].value >= mouseY - 5) && (attrs[3].value <= mouseY + 5)) {
                         // triple click!
                         if (attrs[1].value == "red") {
                              attrs[2].value = Math.floor((Math.random() * 500) + 1);
                              attrs[3].value = Math.floor((Math.random() * 500) + 1);
                              attrs[1].value = "black";
                              drawDot = false;
                              return 0;
                         }
                         attrs[1].value = "red";
                         drawDot = false;
                         return
                    }
                    else {
                         drawDot = true;
                    }
               }
          }
     }
     else {
          drawDot = true;
     }
}

// adding event listeners
container.addEventListener("mousedown", multiclick);
container.addEventListener("mousedown", draw);
clear.addEventListener("click", clearcont);
