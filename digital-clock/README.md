# Digital Clock

## Description

This is a beginner-level project where you will create a digital clock using HTML, CSS, and JavaScript. The clock will display the current time and update every second. This project will help you understand how to work with date and time in JavaScript, as well as how to manipulate the DOM and apply basic styling.

## Project Structure

Your project should have the following structure:

```
digital-clock/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the digital clock.
- **style.css**: The CSS file that contains the styling for the clock.
- **script.js**: The JavaScript file that contains the logic to display and update the time.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b digital-clock-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── digital-clock/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `digital-clock` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Digital Clock project by yourname"
    git push origin digital-clock-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The clock should display the current time in hours, minutes, and seconds.
- The time should update every second.
- The clock should be styled using CSS to look presentable.

## Hints

- Use the `setInterval` function in JavaScript to update the time every second.
- Use JavaScript to manipulate the DOM and update the displayed time.
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
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="clock" id="clock"></div>
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
    background: #222;
    color: #fff;
}

.clock {
    font-size: 5em;
    background: #333;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const clock = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display clock immediately on load
});
```

When you open `index.html` in a web browser, it should display a digital clock that shows the current time and updates every second.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── digital-clock/
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