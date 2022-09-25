
//computer choice function()

let userScore = 0;
let botScore = 0;

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
        botScore++;
        return "You lose! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        userScore++;
        return "You win! Rock beats Scissors."; 
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        userScore++;
        return "You win! Paper beats Rock.";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        botScore++;
        return "You Lose! Scissors beats Paper.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        botScore++;
        return "You lose! Rock beats Scissors.";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        userScore++;
        return "You Win! Scissors beats Paper.";
    }
    else {
        return "Tie game!"
    }
}

// Game function:

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
        let computerSelection =getBotChoice();
        console.log("You:", playerSelection, "", "Bot:",computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score:","You:", userScore, "Bot:", botScore);
        
        
        //declare a winner at the end of 5 rounds

     }
}


game();
