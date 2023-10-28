
const startButton = document.querySelector('.startButton');
const optPaper = document.getElementById('paperDiv');
const optScissors = document.getElementById('scissorsDiv');
const optRock = document.getElementById('rockDiv');

let userChoice = '';

//Looks for selected option
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
let resultUser = document.getElementById('resultUser')
let resultComp = document.getElementById('resultComp')
//for default results display
resultUser.style.backgroundImage = 'url(/resources/Start.jpg)'
resultComp.style.backgroundImage = 'url(/resources/Start.jpg)'


// Game Logic
function playRound() {  

    const choices = ['Rock', 'Paper', 'Scissors'];
    //generate computer choice
    let compChoice = choices[Math.floor(Math.random()*choices.length)];

    if (userChoice == compChoice) {
        resultText.textContent = ' Its a tie!'
            if (userChoice == 'Paper') {
                resultUser.style.backgroundImage = 'url(/resources/Paper.jpg)'
                resultComp.style.backgroundImage = 'url(/resources/Paper.jpg)'
            }
            if (userChoice == 'Scissors') {
                resultUser.style.backgroundImage = 'url(/resources/Scissors.jpg)'
                resultComp.style.backgroundImage = 'url(/resources/Scissors.jpg)'
            }
            if (userChoice == 'Rock') {
                resultUser.style.backgroundImage = 'url(resources/Rock.jpg)'
                resultComp.style.backgroundImage = "url(./resources/Rock.jpg)"
            }
        return('Tie');
    }
    else if (userChoice == 'Rock' && compChoice == 'Paper') {
        resultText.textContent = ' You lose!'
        resultUser.style.backgroundImage = 'url(/resources/Rock.jpg)'
        resultComp.style.backgroundImage = 'url(/resources/Rock.jpg)'
        return('P2');
    }
    else if (userChoice == 'Paper' && compChoice == 'Rock') {
        resultText.textContent = ' You win!'
        resultUser.style.backgroundImage = 'url(/resources/Paper.jpg)'
        resultComp.style.backgroundImage = 'url(/resources/Rock.jpg)'
        return('User');
    }
    else if (userChoice == 'Scissors' && compChoice == 'Rock') {
        resultText.textContent = ' You lose!'
        resultUser.style.backgroundImage = 'url(/resources/Scissors.jpg)'
        resultComp.style.backgroundImage = 'url(/resources/Rock.jpg)'
        return('P2');
    }
    else if (userChoice == 'Scissors' && compChoice == 'Paper') {
        resultText.textContent = ' You win!'
        resultUser.style.backgroundImage = 'url(/resources/Scissors.jpg)'
        resultComp.style.backgroundImage = 'url(/resources/Paper.jpg)'
        return('User');
    }
    else if (userChoice == 'Rock' && compChoice == 'Scissors') {
        resultText.textContent = ' You win!'
        resultUser.style.backgroundImage = 'url(/resources/Rock.jpg)'
        resultComp.style.backgroundImage = 'url(/resources/Scissors.jpg)'
        return('User');
    }
    else if (userChoice == 'Paper' && compChoice == 'Scissors') {
        resultText.textContent = ' You lose!'
        resultUser.style.backgroundImage = 'url(/resources/Paper.jpg)'
        resultComp.style.backgroundImage = 'url(resources/Scissors.jpg)'
        return('P2');
        
    }
}

//let wins = 0;
//let losses = 0;

let resultText = document.getElementById('resultText');
resultText.textContent = 'First to 5 points wins.';

let scoreText = document.getElementById('scoreText');
scoreText.textContent = 'Have your pick';

let wins = 0;
let losses = 0;

//keeping score 
function keepScore() {
    
    let winner = playRound();
    
    if (winner == 'User') {
        wins = wins + 1;
    }
    else if (winner == 'P2') {
        losses = losses + 1;
    }
    scoreText.textContent = ('Wins: ' + wins + ' Losses: ' + losses);

    }

function playGame() {
    //resetting game after 5 points has been reached
    keepScore();

    if (wins == 5) {
        resultText.textContent = 'You win the Game!';
        wins = 0;
        losses = 0;
    }
    else if (losses == 5) {
        resultText.textContent = 'You lose the Game';
        wins = 0;
        losses = 0;
    }
    else {}
    }

startButton.addEventListener("click", playGame);


