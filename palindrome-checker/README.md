# Palindrome Checker

## Description

This is an intermediate-level project where you will create a JavaScript program to check if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). This project will help you understand string manipulation and regular expressions in JavaScript.

## Project Structure

Your project should have the following structure:

```
palindrome-checker/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the webpage.
- **style.css**: The CSS file that contains the styling for the webpage.
- **script.js**: The JavaScript file that contains the logic for checking palindromes.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b palindrome-checker-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── palindrome-checker/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `palindrome-checker` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Palindrome Checker project by yourname"
    git push origin palindrome-checker-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The page should have an input field to enter the string and a button to check if it's a palindrome.
- The result should be displayed on the page, indicating whether the input is a palindrome or not.
- The program should ignore spaces, punctuation, and capitalization when checking for palindromes.

## Hints

- Use JavaScript string methods to manipulate and compare the string.
- Use regular expressions to remove unwanted characters from the string.
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
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Palindrome Checker</h1>
        <input type="text" id="inputString" placeholder="Enter a string">
        <button id="checkButton">Check</button>
        <p id="result"></p>
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

.container {
    text-align: center;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
    padding: 10px;
    width: 80%;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

#result {
    margin-top: 20px;
    font-size: 1.2em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const inputString = document.getElementById('inputString');
    const checkButton = document.getElementById('checkButton');
    const result = document.getElementById('result');

    checkButton.addEventListener('click', function() {
        const str = inputString.value;
        if (isPalindrome(str)) {
            result.textContent = `"${str}" is a palindrome!`;
            result.style.color = 'green';
        } else {
            result.textContent = `"${str}" is not a palindrome.`;
            result.style.color = 'red';
        }
    });

    function isPalindrome(str) {
        const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    }
});
```

When you open `index.html` in a web browser, it should display an interface where users can input a string and check if it's a palindrome. The result should be displayed on the page.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── palindrome-checker/
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