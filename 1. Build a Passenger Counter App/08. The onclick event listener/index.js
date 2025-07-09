// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
// console.log(countEl);
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  // countEl.innerText = count;
  countEl.textContent = count;
}

//----------------------------

// let dash = "-";

function save() {
  let countDash = count + " - ";
  // saveEl.innerText += " " + countDash + " ";
  // console.log(countDash);
  saveEl.textContent += countDash;
  count = 0;
  countEl.textContent = 0;
}

// save();
