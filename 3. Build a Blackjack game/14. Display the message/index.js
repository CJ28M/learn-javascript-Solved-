let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");

// 1. Store the message-el paragraph in a variable called messageEl

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // 2. Display the message in the messageEl using messageEl.textContent
  // console.log(message)
  messageEl.textContent = message;
}

{
  /* <h1>Blackjack</h1>
<p id="message-el">Want to play a round?</p>
<p>Cards:</p>
<p>Sum:</p>
<button onclick="startGame()">START GAME</button> */
}
