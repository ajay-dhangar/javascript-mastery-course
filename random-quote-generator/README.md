# Random Quote Generator

## Description

This project involves creating a random quote generator using HTML, CSS, and JavaScript. The application should display a random quote each time a button is clicked. This project will help you understand how to work with arrays, manipulate the DOM, and add event listeners in JavaScript.

## Project Structure

Your project should have the following structure:

```
random-quote-generator/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the quote generator.
- **style.css**: The CSS file that contains the styling for the quote generator.
- **script.js**: The JavaScript file that contains the logic for generating and displaying random quotes.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b random-quote-generator-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── random-quote-generator/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `random-quote-generator` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Random Quote Generator project by yourname"
    git push origin random-quote-generator-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The quote generator should have an area to display the quote.
- The quote generator should have a button that, when clicked, displays a new random quote.
- The quotes should be stored in an array within the `script.js` file.
- The application should be styled using CSS to look visually appealing.

## Hints

- Use JavaScript to select a random quote from the array and display it in the HTML.
- Use event listeners to handle the button click event.
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
    <title>Random Quote Generator</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="quote-container">
        <div id="quote" class="quote"></div>
        <button id="new-quote" class="button">New Quote</button>
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
    background: #f5f5f5;
}

.quote-container {
    text-align: center;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.quote {
    font-size: 1.5em;
    margin-bottom: 20px;
}

.button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background: #0056b3;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The best way to get started is to quit talking and begin doing. – Walt Disney",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
        "Don’t let yesterday take up too much of today. – Will Rogers",
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi"
    ];

    const quoteDisplay = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    function displayQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.innerText = quotes[randomIndex];
    }

    newQuoteButton.addEventListener('click', displayQuote);

    // Display a quote initially
    displayQuote();
});
```

When you open `index.html` in a web browser, it should display a random quote and provide a button to generate a new random quote.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── random-quote-generator/
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