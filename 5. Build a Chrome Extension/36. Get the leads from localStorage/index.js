let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage-PS: JSON.parse()
// localStorage.clear();
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

console.log(leadsFromLocalStorage);
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
