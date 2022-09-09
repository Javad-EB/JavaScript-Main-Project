
const game = () => {
    let playerS = 0;
    let computerS = 0;

    //Let's to StartGame
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        const gameItems = ['rock', 'paper','scissors'] //'Rock','Paper','Scissors'
        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Choice
                const computerSelection = gameItems[Math.floor(Math.random()* 3)];
                
                //Set Time out
                setTimeout(() => {
                    //Who is winner?
                    playRound(this.textContent, computerSelection);
                    gameEnd();
                    //updating image
                    playerHand.src =`./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerSelection}.png`;
                }, 2000);

                //animation
                playerHand.style.animation= "shakePlayer 2s ease"
                computerHand.style.animation= "shakeComputer 2s ease"

            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = playerS;
        computerScore.textContent = computerS;
    }

    const playRound = (playerSelection,computerSelection) => {
        const winner = document.querySelector('.winner');

        //Checking for a tie!
        if(playerSelection === computerSelection){
            winner.textContent = 'Equal! We do not have a winner!';
            return;
        }

        //Checking for rock
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                winner.textContent = 'Player win! Rock beats Scissors';
                playerS++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer win! Paper beats Rock';
                computerS++;
                updateScore();
                return;
            }
        }

        //Checking for paper
        if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
                winner.textContent = 'Computer win! Scissors beats Paper';
                computerS++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player win! Paper beats Rock';
                playerS++;
                updateScore();
                return;
            }
        }

        //Checking for scissors
        if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                winner.textContent = 'Player win! Scissors beats Paper';
                playerS++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer win! Rock beats Scissors';
                computerS++;
                updateScore();
                return;
            }
        }
    } 

    function gameEnd() {
        if(playerS === 5 || computerS === 5) {
            document.querySelector('.rock').disabled = true;
            document.querySelector('.paper').disabled = true;
            document.querySelector('.scissors').disabled = true;
            const winner = document.querySelector('.winner');
            if (playerS > computerS) {
                winner.textContent = 'You win the game!';
            } else if (computerS > playerS) {
                winner.textContent = 'Computer win the game!';
            }
        }
    }
    startGame();
    playMatch();
};

//Start the game function
game();
