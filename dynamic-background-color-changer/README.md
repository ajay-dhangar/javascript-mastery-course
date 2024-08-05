# Dynamic Background Color Changer

## Description

This project involves creating a dynamic background color changer using HTML, CSS, and JavaScript. The user will be able to change the background color of the webpage by clicking a button. This project will help you understand the basics of DOM manipulation, event handling, and working with colors in JavaScript.

## Project Structure

Your project should have the following structure:

```
dynamic-background-color-changer/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the webpage.
- **style.css**: The CSS file that contains the styling for the webpage.
- **script.js**: The JavaScript file that contains the logic for changing the background color.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b dynamic-background-color-changer-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── dynamic-background-color-changer/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `dynamic-background-color-changer` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Dynamic Background Color Changer project by yourname"
    git push origin dynamic-background-color-changer-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The webpage should have a button that, when clicked, changes the background color to a random color.
- The color should be displayed in hexadecimal format on the button or somewhere on the page.
- The page should be styled to be visually appealing.

## Hints

- Use JavaScript to generate random hexadecimal color codes.
- Use event listeners to handle button clicks.
- Update the background color of the webpage dynamically using JavaScript.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Background Color Changer</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <button id="colorButton">Change Background Color</button>
        <p id="colorCode">Current Color: #FFFFFF</p>
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
    transition: background-color 0.5s ease;
}

.container {
    text-align: center;
}

#colorButton {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#colorButton:hover {
    background-color: #ddd;
}

#colorCode {
    margin-top: 10px;
    font-size: 1.2em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const colorCode = document.getElementById('colorCode');

    colorButton.addEventListener('click', () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        colorCode.textContent = `Current Color: ${newColor}`;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
```

When you open `index.html` in a web browser, it should display a button that changes the background color to a random color when clicked, with the current color displayed on the page.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── dynamic-background-color-changer/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       └── script.js
```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Have fun coding and learning JavaScript!

Happy coding! 🚀