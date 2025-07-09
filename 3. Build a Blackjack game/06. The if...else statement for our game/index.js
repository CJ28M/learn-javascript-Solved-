let firstCard = 10;
let secondCard = 12;
let sum = firstCard + secondCard;
let rule = 21;

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
  console.log("Do you want to draw a new card?😊");
} else if (sum === rule) {
  console.log("Wohoo! You've got Blackjack!🥳");
} else {
  console.log("You're out of the game! 😭");
}
