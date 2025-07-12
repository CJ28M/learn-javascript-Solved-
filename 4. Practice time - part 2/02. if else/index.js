let age = 85;

function discount() {
  // less than 6 years old -> free

  if (age < 6) {
    console.log("free");

    // 6 to 17 years old     -> child discount
  } else if (age < 18) {
    console.log("child discount");

    // 18 to 26 years old    -> student discount
  } else if (age < 27) {
    console.log("student discount");

    // 27 to 66 years old    -> full price
  } else if (age < 67) {
    console.log("full price");

    // over 66 years old     -> senior citizen discount
  } else {
    console.log("senior citizen discount");
  }
  // Create a conditional statement (if/else/else if) that logs out the discount
  // the passenger will get based upon the value of the age variable
}

console.log(discount());
