# Guess the Number Game

## Description

This is a beginner-to-intermediate-level project where you will create a "Guess the Number" game using HTML, CSS, and JavaScript. The game generates a random number, and the player has to guess the number within a certain number of attempts. This project will help you practice DOM manipulation, event handling, and logic implementation in JavaScript.

## Project Structure

Your project should have the following structure:

```
guess-the-number-game/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the game.
- **style.css**: The CSS file that contains the styling for the game.
- **script.js**: The JavaScript file that contains the logic for the game.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b guess-the-number-game-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── guess-the-number-game/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `guess-the-number-game` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Guess the Number Game project by yourname"
    git push origin guess-the-number-game-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The game should generate a random number between 1 and 100.
- The player should input their guess and receive feedback whether their guess is too high, too low, or correct.
- The player should have a limited number of attempts (e.g., 10 attempts).
- The game should display the number of remaining attempts.
- When the player guesses the number or runs out of attempts, the game should provide an option to restart.

## Hints

- Use `Math.random()` and `Math.floor()` to generate the random number.
- Use event listeners to handle player input and button clicks.
- Use JavaScript to update the DOM with feedback messages and remaining attempts.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the Number Game</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="game-container">
        <h1>Guess the Number</h1>
        <p>Enter a number between 1 and 100:</p>
        <input type="number" id="guess-input" min="1" max="100">
        <button id="guess-button">Guess</button>
        <p id="message"></p>
        <p>Remaining attempts: <span id="attempts"></span></p>
        <button id="restart-button" style="display:none;">Restart</button>
    </div>
</body>
</html>
```

**style.css**:
```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.game-container {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

input, button {
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
}

button {
    cursor: pointer;
}

button:hover {
    background-color: #eee;
}

#message {
    font-weight: bold;
    color: #333;
}
```

**script.js**:
```javascript
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
```

When you open `index.html` in a web browser, it should display the "Guess the Number" game interface, allowing users to play the game by entering guesses and receiving feedback.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── guess-the-number-game/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       └── script.js
```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Have fun coding and enhancing your JavaScript skills!

Happy coding! 🚀