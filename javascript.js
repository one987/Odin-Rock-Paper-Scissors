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

