let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
// let sumResult = "";

function startGame() {
  // 3. Render the sum on the page using this format -> "Sum: 14"
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    console.log(sum);
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

{
  /* <h1>Blackjack</h1>
<p id="message-el">Want to play a round?</p>
<p>Cards:</p>
<!-- 1. Give the sum paragraph and id of sum-el -->
<p id="sum-el">Sum:</p>
<button onclick="startGame()">START GAME</button> */
}
