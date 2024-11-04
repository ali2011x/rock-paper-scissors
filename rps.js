
function getHumanChoice () {
    calcHumanMove = prompt('Choose a move', 'Rock');
    humanMove = calcHumanMove.toLowerCase();
    return humanMove;
};

function getComputerMove() {
    let calccomputerMove = Math.random()
    let computerMove;
    if (calccomputerMove > 0 && calccomputerMove < 1/3) {
        computerMove = "rock"
    } else if (calccomputerMove > 1/3 && calccomputerMove < 2/3) {
        computerMove = "paper"
    } else if (calccomputerMove > 2/3 && calccomputerMove < 1) {
        computerMove = "scissors"
    } 
    return computerMove;
}


    let wins = 0;
    let losses = 0;
    let ties = 0;


function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerMove();
    let result;
    
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            result = 'Tie.';
            
        } else if (computerChoice === 'paper') {
            result = 'You lose.'
        } else if (computerChoice === 'scissors') {
            result = 'You win.'

        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'paper') {
            result = 'Tie.';
        } else if (computerChoice === 'scissors') {
            result = 'You lose.'
        } else if (computerChoice === 'rock') {
            result = 'You win.'
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'scissors') {
            result = 'Tie.';
        } else if (computerChoice === 'rock') {
            result = 'You lose.'
        } else if (computerChoice === 'paper') {
            result = 'You win.'

        }
    }

    function getOverallResult() {
        if (wins + losses + ties === 5) {
        if (wins > losses) {
            return 'The game is over. In the end, you won.';
        } else if (wins < losses) {
            return  'The game is over. In the end, you lost.';
        } else if (wins === losses) {
            return 'The game is over. In the end, you tied.';
        } 
    } else {
        return ('Keep playing!');
    }
} 


    console.log(result);
    updateScore(result);
    console.log(`Wins: ${wins}. Losses: ${losses}. Ties: ${ties}.`)
    console.log(getOverallResult());

    function updateScore (result) {
        if (result === 'You win.') {
            wins++;
        } else if (result === 'You lose.') {
            losses++;
        } else if (result === 'Tie.') {
            ties++;
        }
    }
   

    
    
}

   


document.querySelector('.js-play-button').addEventListener
('click', playGame);



