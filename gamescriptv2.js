// variables & locations

const playerScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");
const currentPlayerSelection = document.querySelector(
  ".gamepiece-placeholder-human"
);
const currentComputerSelection = document.querySelector(
  ".gamepiece-placeholder-computer"
);
const statusMessage = document.querySelector(".status");

//game pieces
const gamePieces = ["rock", "paper", "scissors"];
let computerChoice = getComputerChoice().toLowerCase();
let playerChoice = "";

//buttons
const startGame = document.querySelector(".battle");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const playAgain = document.querySelector(".play-again");

//scores

let currentPlayerScore = 0;
let currentComputerScore = 0;

// game functions

// returns a random game value from the computer
function getComputerChoice() {
  return gamePieces[Math.floor(Math.random() * gamePieces.length)];
}

function hideAll() {
  rockButton.classList.add("hidden");
  paperButton.classList.add("hidden");
  scissorsButton.classList.add("hidden");
}

function initialiseGame(event) {
  startGame.classList.add("hidden");
  rockButton.classList.remove("hidden");
  paperButton.classList.remove("hidden");
  scissorsButton.classList.remove("hidden");

  makeSelection();
}

function makeSelection() {
  rockButton.addEventListener("click", function () {
    console.log("rock");
    document.querySelector(".gamepiece-placeholder-human").textContent = "rock";
    hideAll();
  });
  scissorsButton.addEventListener("click", function () {
    console.log("rock");
    document.querySelector(".gamepiece-placeholder-human").textContent =
      "scissors";
    hideAll();
  });
  paperButton.addEventListener("click", function () {
    console.log("rock");
    document.querySelector(".gamepiece-placeholder-human").textContent =
      "paper";
    hideAll();
  });
  playTheGame();
}

function playTheGame() {
  currentComputerSelection.textContent = computerChoice;
  console.log(computerChoice);
  if (
    (currentComputerSelection.textContent = currentPlayerSelection.textContent)
  ) {
    statusMessage.textContent = "That round was a tie. Play again?";
    playAgain.classList.remove("hidden");
  }
}

//event listeners

startGame.addEventListener("click", initialiseGame);
