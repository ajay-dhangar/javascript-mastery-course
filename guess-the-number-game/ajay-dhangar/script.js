document.addEventListener('DOMContentLoaded', function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;

    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const restartButton = document.getElementById('restart-button');

    attemptsDisplay.innerText = attempts;

    guessButton.addEventListener('click', function() {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.innerText = 'Please enter a valid number between 1 and 100.';
            return;
        }

        attempts--;

        if (guess === randomNumber) {
            message.innerText = `Congratulations! You guessed the number ${randomNumber}!`;
            endGame();
        } else if (guess < randomNumber) {
            message.innerText = 'Too low!';
        } else {
            message.innerText = 'Too high!';
        }

        attemptsDisplay.innerText = attempts;

        if (attempts === 0) {
            message.innerText = `Game over! The correct number was ${randomNumber}.`;
            endGame();
        }
    });

    restartButton.addEventListener('click', function() {
        attempts = 10;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptsDisplay.innerText = attempts;
        message.innerText = '';
        guessInput.value = '';
        restartButton.style.display = 'none';
        guessButton.style.display = 'inline-block';
        guessInput.style.display = 'inline-block';
    });

    function endGame() {
        guessButton.style.display = 'none';
        guessInput.style.display = 'none';
        restartButton.style.display = 'inline-block';
    }
});
