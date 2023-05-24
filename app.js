const moves = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber]
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Your move")?.toLowerCase();
    switch(playerChoice) {
        case "rock":
            return moveRock(computerChoice);
        case "paper":
            return movePaper(computerChoice);
        case "scissors":
            return moveScissors(computerChoice);
        default:
            console.log("Wrong input!");
            playRound();
    }
}

function moveRock(computerChoice) {
    let result;
    switch(computerChoice) {
        case "rock": 
            return 0;
        case "paper":
            return -1;
        case "scissors":
            return 1

    } 
}

function movePaper(computerChoice) {
    switch(computerChoice) {
        case "rock": 
            return 1
        case "paper":
            return 0;
        case "scissors":
            return -1;
    }        
}

function moveScissors(computerChoice) {
    switch(computerChoice) {
        case "rock": 
            return -1;
        case "paper":
            return 1
        case "scissors":
            return 0;
    }  
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5)
    {
        let result = playRound();
        switch(result) {
            case 1:
                playerScore++;
                console.log("Win");
                break;
            case -1:  
                computerScore++;
                console.log("Lose");
                break;
            default:
                console.log("Draw");
                break;            
        }
        console.log(`You: ${playerScore} Computer: ${computerScore}`)
    }
    if(playerScore >= 5) {
        console.log("You WON the game!")
    }
    else {
        console.log("You LOST the game!")
    }
}

game();