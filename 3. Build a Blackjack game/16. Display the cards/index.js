let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

function startGame() {
  // 3. Render the cars on the page using this format -> "Cards: 10 4"
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

{
  /* <h1>Blackjack</h1>
        <p id="message-el">Want to play a round?</p>
        <!-- 1. Give the cards paragraph and id of cards-el -->
        <p id="cards-el">Cards:</p>
        <p id="sum-el">Sum:</p>
        <button onclick="startGame()">START GAME</button> */
}
