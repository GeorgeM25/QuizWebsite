//get a hold of the HTML objects
let q1span = document.getElementById("q1");
let qsignspan = document.getElementById("qsign");
let q2span = document.getElementById("q2");
//create an array for the signs
const signs = ["+", "-", "*", "/"];
//create variables for the randomly generated content
let q1val = 0;
let qsign = "";
let q2val = 0;
//create variable for the answer
let answer = 0;
//get a hold of the buttons to set answer options to
let a1btn = document.getElementById("a1");
let a2btn = document.getElementById("a2");
let a3btn = document.getElementById("a3");
//get a hold of the feedback div
let fbdiv = document.getElementById("feedback");
//get a hold of the score div
let scorediv =document.getElementById("score");
//create a highscore value
let score=0;

startGame()
levelOne(

)
function startGame(){

  //generate some 2 random numbers and a random sign
  q1val = Math.floor(Math.random() * 13);
  q2val = Math.floor(Math.random() * 13);
  qsign = signs[Math.floor(Math.random() * 4)];
  
  //set the HTML objects with the randomly generated content
  q1span.textContent = q1val;
  q2span.textContent = q2val;
  qsignspan.textContent = qsign;
  
  //calculate the answer
  switch (qsign) {
    case "+":
      answer = q1val + q2val;
      break;
      case "-":
        answer = q1val - q2val;
        break;
        case "/":
          answer = q1val / q2val;
          break;
          case "*":
            answer = q1val * q2val;
            break;
          }
          
          //set the buttons with the answer options
          a1btn.innerHTML = q1val + 14;
          a2btn.innerHTML = answer;
          a3btn.innerHTML = q2val + 4;
        }
          
//check if the answer is correct and update the feedback div
function checkAnswer(selectedNum) {
  //selectedNum == 2 ? "Yay! Correct Answer!" : "Ohh sorry, try again!";
  if (selectedNum == 2 ){
    //if answer is right, update the feedback
    fbdiv.innerHTML = "Yay! Correct Answer!";
    //increment the score
    score++
    //save the highscore
    localStorage.setItem("highscore", score);
    //then update the score
    scorediv.innerHTML = score;
  } else {
    //if answer is wrong, update the feedback only
    fbdiv.innerHTML = "Ohh sorry, try again"
  }
  startGame();
  
}

//set click listeners for the buttons
a1btn.addEventListener("click", () => {
  checkAnswer(1);
  const audio = new Audio("wrongChoice.mp3")
  audio.play();
});
a2btn.addEventListener("click", () => {
  checkAnswer(2);
  const audio = new Audio("correctChoice.mp3")
  audio.play();
});
a3btn.addEventListener("click", () => {
  checkAnswer(3);
  const audio = new Audio("wrongChoice.mp3")
  audio.play();
});

//setup timer
function levelOne(){
  const myTimeout = setTimeout(endGame, 30000);
}

function endGame(){
  //disable the buttons
  a1btn.disabled = true;
  a2btn.disabled = true;
  a3btn.disabled = true;

  //update the feedback to show that time is up
  fbdiv.innerHTML = "Your time is up! your score is " + score;
}