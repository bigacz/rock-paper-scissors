const moves = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber]
}
console.log(getComputerChoice());

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt().toLowerCase();
    switch(playerChoice) {
        case "rock":
            moveRock(computerChoice);
            break;    
        case "paper":
            movePaper(computerChoice);
            break;
        case "scissors":
            moveScissors(computerChoice);
            break;
        default:
            console.log("Wrong input!");
            break;
    }
}

function moveRock() {
    switch(computerChoice) {
        case "rock": 
            console.log("Draw");
            break;
        case "paper":
            console.log("Lose");
            break;
        case "scissors":
            console.log("Win");
            break;
    }
}

function movePaper() {
    switch(computerChoice) {
        case "rock": 
            console.log("Win");
            break;
        case "paper":
            console.log("Draw");
            break;
        case "scissors":
            console.log("Lose");
            break;
    }       
}

function moveScissors() {
    switch(computerChoice) {
        case "rock": 
            console.log("Lose");
            break;
        case "paper":
            console.log("Win");
            break;
        case "scissors":
            console.log("Draw");
            break;
    }   
}