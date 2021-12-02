console.log("CONNECTED");

var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[5];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //adding colors to the squares
  squares[i].style.background = colors[i];
  //adding event listeners to the squares
}
