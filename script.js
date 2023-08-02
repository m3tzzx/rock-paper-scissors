// get choice from user
const playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
// get choice from computer randomly
const computerSelection = getComputerChoice();


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}


// start the game between the user and the computer
function playSingleRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "You are even! Play again"
    } else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
// if one of them win 
//          add one point to the winner and show the points