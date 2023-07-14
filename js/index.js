//initalise the username variable
let username = "";

//pick up the username from the input and save it
function saveName() {
  //pick the data from the input
  username = document.getElementById("username").value;
  //save the username to storage device
  localStorage.setItem("username", username);
  //inject the name into the heading
  document.getElementById("welcome-name").textContent = username;
}

//display high score if it exists
document.getElementById("highscore").textContent = localStorage.getItem("highscore") || "yet to be set";


//give the save name button a click handler
const usernameButton = document.querySelector("#username-button");
usernameButton.addEventListener("click", saveName);
