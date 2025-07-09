// When the user clicks the purchase button, render out
// console.log(error);
let errorP = document.getElementById("error"); //calling "paragraph id" to js
console.log(errorP); //test
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// onclick = "purchase()";
// <p id="error"></p>;

function purchase() {
  //on-click
  console.log("button clicked"); //test
  errorP.textContent = "Something went wrong. please try again"; //to show in paragraph
}
