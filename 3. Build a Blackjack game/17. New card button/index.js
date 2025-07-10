let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
  //   message = "Drawing a new card from the deck!";
  //   messageEl.textContent = message;
  console.log("Drawing a new card from the deck!");
}

/*     <h1>Blackjack</h1>
    <p id="message-el">Want to play a round?</p>
    <p id="cards-el">Cards:</p>
    <p id="sum-el">Sum:</p>
    <button onclick="startGame()">START GAME</button>
    <!-- 1. Create a NEW CARD button, make it run newCard() on click -->
    <button onclick="newCard()">NEW CARD</button> */
