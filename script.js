const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const stoneButton = document.getElementById('stone');
const computerChoiceText = document.getElementById('computer-choice-text');
const resultText = document.getElementById('result-text');

rockButton.addEventListener('click', () => {
    playGame('rock');
});

paperButton.addEventListener('click', () => {
    playGame('paper');
});

scissorsButton.addEventListener('click', () => {
    playGame('scissors');
});

stoneButton.addEventListener('click', () => {
    playGame('stone');
});

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors', 'stone'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    computerChoiceText.textContent = `Computer chose ${computerChoice}`;

    let result;
    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper') ||
               (userChoice === 'stone' && computerChoice === 'scissors')) {
        result = 'You win!';
    } else {
        result = 'Computer wins!';
    }

    resultText.textContent = result;
}