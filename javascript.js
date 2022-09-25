console.log("Hello World!");

//computer choice function()
function getBotChoice() {

    let items = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let botChoice = items[Math.floor(Math.random()*items.length)]; 

    return botChoice;  
}

//Single round of rock paper scisors function()
function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You win! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        return "You lose! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return "You Win! Scissors beats Paper.";
    }
    else {
        return "Tie game!"
    }
}

//function test:
let playerSelection = "Paper";
let computerSelection = getBotChoice();
console.log(playRound(playerSelection, computerSelection));

