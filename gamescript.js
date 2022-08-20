const gamePieces = ["rock", "paper", "scissors"];

// returns a random game value from the computer
function getComputerChoice() {
  return gamePieces[Math.floor(Math.random() * gamePieces.length)];
}

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

//buttons
const initialiseGame = document.querySelector(".battle");
const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const playAgain = document.querySelector(".play-again");
const actionButtons = document.querySelectorAll(".action-button");

//Document content
const computerChoiceDisplay = document.querySelector(
  ".gamepiece-placeholder-computer"
);
const humanPlayerChoiceDisplay = document.querySelector(
  ".gamepiece-placeholder-human"
);
const statusMessage = document.querySelector(".status");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

//repeating functions
//reveal game buttons to play
function revealButtons(event) {
  initialiseGame.classList.add("hidden");
  rockButton.classList.remove("hidden");
  paperButton.classList.remove("hidden");
  scissorsButton.classList.remove("hidden");
}

//hide game buttons after round
function hideButtons() {
  rockButton.classList.add("hidden");
  paperButton.classList.add("hidden");
  scissorsButton.classList.add("hidden");
  initialiseGame.classList.remove("hidden");
}

//human victory
function Victory(winner) {
  rockButton.classList.add("hidden");
  paperButton.classList.add("hidden");
  scissorsButton.classList.add("hidden");
  initialiseGame.classList.add("hidden");
  playAgain.classList.remove("hidden");
  console.log(playerScore);
  console.log(computerScore);
  statusMessage.textContent = `It's finally over, ${winner} is victorious`;
}

//initialise the game
initialiseGame.addEventListener("click", function () {
  revealButtons();
});

playAgain.addEventListener("click", function () {
  hideButtons();
  playAgain.classList.add("hidden");
  initialiseGame.classList.remove("hidden");
  computerChoiceDisplay.textContent = "Waiting for input";
  humanPlayerChoiceDisplay.textContent = "You're up, champ";
  humanScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  playerScore = 0;
  computerScore = 0;
});

//logs player selection
actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.id;
    console.log(playerChoice);
    computerChoice = getComputerChoice().toLowerCase();
    console.log(computerChoice);
    playTheGame(playerChoice, computerChoice);
  });
});

// returns the correct round result dependent on inputs from the 'game' function
function playTheGame(playerChoice, computerChoice) {
  computerChoiceDisplay.textContent = computerChoice;
  humanPlayerChoiceDisplay.textContent = playerChoice;
  if (computerChoice == playerChoice) {
    statusMessage.textContent = "That round is a tie! No points awarded :(";
    hideButtons();
    initialiseGame.textContent = "Next Round?";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    playerScore++;
    humanScoreDisplay.textContent = playerScore;
    hideButtons();
    initialiseGame.textContent = "Next Round?";
    statusMessage.textContent = "You win! Keep going...";
    if (playerScore == 5) {
      Victory("You");
    }
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    hideButtons();
    statusMessage.textContent = "You lose! Are you even trying?";
    if (computerScore == 5) {
      Victory("The Machine");
    }
  }
}
