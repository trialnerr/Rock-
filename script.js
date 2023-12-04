let userScore = 0;
let computerScore = 0;
let gameEnded = false; 
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".compScore");
const updateElement = document.querySelector("#update");
const hidden = document.querySelector(".hidden");
const resetBtn = document.querySelector(".reset");
const yourChoice = document.querySelector(".your-choice"); 
const compChoice = document.querySelector(".comp-choice"); 
const winningMessage = document.querySelector(".winningMessage")
console.log(hidden, resetBtn); 

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function update(userScore, computerScore) {
  yourScore.textContent = `SCORE:  ${userScore}`;
  compScore.textContent = `SCORE:   ${computerScore}`;

}

function updateSelection(playerSelection, computerSelection){
  yourChoice.textContent = `You:  ${playerSelection}`;
  compChoice.textContent = `Computer:   ${computerSelection}`;
}


function playRound(playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      return "Tie, play again";
    case "paperrock":
      return "You win, paper beats rock!";
    case "rockpaper":
      return "You lose, rock beats paper!";
    case "scissorsrock":
      return "You lose, rock beats scissors!";
    case "rockscissors":
      return "You win, rock beats scissors!";
    case "scissorspaper":
      return "You win, scissors beats paper!";
    case "paperscissors":
      return "You lose, scissors beats paper!";
  }
}

/*
 - add an event listener for when the user clicks on a choice
 - when they do, assign the image picked to player
 - have the computer also pick a choice and assign choice to computer
 - playRound(player, computer)
 - if tie change update to update string! 
 - if win change update to update string
 - if lose change update to update string
*/
function showResultMessage(message) {
  winningMessage.textContent = message;
  
  hidden.style.display = "flex"; // Show the hidden div
}

function reset() {
  userScore = 0;
  computerScore = 0;
  update(userScore, computerScore); 
  gameEnded = false; // Reset game end flag
  hidden.style.display = "none"; // Hide the hidden div
}

function play(playerSelection) {
  if (gameEnded) return; 

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateElement.textContent = `${result}`;
  if (result.includes("win")) {
    userScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }
  updateSelection(playerSelection, computerSelection); 
  update(userScore, computerScore);

  if (userScore === 5) {
    showResultMessage("You won!"); 
    gameEnded = true; 
  }
  if (computerScore === 5){
    showResultMessage("You lost!"); 
    gameEnded = true; 
  }
}


function main() {
  resetBtn.addEventListener("click", reset); 
  rock.addEventListener("click", () => play("rock"));
  paper.addEventListener("click", () => play("paper"));
  scissors.addEventListener("click", () => play("scissors"));
}

main();

