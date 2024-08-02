# Color Changer

## Description

This beginner-level project involves creating a simple color changer application using HTML, CSS, and JavaScript. The application allows users to click a button to change the background color of the webpage to a random color. This project will help you understand DOM manipulation, event handling, and working with random values in JavaScript.

## Project Structure

Your project should have the following structure:

```
color-changer/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the basic structure of the webpage.
- **style.css**: The CSS file that contains the styling for the webpage.
- **script.js**: The JavaScript file that contains the code to change the background color.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b color-changer-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── color-changer/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `color-changer` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Color Changer project by yourname"
    git push origin color-changer-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The webpage should have a button labeled "Change Color".
- When the button is clicked, the background color of the webpage should change to a random color.
- The color change should be visible and distinct.

## Hints

- Use the `Math.random()` function to generate random values.
- Use JavaScript to update the `style` property of the webpage's body.
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
    <title>Color Changer</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <button id="colorButton">Change Color</button>
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
    text-align: center;
}

button {
    padding: 10px 20px;
    font-size: 1.5em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
}

button:hover {
    background-color: #0056b3;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorButton');

    button.addEventListener('click', function() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
});
```

When you open `index.html` in a web browser and click the "Change Color" button, the background color of the webpage should change to a random color.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── color-changer/
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