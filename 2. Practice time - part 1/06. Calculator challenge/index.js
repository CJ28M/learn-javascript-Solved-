let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2

function add() {
  let result = num1 + num2;
  // console.log(totalAdd);
  sumEl.textContent = "Sum: " + result;
}

function sub() {
  let result = num1 - num2;
  // console.log(totalSub);
  sumEl.textContent = "Sum: " + result;
}

function div() {
  let result = num1 / num2;
  // console.log(totalDiv);
  sumEl.textContent = "Sum: " + result;
}

function multi() {
  let result = num1 * num2;
  // console.log(totalMulti);
  sumEl.textContent = "Sum: " + result;
}

// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

/* <span id="num1-el"></span>
    <span id="num2-el"></span>
    <br>
    <button id="add-el" onclick="add()">Add</button>
    <button id="sub-el" onclick="sub()">Subtract</button>
    <button id="div-el" onclick="div()">Divide</button>
    <button id="multi-el" onclick="multi()">Multiply</button>
    <br>
    <span id="sum-el">Sum: </span>
    <script src="index.js"></script> */
