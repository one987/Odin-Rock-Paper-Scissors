

let userScore = 0;
let botScore = 0;
let gameCount = 0;

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () =>  {
    console.log("rock");
    
})
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () =>  {
    console.log("paper");
})
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () =>  {
    console.log("scissors");
})

function getBotChoice() {

    const items = ["Rock", "Paper", "Scissors"];
    let botChoice = items[Math.floor(Math.random() * items.length)];
    return botChoice;
}

//Single round of rock paper scisors function()
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" || 
    playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" ||
    playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock" ) {
        botScore++;
        gameCount++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" ||
    playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ||
    playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" ) {
        userScore++;
        gameCount++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        gameCount++;
        return "It's a tie!"
    }
    else {
        gameCount++;
        return "Error! You have to choose Rock, Paper or Scissors!"
    }
}

// Game function:
function playGame() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
        const computerSelection = getBotChoice();
        console.log("You:", playerSelection, "", "Bot:", computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score:", "You:", userScore, "Bot:", botScore);
        console.log(finalScore());

    }
}

// Final score function:
function finalScore() {

    if (gameCount == 5 && userScore > botScore) {
        return "You win the Game!";
    }
    else if (gameCount == 5 && userScore < botScore) {
        return "You lose the Game!";
    }
    else if (gameCount == 5 && userScore == botScore) {
        return "It's a tie Game!";
    }
    else {
        return "";  //test if removing this will yield a cleaner code
    }
}

playGame();

//to do for refactor:
//add event listener to buttons
//console.log results of clicking buttons to test 
//modify playerSelection to use buttons instead of prompt
//???
//profit