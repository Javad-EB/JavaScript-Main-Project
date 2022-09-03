const gameItems = ['rock', 'paper','scissors'] //'Rock','Paper','Scissors'
let playerScore = 0;
let computerScore = 0;
let playerWin = false;
let computerWin = false;

//random number between (0,3) to select on of 'Rock','Paper','Scissors' for computer choose
function computerPlay(){
    const rnd = gameItems[Math.floor(Math.random()* 3)];
    return rnd;
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection === computerSelection){
        console.log("Equal! We do not have a winner!");
        playerWin = false;
        computerWin = false;
    }
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("You win! Rock beats Scissors");
            playerWin = true;
            computerWin = false;
        }
        else if (computerSelection === 'paper') {
            console.log("Computer win! Paper beats Rock");
            playerWin = false;
            computerWin = true;
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            console.log("Computer win! Scissors beats Paper");
            playerWin = false;
            computerWin = true;
        }
        else if (computerSelection === 'rock') {
            console.log("You win! Paper beats Rock");
            playerWin = true;
            computerWin = false;
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log("You win! Scissors beats Paper");
            playerWin = true;
            computerWin = false;
        }
        else if (computerSelection === 'rock') {
            console.log("Computer win! Rock beats Scissors");
            playerWin = false;
            computerWin = true;
        }
    }
} 
function whoIsWinner(playerWin,computerWin){
    if (playerWin) {
        playerScore ++;
        console.log(`Player Score is : ${playerScore} <--> Computer Score is : ${computerScore} `);
    }
    else if (computerWin) {
        computerScore ++;
        console.log(`Player Score is : ${playerScore} <--> Computer Score is : ${computerScore} `);
    }
    else {
        console.log(`Player Score is : ${playerScore} <--> Computer Score is : ${computerScore} `);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerS = prompt("Please choose between paper, scissors, and rock!");
        playerSelection = playerS.toLowerCase();
        if (gameItems.includes(playerSelection) === false) {
            alert("The input is incorrec! You must select on of 'Rock','Paper','Scissors'");
            i--;
        } else{
            const computerSelection = computerPlay();
            playRound(playerSelection,computerSelection);
            whoIsWinner(playerWin,computerWin);
        }  
    }
    if (playerScore > computerScore) {
        return `Player is winner! --> Player Score is ${playerScore} vs Computer Score is : ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `Computer is winner! --> Computer Score is : ${computerScore} vs Player Score is ${playerScore}`;
    } else {
        return `Game is DRAW!!! --> Computer Score is : ${computerScore} vs Player Score is ${playerScore}`;
    }
}

console.log(game());


