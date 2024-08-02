# Tip Calculator

## Description

This is a beginner-to-intermediate-level project where you will create a tip calculator using HTML, CSS, and JavaScript. The calculator should allow users to input the bill amount, select a tip percentage, and calculate the total amount to be paid, including the tip. This project will help you understand form handling, user input validation, and dynamic DOM updates.

## Project Structure

Your project should have the following structure:

```
tip-calculator/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the tip calculator.
- **style.css**: The CSS file that contains the styling for the tip calculator.
- **script.js**: The JavaScript file that contains the logic for calculating the tip and updating the UI.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b tip-calculator-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── tip-calculator/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `tip-calculator` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Tip Calculator project by yourname"
    git push origin tip-calculator-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The calculator should have input fields for the bill amount and number of people.
- The calculator should have buttons or a dropdown to select the tip percentage.
- The calculator should display the calculated tip amount and total amount per person.
- The calculator should be styled using CSS to look presentable.

## Hints

- Use JavaScript to handle form submissions and calculate the tip.
- Use event listeners to handle user interactions.
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
    <title>Tip Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Tip Calculator</h1>
        <form id="tip-form">
            <label for="bill-amount">Bill Amount:</label>
            <input type="number" id="bill-amount" required>
            
            <label for="tip-percentage">Tip Percentage:</label>
            <select id="tip-percentage">
                <option value="0.1">10%</option>
                <option value="0.15">15%</option>
                <option value="0.2">20%</option>
                <option value="0.25">25%</option>
            </select>

            <label for="number-of-people">Number of People:</label>
            <input type="number" id="number-of-people" required>

            <button type="submit">Calculate</button>
        </form>
        <div class="results">
            <p>Tip Amount: $<span id="tip-amount">0.00</span></p>
            <p>Total Amount: $<span id="total-amount">0.00</span></p>
            <p>Amount per Person: $<span id="amount-per-person">0.00</span></p>
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

.container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
}

input, select, button {
    margin-top: 5px;
    padding: 10px;
    font-size: 1em;
}

button {
    margin-top: 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.results {
    margin-top: 20px;
    font-size: 1.2em;
}

.results p {
    margin: 5px 0;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const tipForm = document.getElementById('tip-form');
    const billAmountInput = document.getElementById('bill-amount');
    const tipPercentageInput = document.getElementById('tip-percentage');
    const numberOfPeopleInput = document.getElementById('number-of-people');
    const tipAmountOutput = document.getElementById('tip-amount');
    const totalAmountOutput = document.getElementById('total-amount');
    const amountPerPersonOutput = document.getElementById('amount-per-person');

    tipForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        const numberOfPeople = parseInt(numberOfPeopleInput.value);

        if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
            alert('Please enter valid values');
            return;
        }

        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;
        const amountPerPerson = totalAmount / numberOfPeople;

        tipAmountOutput.innerText = tipAmount.toFixed(2);
        totalAmountOutput.innerText = totalAmount.toFixed(2);
        amountPerPersonOutput.innerText = amountPerPerson.toFixed(2);
    });
});
```

When you open `index.html` in a web browser, it should display a tip calculator interface that allows users to input the bill amount, select a tip percentage, and calculate the total amount including the tip.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── tip-calculator/
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