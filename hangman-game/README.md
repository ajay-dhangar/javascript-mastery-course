# Hangman Game

## Description

This is an intermediate-level project where you will create a Hangman game using HTML, CSS, and JavaScript. The game will randomly select a word and allow the player to guess letters. The player has a limited number of incorrect guesses before the game ends. This project will help you understand more advanced DOM manipulation, event handling, and game logic implementation.

## Project Structure

Your project should have the following structure:

```
hangman-game/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the Hangman game.
- **style.css**: The CSS file that contains the styling for the Hangman game.
- **script.js**: The JavaScript file that contains the logic for the Hangman game.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b hangman-game-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── hangman-game/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `hangman-game` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Hangman Game project by yourname"
    git push origin hangman-game-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The game should randomly select a word from a predefined list of words.
- The game should display the word as a series of underscores, representing each letter.
- The player should be able to guess letters by clicking on buttons or pressing keys.
- Incorrect guesses should decrement the number of remaining attempts and visually update the Hangman figure.
- Correct guesses should reveal the letters in the word.
- The game should end when the player either guesses the word or runs out of attempts.
- The game should include a reset button to start a new game.

## Hints

- Use arrays and string manipulation to manage the word and guesses.
- Use event listeners to handle button clicks and key presses.
- Ensure your CSS file is linked correctly in the HTML file.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman Game</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="hangman-game">
        <h1>Hangman Game</h1>
        <div class="word" id="word"></div>
        <div class="letters" id="letters"></div>
        <div class="message" id="message"></div>
        <button id="reset">Reset Game</button>
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
    background-color: #f4f4f4;
}

.hangman-game {
    text-align: center;
}

.word {
    font-size: 2em;
    margin-bottom: 20px;
}

.letters {
    margin-bottom: 20px;
}

.letters button {
    font-size: 1.5em;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
}

.message {
    font-size: 1.2em;
    margin-top: 20px;
}

#reset {
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const wordElement = document.getElementById('word');
    const lettersElement = document.getElementById('letters');
    const messageElement = document.getElementById('message');
    const resetButton = document.getElementById('reset');
    
    const words = ['javascript', 'hangman', 'programming', 'development', 'coding'];
    let selectedWord = '';
    let attempts = 6;
    let guessedLetters = [];
    let wordDisplay = [];
    
    function initializeGame() {
        selectedWord = words[Math.floor(Math.random() * words.length)];
        attempts = 6;
        guessedLetters = [];
        wordDisplay = Array(selectedWord.length).fill('_');
        updateDisplay();
        messageElement.textContent = '';
    }
    
    function updateDisplay() {
        wordElement.textContent = wordDisplay.join(' ');
        lettersElement.innerHTML = '';
        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(97 + i);
            const button = document.createElement('button');
            button.textContent = letter;
            button.disabled = guessedLetters.includes(letter);
            button.addEventListener('click', () => handleGuess(letter));
            lettersElement.appendChild(button);
        }
    }
    
    function handleGuess(letter) {
        guessedLetters.push(letter);
        if (selectedWord.includes(letter)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === letter) {
                    wordDisplay[i] = letter;
                }
            }
            if (!wordDisplay.includes('_')) {
                messageElement.textContent = 'Congratulations! You won!';
            }
        } else {
            attempts--;
            if (attempts === 0) {
                messageElement.textContent = `Game Over! The word was ${selectedWord}`;
            }
        }
        updateDisplay();
    }
    
    resetButton.addEventListener('click', initializeGame);
    initializeGame();
});
```

When you open `index.html` in a web browser, it should display a Hangman game interface that allows users to guess letters and try to complete the word.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── hangman-game/
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