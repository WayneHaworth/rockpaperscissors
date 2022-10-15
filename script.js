
var rock = { text: "rock", beats: 'scissors',loses: "paper" }
var paper = { text: 'paper', beats: 'rock', loses: "scissors" }
var scissors = { text: 'scissors', beats: 'paper', loses: "rock" }
var selectionOptions = [rock, paper, scissors];
var playerScore = 0;
var computerScore = 0;

function getChoice(arr) {
    var choice = arr[Math.floor(Math.random() * arr.length)];
    return choice.text;
}

function playSingleRound(playerSelection, computerSelectionString) {
    var computerChoice = computerSelectionString;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerChoice) {
        return results = "Tie! You both picked " + playerSelection;
    } else if (playerSelection == rock.text && computerChoice == rock.beats) {
        playerScore++;
        return results = "You win! Rock beats Scissors";
    } else if (playerSelection == paper.text && computerChoice == paper.beats) {
        playerScore++;
        return results = "You win! Paper beats Rock";
    } else if (playerSelection == scissors.text && computerChoice == scissors.beats) {
        playerScore++;
        return results = "You win! Scissors beats Paper";
    } else {
        computerScore++;
        return results = "You lose! " + computerChoice + " beats " + playerSelection;
    }
}

function game() {
    for (let i=0; i<5; i++) {
        var playerSelectionString = getChoice(selectionOptions)
        playSingleRound(playerSelectionString, getChoice(selectionOptions))
    }
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

game();