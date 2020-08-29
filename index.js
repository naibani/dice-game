// JavaScript file for Dicee game

//Randomly generates a number 1-6 and returns it
function randomGenerator() {
  var number = Math.floor((Math.random() * 6) + 1);
  return number;
}

//This function determins the winner based on which number is higher
function winner(num1, num2) {
  var winner;

  if (num1 > num2) {
    winner = "🚩 Player 1 Wins!"
  }
  if (num1 < num2) {
    winner = "Player 2 Wins! 🚩"
  }
  if (num1 === num2) {
    winner = "🚩 Draw!! 🚩"
  }

  return winner;
}

//Generate the random numbers (dice rolls) for each dice
var randomNumber1 = randomGenerator();
var randomNumber2 = randomGenerator();

//Update the dice image src based on the random numbers above
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Update header to state the Winner!
document.querySelector("h1").innerText = winner(randomNumber1, randomNumber2);
