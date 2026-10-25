/*
 * Safe cybersecurity awareness demo.
 * This script does not read, store, or transmit input values.
 */
const form = document.querySelector("#demo-form");
const warning = document.querySelector("#warning");
const tryAgain = document.querySelector("#try-again");
const passwordInput = document.querySelector("#password");
const usernameInput = document.querySelector("#username");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear the fields without reading their contents.
  usernameInput.value = "";
  passwordInput.value = "";

  // Show the educational warning instead of authenticating anyone.
  warning.hidden = false;
  warning.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

tryAgain.addEventListener("click", () => {
  warning.hidden = true;
  usernameInput.focus();
});
