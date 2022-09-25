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

//single round of rock paper scisors function()
function playRound(playerSelection, computerSelection) {

    //if playerSelection equals computerSelection return "Tie Game!"

    //if playerSelection is Rock and computerSelection is Paper return "You lose! Paper beats Rock."

    //if playerSelection is Rock and computerSelection is Scissors return "You win! Rock beats Scissors."

    //if playerSelection is Paper and computerSelection is Rock return "You win! Paper beats Rock."

    //if playerSelection is Paper and computerSelection is Scissors return "You Lose! Scissors beats Paper."

    //if playerSelection is Scissors and computerSelection is Rock return "You lose! Rock beats Scissors."

    //if playerSelection is Scissors and computerSelection is paper return "You Win! Scissors beats Paper."
    
}

