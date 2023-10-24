const startButton = document.querySelector(".startButton");

const optPaper = document.getElementById('paperDiv');
const optScissors = document.getElementById('scissorsDiv');
const optRock = document.getElementById('rockDiv');

let userChoice = '';


optPaper.addEventListener('click', function() {
    optPaper.classList.add('selectedPaper');
    optScissors.classList.remove('selectedScissors');
    optRock.classList.remove('selectedRock');
    userChoice = 'Paper';
    
})
optScissors.addEventListener('click', function() {
    optScissors.classList.add('selectedScissors');
    optPaper.classList.remove('selectedPaper');
    optRock.classList.remove('selectedRock');
    userChoice = 'Scissors';
})
optRock.addEventListener('click', function() {
    optRock.classList.add('selectedRock');
    optScissors.classList.remove('selectedScissors');
    optPaper.classList.remove('selectedPaper');
    userChoice = 'Rock';
})



//Declare Choices
const choices = ['Rock', 'Paper', 'Scissors'];

// Game Logic
function playRound() {

    //let userChoice = getUserChoice();
    let compChoice = choices[Math.floor(Math.random()*choices.length)];

    if (userChoice == compChoice) {
        alert('Player2: ' + compChoice + '. Its a tie.');
        return('Tie');
    }
    else if (userChoice == 'Rock' && compChoice == 'Paper') {
        alert('Player2:' + compChoice + '. You lose!');
        return('P2');
    }
    else if (userChoice == 'Paper' && compChoice == 'Rock') {
        alert('Player2:' + compChoice + '. You win!');
        return('User');
    }
    else if (userChoice == 'Scissors' && compChoice == 'Rock') {
        alert('Player2:' + compChoice + '. You lose!');
        return('P2');
    }
    else if (userChoice == 'Scissors' && compChoice == 'Paper') {
        alert('Player2:' + compChoice + '. You win!');
        return('User');
    }
    else if (userChoice == 'Rock' && compChoice == 'Scissors') {
        alert('Player2:' + compChoice + '. You Win!');
        return('User');
    }
    else if (userChoice == 'Paper' && compChoice == 'Scissors') {
        alert('Player2:' + compChoice + '. You lose!');
        return('P2');
    }
}

/*
function keepScore() {

    winner = playRound();
    
    if (winner == 'User') {
        wins = wins + 1;
        alert('Wins:' + wins + 'Losses:' + losses);
    }
    else if (winner == 'P2') {
        losses = losses + 1;
        alert('Wins:' + wins + 'Losses:' + losses);
    }
    else if (winner == 'Tie') {
        losses = losses + 0;
    }
    }
//score count
let wins = 0;
let losses = 0;

function playGame() {
    for(i=0; i<20; i++) {
    
    keepScore();

    if (wins == 3) {
        alert('You win the game! Wins:' + wins + 'Losses:' + losses);
        break;
    }
    else if (losses == 3) {
        alert('You lose the game! Wins:' + wins + 'Losses:' + losses);
        break;
    }
    else if ( wins + losses == 5) {
        alert('Wins: ' + wins + 'Losses: ' + losses);
    }
    else
        {}
    }
}
*/
startButton.addEventListener("click", playRound);


