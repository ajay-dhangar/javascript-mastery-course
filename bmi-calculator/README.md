# BMI Calculator

## Description

This is an intermediate-level project where you will create a Body Mass Index (BMI) calculator using HTML, CSS, and JavaScript. The BMI calculator should allow users to input their weight and height and then calculate and display their BMI along with a category (e.g., Underweight, Normal weight, Overweight, Obesity). This project will help you understand form handling, input validation, and conditional logic in JavaScript.

## Project Structure

Your project should have the following structure:

```
bmi-calculator/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the BMI calculator form.
- **style.css**: The CSS file that contains the styling for the BMI calculator.
- **script.js**: The JavaScript file that contains the logic for calculating and displaying the BMI.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b bmi-calculator-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── bmi-calculator/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `bmi-calculator` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add BMI Calculator project by yourname"
    git push origin bmi-calculator-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The calculator should have input fields for weight (in kg) and height (in cm).
- The calculator should have a button to calculate the BMI.
- The result should display the BMI value and the corresponding category (Underweight, Normal weight, Overweight, Obesity).
- The calculator should be styled using CSS to look presentable.

## Hints

- Use the formula `BMI = weight / (height/100 * height/100)` to calculate the BMI.
- Use event listeners to handle form submissions and button clicks.
- Use JavaScript to update the display with the BMI value and category.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="bmi-calculator">
        <h1>BMI Calculator</h1>
        <form id="bmi-form">
            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" required>
            <label for="height">Height (cm):</label>
            <input type="number" id="height" required>
            <button type="submit">Calculate BMI</button>
        </form>
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
}

.bmi-calculator {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    width: 100%;
}

h1 {
    text-align: center;
}

label {
    display: block;
    margin: 10px 0 5px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 20px;
    text-align: center;
    font-size: 1.2em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('result');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (isNaN(weight) || isNaN(height)) {
            resultDiv.textContent = 'Please enter valid numbers for weight and height.';
            return;
        }

        const bmi = weight / ((height / 100) ** 2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    });
});
```

When you open `index.html` in a web browser, it should display a BMI calculator that allows users to input their weight and height, and calculate and display their BMI along with the corresponding category.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── bmi-calculator/
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