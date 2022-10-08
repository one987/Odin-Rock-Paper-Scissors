

let userScore = 0;
let botScore = 0;

const selections = document.querySelector('.selections');
const message = document.querySelector('.message');
const score = document.querySelector('.score');


document.getElementById('rock').onclick = function(e){
        playerChoice = 'Rock';
        playGame();
      }
document.getElementById('paper').onclick = function(e){
        playerChoice = 'Paper';
        playGame();
      }
document.getElementById('scissors').onclick = function(e){
        playerChoice = 'Scissors';
        playGame();
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

    //for (let i = 0; i < 5; i++) {
        //let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
        const playerSelection = playerChoice;
        const computerSelection = getBotChoice();
        console.log("You:", playerSelection, "", "Bot:", computerSelection);
        selections.textContent = `You: ${playerSelection}  Bot: ${computerSelection}`;
        
        message.textContent = `${playRound(playerSelection, computerSelection)}`;
        console.log("Score:", "You:", userScore, "Bot:", botScore);
        score.textContent = `Score:  You: ${userScore}  Bot: ${botScore}`;
        console.log(finalScore());

    }
//}

// Final score function:
function finalScore() {

    if (userScore == 5) {
        return "You win the Game!";
        //add reset function
    }
    else if (botScore == 5) {
        return "You lose the Game!";
        //add reset function
    }
    else {
        return "";  //test if removing this will yield a cleaner code
    }
}



