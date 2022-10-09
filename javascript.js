//Yes this code is messy but I'm a n00b so cut me some slack

let userScore = 0;
let botScore = 0;

const selections = document.querySelector('.selections');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const win = document.querySelector('.win');

function resetGame() {
    
    botScore = 0;
    userScore = 0;
    selections.textContent = "";
    message.textContent = "Choose Rock, Paper or Scissors to start!";
    score.textContent = `Score: You: ${userScore}  Bot: ${botScore}`;
    win.textContent = "";

    document.getElementById('rock').onclick = () => {
        playerSelection = 'Rock';
        playGame();
    }
    document.getElementById('paper').onclick = () => {
        playerSelection = 'Paper';
        playGame();
    }
    document.getElementById('scissors').onclick = () => {
        playerSelection = 'Scissors';
        playGame();

    }
}

function getBotChoice() {

    const items = ["Rock", "Paper", "Scissors"];
    let botChoice = items[Math.floor(Math.random() * items.length)];
    return botChoice;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Paper" ||
        playerSelection == "Paper" && computerSelection == "Scissors" ||
        playerSelection == "Scissors" && computerSelection == "Rock") {
        botScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        userScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else (playerSelection == computerSelection)
    return "It's a tie!";

}

// Game function:
function playGame() {

    const computerSelection = getBotChoice();
    //DOM mods:
    message.textContent = `${playRound(playerSelection, computerSelection)}`;
    selections.textContent = `You: ${playerSelection}  Bot: ${computerSelection}`;
    score.textContent = `Score:  You: ${userScore}  Bot: ${botScore}`;
    finalScore();
}

// Final score function:
function finalScore() {

    if (userScore == 5) {
        win.textContent = "You win the Game!";
        document.getElementById('rock').onclick = () => {
            resetGame();
        }
        document.getElementById('paper').onclick = () => {
            resetGame();
        }
        document.getElementById('scissors').onclick = () => {
            resetGame();
        }
    }
    else if (botScore == 5) {
        win.textContent = "You lose the Game!";
        document.getElementById('rock').onclick = () => {
            resetGame();
        }
        document.getElementById('paper').onclick = () => {
            resetGame();
        }
        document.getElementById('scissors').onclick = () => {
            resetGame();
        }
    }
    else {
        return "";
    }
}



resetGame();



