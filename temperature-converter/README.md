# Temperature Converter

## Description

This is an intermediate-level project where you will create a temperature converter using HTML, CSS, and JavaScript. The converter should allow users to convert temperatures between Celsius, Fahrenheit, and Kelvin. This project will help you understand DOM manipulation, event handling, and basic mathematical calculations in JavaScript.

## Project Structure

Your project should have the following structure:

```
temperature-converter/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the temperature converter.
- **style.css**: The CSS file that contains the styling for the converter.
- **script.js**: The JavaScript file that contains the logic for the temperature conversion.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b temperature-converter-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── temperature-converter/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `temperature-converter` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Temperature Converter project by yourname"
    git push origin temperature-converter-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The converter should have input fields for Celsius, Fahrenheit, and Kelvin.
- Users should be able to input a value in any field and see the equivalent values in the other fields.
- The conversion should happen dynamically as the user types.
- The converter should be styled using CSS to look presentable.

## Hints

- Use event listeners to handle input changes.
- Use JavaScript to perform the temperature conversions.
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
    <title>Temperature Converter</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="converter">
        <h1>Temperature Converter</h1>
        <div class="input-group">
            <label for="celsius">Celsius</label>
            <input type="number" id="celsius" placeholder="Celsius">
        </div>
        <div class="input-group">
            <label for="fahrenheit">Fahrenheit</label>
            <input type="number" id="fahrenheit" placeholder="Fahrenheit">
        </div>
        <div class="input-group">
            <label for="kelvin">Kelvin</label>
            <input type="number" id="kelvin" placeholder="Kelvin">
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
    background-color: #f4f4f4;
}

.converter {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 1em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');

    celsiusInput.addEventListener('input', function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = (celsius * 9/5) + 32;
            kelvinInput.value = celsius + 273.15;
        } else {
            fahrenheitInput.value = '';
            kelvinInput.value = '';
        }
    });

    fahrenheitInput.addEventListener('input', function() {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = (fahrenheit - 32) * 5/9;
            kelvinInput.value = ((fahrenheit - 32) * 5/9) + 273.15;
        } else {
            celsiusInput.value = '';
            kelvinInput.value = '';
        }
    });

    kelvinInput.addEventListener('input', function() {
        const kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin)) {
            celsiusInput.value = kelvin - 273.15;
            fahrenheitInput.value = ((kelvin - 273.15) * 9/5) + 32;
        } else {
            celsiusInput.value = '';
            fahrenheitInput.value = '';
        }
    });
});
```

When you open `index.html` in a web browser, it should display a temperature converter interface that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── temperature-converter/
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