# Countdown Timer

## Description

This is a beginner-to-intermediate-level project where you will create a countdown timer using HTML, CSS, and JavaScript. The countdown timer will allow users to set a time duration and count down to zero, displaying the remaining time dynamically. This project will help you practice DOM manipulation, event handling, and working with JavaScript's `setInterval` function.

## Project Structure

Your project should have the following structure:

```
countdown-timer/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the countdown timer.
- **style.css**: The CSS file that contains the styling for the countdown timer.
- **script.js**: The JavaScript file that contains the logic for the countdown functionality.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b countdown-timer-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── countdown-timer/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `countdown-timer` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Countdown Timer project by yourname"
    git push origin countdown-timer-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The countdown timer should have an input field to set the time duration (in seconds or minutes).
- The timer should display the remaining time dynamically.
- The timer should have start, pause, and reset buttons to control the countdown.
- The countdown should stop at zero and display a message indicating that time is up.
- The countdown timer should be styled using CSS to look presentable.

## Hints

- Use `setInterval` to update the timer every second.
- Use DOM manipulation to update the displayed time.
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
    <title>Countdown Timer</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="timer-container">
        <h1>Countdown Timer</h1>
        <input type="number" id="timeInput" placeholder="Enter time in seconds">
        <div class="controls">
            <button id="startButton">Start</button>
            <button id="pauseButton">Pause</button>
            <button id="resetButton">Reset</button>
        </div>
        <div id="timeDisplay">00:00</div>
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
    background: #f0f0f0;
}

.timer-container {
    text-align: center;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
}

#timeInput {
    font-size: 1.2em;
    padding: 10px;
    width: 80%;
    margin-bottom: 20px;
}

.controls {
    margin-bottom: 20px;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: #007BFF;
    color: #fff;
}

button:hover {
    background: #0056b3;
}

button:disabled {
    background: #ccc;
    cursor: not-allowed;
}

#timeDisplay {
    font-size: 2em;
    margin-top: 20px;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    let interval;
    let timeRemaining;
    const timeInput = document.getElementById('timeInput');
    const timeDisplay = document.getElementById('timeDisplay');
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');

    function updateDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        clearInterval(interval);
        timeRemaining = parseInt(timeInput.value, 10) || 0;
        if (timeRemaining > 0) {
            updateDisplay();
            interval = setInterval(() => {
                timeRemaining--;
                updateDisplay();
                if (timeRemaining <= 0) {
                    clearInterval(interval);
                    alert('Time is up!');
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(interval);
    }

    function resetTimer() {
        clearInterval(interval);
        timeRemaining = 0;
        timeDisplay.textContent = '00:00';
        timeInput.value = '';
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
});
```

When you open `index.html` in a web browser, it should display a countdown timer interface that allows users to set a time duration and start, pause, and reset the countdown.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── countdown-timer/
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