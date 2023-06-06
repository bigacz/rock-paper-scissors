const buttons = document.getElementById('buttons').childNodes;
const humanScore = document.getElementById('human');
const computerScore = document.getElementById('computer');
const divLogs = document.getElementById('logsbox')

const githubIcon = document.getElementById(`githubIcon`)
githubIcon.addEventListener(`mouseover`, e => {
    e.currentTarget.classList.add(`githubHover`);
})
githubIcon.addEventListener(`mouseleave`, e => {
    e.currentTarget.classList.remove(`githubHover`);
})


buttons.forEach(button => {
    button.addEventListener('click', playRound)
    button.addEventListener('mouseover', e => 
        e.currentTarget.classList.add(`buttonClicked`))
    button.addEventListener('mouseleave', e => 
        e.currentTarget.classList.remove(`buttonClicked`))
});

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
    const buttonsDiv = document.getElementById('buttons');

    const outcomeLog = document.createElement('p');
    outcomeLog.classList.add('logsPara');

    const restartButton = document.createElement('button');
    restartButton.textContent = "restart";
    restartButton.addEventListener('click', e => location.reload());

    const gameEndPara = document.createElement('h2');

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
    ` You used ${playerChoice} and computer used ${computerChoice}.`;
    divLogs.insertBefore(outcomeLog, divLogs.firstChild)

    if(divLogs.childElementCount > 7) divLogs.removeChild(divLogs.lastChild)
    if (computerScore.textContent < 1) {
        removeAllChildNodes(buttonsDiv);
        gameEndPara.textContent = "You Win!";
        gameEndPara.style.color = "limegreen";
        buttonsDiv.classList.add('endState');
        buttonsDiv.appendChild(gameEndPara);
        buttonsDiv.appendChild(restartButton);
    }
    if (humanScore.textContent < 1) {
        removeAllChildNodes(buttonsDiv);
        gameEndPara.textContent = "You Lose!";
        gameEndPara.style.color = "red";
        buttonsDiv.classList.add('endState');
        buttonsDiv.appendChild(gameEndPara);
        buttonsDiv.appendChild(restartButton);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
