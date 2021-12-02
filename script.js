console.log("CONNECTED");

var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //adding colors to the squares
  squares[i].style.background = colors[i];
  //adding event listeners to the squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.background;

    if (clickedColor === pickedColor) {
      console.log(clickedColor + " Correct Color Picked");
      message.textContent = "Correct";
      //make all the squares have the same color if color picked is correct
      changeColors(pickedColor);
      h1.style.background = pickedColor;
    } else {
      console.log(clickedColor + " Wrong Color Selected");
      this.style.background = "#232323";
      message.textContent = "Try Again";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
function pickColor() {
  var randomNumber = Math.floor(Math.random() * 6);
  return colors[randomNumber];
}

function randomColor() {
  //generate random number between o and 255
  var r = Math.floor(Math.random() * 256);
  //generate random number between o and 255
  var g = Math.floor(Math.random() * 256);
  //generate random number between o and 255
  var b = Math.floor(Math.random() * 256);

  var colorString = "rgb" + "(" + r + ", " + g + ", " + b + ")";

  return colorString;
}

function generateColors(num) {
  var colorsArray = [];
  //generate an array of random colors
  for (let i = 0; i < num; i++) {
    colorsArray.push(randomColor());
  }

  return colorsArray;
}
