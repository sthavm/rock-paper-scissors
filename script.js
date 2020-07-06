let playerScore;
let computerScore;
let roundsCompleted;

function initialize(){
    playerScore = 0;
    computerScore = 0;
    roundsCompleted = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playerChoiceBox.textContent = "";
    computerChoiceBox.textContent = "";
    gameResultBox.textContent = "";
    roundResultBox.textContent = "";
    playerScoreBox.textContent = "";
    computerScoreBox.textContent = "";

}
//Randomly plays a move
function computerPlay(){
    let roll = getRandom(3)
    switch (roll) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}
function playRound(playerSelection, computerSelection){
    playerChoiceBox.textContent = `You threw: ${playerSelection}`;
    computerChoiceBox.textContent = `The computer threw: ${computerSelection}`;
    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            roundsCompleted++;
            roundResultBox.textContent = "Nobody wins.";
        } else if (computerSelection === "paper"){
            computerScore++;
            roundsCompleted++;
            roundResultBox.textContent = "You lose! Paper beats rock.";
        } else {
            playerScore++;
            roundsCompleted++;
            roundResultBox.textContent = "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            playerScore++;
            roundsCompleted++;
            roundResultBox.textContent = "You win! Paper beats rock.";
        } else if (computerSelection === "paper"){
            roundsCompleted++;
            roundResultBox.textContent = "Nobody wins.";
        } else {
            computerScore++;
            roundsCompleted++;
            roundResultBox.textContent = "You lose! Scissors beats paper.";
        }
    } else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerScore++;
            roundsCompleted++;
            roundResultBox.textContent = "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper"){
            playerScore++;
            roundsCompleted++;
            roundResultBox.textContent = "You win! Scissors beats paper.";
        } else {
            roundsCompleted++;
            roundResultBox.textContent = "Nobody wins.";
        }
    }
}
function getRandom(num){
    let randomNumber = Math.floor(Math.random()*num)
    return randomNumber
}
function checkFinished(){
    if (roundsCompleted === 5){
        return true;
    } else {
        return false;
    }
}
function endIfFinished(){
    if (checkFinished()){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        if (playerScore === computerScore){
            gameResultBox.textContent = "The game was a draw";
        } else if (playerScore > computerScore){
            gameResultBox.textContent = "You won!";
        } else {
            gameResultBox.textContent = "You lost :(";
        }
    }
}
const gameResultBox = document.querySelector('#game-result');
const playerScoreBox = document.querySelector('#player-score');
const computerScoreBox = document.querySelector('#computer-score');
const roundResultBox = document.querySelector('#round-result');

const playerChoiceBox = document.querySelector('#player-choice');
const computerChoiceBox = document.querySelector('#computer-choice');

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => playRound("rock", computerPlay()));
rockButton.addEventListener('click', () => endIfFinished());

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => playRound("paper", computerPlay()));
paperButton.addEventListener('click', () => endIfFinished());

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => playRound("scissors", computerPlay()));
scissorsButton.addEventListener('click', () => endIfFinished());

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => initialize());
initialize();