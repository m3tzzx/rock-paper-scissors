console.log(game());






function getPlayChoice(){
    return prompt("Choose Rock, Paper, or Scissors").toLowerCase();
}

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


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "You are even! Play again"
    } else if((playerSelection === "rock" && computerSelection === "scissors") 
            || (playerSelection === "paper" && computerSelection === "rock") 
            || (playerSelection === "scissors" && computerSelection === "paper")){
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayChoice();
        const computerSelection = getComputerChoice();
        let playRoundResult = playRound(playerSelection, computerSelection);
        
        if (playRoundResult.includes("win")) {
            playerScore++
        } else if(playRoundResult.includes("lose")){
            computerScore++
        }
    }

    if(playerScore > computerScore) {
        return "You win the game";
    } else if(playerScore < computerScore) {
        return "You lose the game";
    } else {
        return "You are even";
    }
}
