console.log("CONNECTED");

//DECLARATIONS OF VARIABLES
var numSquares = 6;

var squares = document.querySelectorAll(".square");
var upperSquares = document.querySelectorAll("#uppersquares");
var lowerSquares = document.querySelectorAll("#lowersquares");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#messageDisplay");
var resetButton = document.querySelector("#reset");
var easyButtton = document.getElementById("easy");
var hardButtton = document.getElementById("hard");
var h1 = document.querySelector("h1");
var colors = generateColors(numSquares);
var pickedColor = pickColor(colors.length);

//LOGIC DEVELOPMENT

colorDisplay.textContent = pickedColor;

//Squares and color layout logic

for (let i = 0; i < squares.length; i++) {
  //adding colors to the squares
  squares[i].style.background = colors[i];
  //adding event listeners to the squares
  squares[i].addEventListener("click", function () {
    let clickedColor = this.style.background;

    if (clickedColor === pickedColor) {
      console.log(clickedColor + " Correct Color Picked");
      message.textContent = "Correct";
      //make all the squares have the same color if color picked is correct
      changeColors(pickedColor);
      h1.style.background = pickedColor;
      resetButton.textContent = "Play Again";
    } else {
      console.log(clickedColor + " Wrong Color Selected");
      this.style.background = "#232323";
      message.textContent = "Try Again";
    }
  });
}

//FUNCTION  TO CHANGE THE COLOR OF SQUARES
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

//FUNCTION TO PICK A RANDOM COLOR FROM THE COLORS ARRAY
function pickColor(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return colors[randomNumber];
}

//FUNCTION TO GENERATE AN RGB COLOR STRING
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

//FUNCTION TO ADD RANDOM COLORS TO THE COLORS  ARRAY
function generateColors(num) {
  var colorsArray = [];
  //generate an array of random colors
  for (let i = 0; i < num; i++) {
    colorsArray.push(randomColor());
  }
  return colorsArray;
}

//RESET BUTTON LOGIC
resetButton.addEventListener("click", function () {
  resetGame();
});

//EASY MODE LOGIC
easyButtton.addEventListener("click", function () {
  numSquares = 3;
  easyButtton.classList.add("selected");
  hardButtton.classList.remove("selected");
  console.log("easy utton clicked");

  //generate a set of 3 random colors
  colors = generateColors(numSquares);
  //pick a color from the three
  pickedColor = pickColor(colors.length);
  //display the selected color on the Color Display
  colorDisplay.textContent = pickedColor;
  //Display the 3 random colors
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  console.log(colors);
});

//HARD MODE LOGIC BUTTON
hardButtton.addEventListener("click", function () {
  easyButtton.classList.remove("selected");
  hardButtton.classList.add("selected");
  console.log("hard button clicked");
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
  console.log(colors);
  resetGame();
});

//FUNCTION TO RESET THE GAME LOGIC
function resetGame() {
  //generate new colors
  colors = generateColors(6);
  //pick a new color
  pickedColor = pickColor(6);
  //display pucked color
  colorDisplay.textContent = pickedColor;
  //display new set of colors
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  //reset h1 background
  h1.style.background = "#232323";
  resetButton.textContent = "New Colors";
}
