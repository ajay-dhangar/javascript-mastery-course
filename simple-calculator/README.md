# Simple Calculator

## Description

This is a beginner-to-intermediate-level project where you will create a simple calculator using HTML, CSS, and JavaScript. The calculator should perform basic arithmetic operations like addition, subtraction, multiplication, and division. This project will help you understand the fundamentals of DOM manipulation, event handling, and basic styling.

## Project Structure

Your project should have the following structure:

```
simple-calculator/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the calculator.
- **style.css**: The CSS file that contains the styling for the calculator.
- **script.js**: The JavaScript file that contains the logic for the calculator's operations.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b simple-calculator-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── simple-calculator/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `simple-calculator` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Simple Calculator project by yourname"
    git push origin simple-calculator-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The calculator should have a display area to show the input and results.
- The calculator should have buttons for digits 0-9, operations (+, -, *, /), a clear (C) button, and an equals (=) button.
- The calculator should handle basic arithmetic operations.
- The calculator should be styled using CSS to look presentable.

## Hints

- Use event listeners to handle button clicks.
- Use JavaScript to update the display and perform calculations.
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
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display"></div>
        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn" data-value="/">/</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn" data-value="*">*</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn" data-value="-">-</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn" data-value="C">C</button>
            <button class="btn" data-value="+">+</button>
            <button class="btn" data-value="=">=</button>
        </div>
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
}

.calculator {
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display {
    background: #222;
    color: #fff;
    padding: 20px;
    font-size: 2em;
    text-align: right;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.btn {
    padding: 20px;
    font-size: 1.5em;
    border: 1px solid #ccc;
    background: #f9f9f9;
    cursor: pointer;
}

.btn:hover {
    background: #eee;
}

.btn:active {
    background: #ddd;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;
            if (value === 'C') {
                display.innerText = '';
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                display.innerText += value;
            }
        });
    });
});
```

When you open `index.html` in a web browser, it should display a simple calculator interface that allows users to perform basic arithmetic operations.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── simple-calculator/
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