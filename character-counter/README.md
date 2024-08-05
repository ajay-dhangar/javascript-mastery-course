# Character Counter

## Description

This project is an intermediate-level task where you will create a character counter using HTML, CSS, and JavaScript. The character counter should update in real-time as the user types in a text area, displaying the number of characters typed. This project will help you practice DOM manipulation, event handling, and basic styling.

## Project Structure

Your project should have the following structure:

```
character-counter/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the character counter.
- **style.css**: The CSS file that contains the styling for the character counter.
- **script.js**: The JavaScript file that contains the logic for counting characters.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b character-counter-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── character-counter/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `character-counter` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Character Counter project by yourname"
    git push origin character-counter-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The character counter should include a text area for user input and a display area showing the character count.
- The character count should update in real-time as the user types.
- The counter should be styled using CSS to look presentable.

## Hints

- Use event listeners to handle input events on the text area.
- Use JavaScript to update the character count display.
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
    <title>Character Counter</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <textarea id="text-area" rows="10" cols="50" placeholder="Type here..."></textarea>
        <div class="counter">
            Characters: <span id="char-count">0</span>
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
    background: #f0f0f0;
}

.container {
    text-align: center;
}

textarea {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.counter {
    margin-top: 10px;
    font-size: 1.2em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('text-area');
    const charCount = document.getElementById('char-count');

    textArea.addEventListener('input', function() {
        charCount.textContent = textArea.value.length;
    });
});
```

When you open `index.html` in a web browser, it should display a text area that updates the character count in real-time as the user types.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── character-counter/
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