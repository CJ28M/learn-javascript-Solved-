// Check if the person is elegible for a birthday card from the King! (100)

let age = 99;
let rule = 100;

if (age < rule) {
  console.log("Not elegible");
} else if (age === rule) {
  console.log("Here is your birthday card from the King!");
} else {
  console.log("Not elegible, you have already gotten one");
}

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
