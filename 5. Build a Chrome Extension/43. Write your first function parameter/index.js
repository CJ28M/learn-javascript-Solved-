const welcomeEl = document.getElementById("welcome-el");

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser() {
//   welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋";
// }

// greetUser();

function greetUser() {
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser("Howdy", "James", "👌");
