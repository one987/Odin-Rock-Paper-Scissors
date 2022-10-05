

let userScore = 0;
let botScore = 0;
let gameCount = 0;



function getBotChoice() {

    const items = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let botChoice = items[Math.floor(Math.random() * items.length)];

    return botChoice;
}

//Single round of rock paper scisors function()
function playRound(playerSelection, computerSelection) {


    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        botScore++;
        gameCount++;
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        userScore++;
        gameCount++;
        return "You win! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        userScore++;
        gameCount++;
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        botScore++;
        gameCount++;
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        botScore++;
        gameCount++;
        return "You lose! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        userScore++;
        gameCount++;
        return "You Win! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        gameCount++;
        return "It's a tie!"
    }
    else {
        gameCount++;
        return "Error! You have  to choose Rock, Paper or Scissors!"
    }
}

// Game function:
function game() {
    for (let i = 0; i < 5; i++) {
        //let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
        let computerSelection = getBotChoice();
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

game();

