# Expense Tracker

## Description

This project involves creating an Expense Tracker application using HTML, CSS, and JavaScript. The app will allow users to add expenses, view a list of expenses, and see a running total of their expenses. This project is ideal for intermediate-level developers looking to practice DOM manipulation, form handling, and data storage using local storage.

## Project Structure

Your project should have the following structure:

```
expense-tracker/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that provides the structure of the Expense Tracker app.
- **style.css**: The CSS file that contains the styling for the Expense Tracker.
- **script.js**: The JavaScript file that contains the logic for adding, deleting, and displaying expenses.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b expense-tracker-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── expense-tracker/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `expense-tracker` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Expense Tracker project by yourname"
    git push origin expense-tracker-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The app should have an input field for the expense name and amount.
- There should be an "Add Expense" button that adds the expense to the list.
- The app should display a list of all added expenses.
- Each expense should have a "Delete" button to remove it from the list.
- The app should display the total amount of all expenses.
- The expenses should persist in the browser's local storage, so they are available even after refreshing the page.

## Hints

- Use `localStorage` to save the expenses so that they persist between page reloads.
- Use event listeners to handle the addition and deletion of expenses.
- Ensure your CSS file is linked correctly in the HTML file for styling.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expense Tracker</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Expense Tracker</h1>
        <form id="expense-form">
            <input type="text" id="expense-name" placeholder="Expense Name" required>
            <input type="number" id="expense-amount" placeholder="Amount" required>
            <button type="submit">Add Expense</button>
        </form>
        <ul id="expense-list"></ul>
        <div id="total-expense">
            Total: $<span id="total-amount">0</span>
        </div>
    </div>
</body>
</html>
```

**style.css**:
```css
body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

input[type="text"], input[type="number"] {
    padding: 10px;
    width: 45%;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 10px 15px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
}

li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    background: #f9f9f9;
}

#total-expense {
    font-size: 1.2em;
    text-align: center;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function updateExpenses() {
        expenseList.innerHTML = '';
        let total = 0;

        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${expense.name} - $${expense.amount} <button class="delete" data-index="${index}">X</button>`;
            expenseList.appendChild(li);
            total += parseFloat(expense.amount);
        });

        totalAmount.innerText = total.toFixed(2);
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('expense-name').value;
        const amount = document.getElementById('expense-amount').value;

        if (name && amount) {
            expenses.push({ name, amount });
            updateExpenses();
            form.reset();
        }
    });

    expenseList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            const index = e.target.getAttribute('data-index');
            expenses.splice(index, 1);
            updateExpenses();
        }
    });

    updateExpenses();
});
```

When you open `index.html` in a web browser, it should display a form where users can add expenses, see a list of added expenses, and view the total expenses. The data should persist even if the page is reloaded.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── expense-tracker/
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