# Quiz App

## Description

This is an intermediate-level project where you will create a simple quiz application using HTML, CSS, and JavaScript. The quiz app will present multiple-choice questions to the user, calculate their score based on the answers they select, and display the results at the end. This project will help you understand the concepts of DOM manipulation, event handling, and basic logic implementation in JavaScript.

## Project Structure

Your project should have the following structure:

```
quiz-app/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the quiz app.
- **style.css**: The CSS file that contains the styling for the quiz app.
- **script.js**: The JavaScript file that contains the logic for the quiz, including question handling, scoring, and result display.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b quiz-app-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── quiz-app/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `quiz-app` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Quiz App project by yourname"
    git push origin quiz-app-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The quiz app should display a series of multiple-choice questions.
- Users should be able to select an answer and move to the next question.
- At the end of the quiz, the user's score should be displayed based on the number of correct answers.
- The quiz should be responsive and styled using CSS to be visually appealing.

## Hints

- Use arrays or objects to store the quiz questions and answers.
- Implement event listeners to handle user interactions, such as selecting an answer and submitting the quiz.
- Update the DOM dynamically to show questions, track the score, and display results.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="quiz-container">
        <div id="quiz"></div>
        <button id="submit">Submit Quiz</button>
        <div id="result"></div>
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

.quiz-container {
    width: 300px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#quiz {
    margin-bottom: 20px;
}

#quiz div {
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

#result {
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
}
```

**script.js**:
```javascript
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "The iPhone was created by which company?",
        a: "Apple",
        b: "Intel",
        c: "Amazon",
        d: "Microsoft",
        correct: "a"
    },
    {
        question: "How many Harry Potter books are there?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quiz.innerHTML = `
        <h3>${currentQuizData.question}</h3>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer) {
        if (answer.value === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = '';
            result.innerHTML = `You scored ${score} out of ${quizData.length}`;
        }
    }
});
```

When you open `index.html` in a web browser, it should display a quiz interface where users can answer questions, submit the quiz, and see their score.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── quiz-app/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       └── script.js
```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Test your quiz thoroughly to ensure all functionality works as expected.
- Have fun coding and enhancing your JavaScript skills!

Happy coding! 🚀