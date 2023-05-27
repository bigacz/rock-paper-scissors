const buttons = document.getElementById('buttons').childNodes;
const humanScore = document.getElementById('human');
const computerScore = document.getElementById('computer');
const divLogs = document.getElementById('logs')

buttons.forEach(button => button.addEventListener('click', playRound));

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber]
}

function playRound(element) {
    let computerChoice = getComputerChoice();
    let playerChoice = element.currentTarget.id;
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
            playRound();
    }
}

function moveRock(computerChoice) {
    const choice = "rock";
    switch(computerChoice) {
        case "rock":
            outcome(computerChoice, choice, 0);
            break;
        case "paper":
            outcome(computerChoice, choice, -1);
            break;
        case "scissors":
            outcome(computerChoice, choice, 1);
            break;

    } 
}

function movePaper(computerChoice) {
    const choice = "paper";
    switch(computerChoice) {
        case "rock": 
            outcome(computerChoice, choice, 1);
            break;
        case "paper":
            outcome(computerChoice, choice, 0);
            break;
        case "scissors":
            outcome(computerChoice, choice, -1);
            break;
    }        
}

function moveScissors(computerChoice) {
    const choice = "scissors";
    switch(computerChoice) {
        case "rock": 
            outcome(computerChoice, choice, -1);
            break;
        case "paper":
            outcome(computerChoice, choice, 1);
            break;
        case "scissors":
            outcome(computerChoice, choice, 0);
            break;
    }  
}

function outcome(computerChoice, playerChoice, result) {
    const outcomeLog = document.createElement('p');

    if(result === 1) {
        computerScore.textContent--;
        outcomeLog.textContent = "You win!";
    } else if(result === -1) {
        humanScore.textContent--;
        outcomeLog.textContent = "You lose!";
    } else {
        outcomeLog.textContent = "It's a draw!";
    }
    outcomeLog.textContent += 
    ` You used ${playerChoice} and computer used ${computerChoice}`;
    divLogs.appendChild(outcomeLog);
}
