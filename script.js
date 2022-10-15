
var rock = {
    text: "Rock",
    beats: scissors,
    loses: paper
}

const playerSelection = eval("scissors");

console.log(playerSelection);





// function getComputerChoice() {
//     //randomly return either 'Rock', 'Paper' or 'Scissors'
//     const options = ['Rock', 'Paper', 'Scissors'];
//     return options[Math.floor(Math.random() * 3 )];
// }

// function playSingleRound(playerSelection, computerSelection) {
//     const computerChoice = computerSelection();
//     var result;
//     if (playerSelection === "Rock") {
//         if (computerChoice === "Rock") { return result = "DRAW" }
//         else if ( computerChoice === "Paper") { return result = "COMPUTER WINS" }
//         else if ( computerChoice === "Scissors") { return result = "PLAYER WINS" }
//     }

//     return result;
// }

// console.log(playSingleRound(playerSelection, getComputerChoice));