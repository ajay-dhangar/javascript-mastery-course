# Hello World Alert

## Description

This is a beginner-level project where you will create a simple JavaScript program that displays a "Hello World" alert box when the page is loaded. This project will help you understand the basics of JavaScript and how to interact with the browser's alert function.

## File Structure

Your project should have the following structure:

```
yourname/
├── index.html
└── script.js
```

- **index.html**: The HTML file that includes the basic structure of the webpage.
- **script.js**: The JavaScript file that contains the code to display the alert.

## How to Submit

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b hello-world-alert-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── hello-world-alert/
    │   └── yourname/
    │       ├── index.html
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html` and `script.js` files to the `yourname` folder of `hello-world-alert` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Hello World Alert project by yourname"
    git push origin hello-world-alert-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Hints

- Use the `alert` function in JavaScript to display a message.
- Make sure your JavaScript code is linked correctly in the HTML file.

## Demo

Here’s a simple example of what your `index.html` and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Alert</title>
    <script src="script.js" defer></script>
</head>
<body>
</body>
</html>
```

**script.js**:
```javascript
window.onload = function() {
    alert('Hello World');
};
```

When you open `index.html` in a web browser, it should display an alert box with the message "Hello World".

## Contributor's Folder Structure

Your submission should follow this structure:

    ```
    javascript-mastery-course/
    ├── hello-world-alert/
    │   └── yourname/
    │       ├── index.html
    │       └── script.js
    ```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Have fun coding and learning JavaScript!

Happy coding! 🚀