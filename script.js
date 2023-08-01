// get choice from user
const playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
// get choice from computer randomly
const computerSelection = function() {
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
// if one of them win 
//          add one point to the winner and show the points