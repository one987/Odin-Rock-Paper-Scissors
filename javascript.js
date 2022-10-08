//Yes this code is messy but I'm a n00b so cut me some slack

let userScore = 0;
let botScore = 0;

const selections = document.querySelector('.selections');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const win = document.querySelector('.win');

//player selection:
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

//reset game button:
document.getElementById('reset').onclick = () => {
    botScore = 0;
    userScore = 0;
    score.textContent = `Score:  You: ${userScore}  Bot: ${botScore}`;
    win.textContent = "";
}

      
function getBotChoice() {

    const items = ["Rock", "Paper", "Scissors"];
    let botChoice = items[Math.floor(Math.random() * items.length)];
    return botChoice;
}

//Single round of rock paper scisors function()
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "Rock" && computerSelection == "Paper" || 
    playerSelection == "Paper" && computerSelection == "Scissors" ||
    playerSelection == "Scissors" && computerSelection== "Rock" ) {
        botScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
    playerSelection == "Paper" && computerSelection == "Rock" ||
    playerSelection == "Scissors" && computerSelection == "Paper" ) {
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
        win.textContent = `${finalScore()}`;

    }

// Final score function:
function finalScore() {

    if (userScore == 5) {
        return "You win the Game!";
        //add reset function?
    }
    else if (botScore == 5) {
        return "You lose the Game!";
        //add reset function?
    }
    else {
        return "";  
    }
}

//to do:

// spruce up the html and css to design a nice simple UI
// ???
// profit

