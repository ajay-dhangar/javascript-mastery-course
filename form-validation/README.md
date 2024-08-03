# Form Validation

## Description

This is an intermediate-level project where you will create a web form and implement client-side validation using HTML, CSS, and JavaScript. The form should include fields for a user's name, email, password, and a confirmation password. This project will help you understand form handling, validation techniques, and providing feedback to users.

## Project Structure

Your project should have the following structure:

```
form-validation/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the form.
- **style.css**: The CSS file that contains the styling for the form.
- **script.js**: The JavaScript file that contains the validation logic.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b form-validation-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── form-validation/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `form-validation` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Form Validation project by yourname"
    git push origin form-validation-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The form should include fields for a user's name, email, password, and a confirmation password.
- The name field should not be empty.
- The email field should contain a valid email address.
- The password field should be at least 8 characters long.
- The confirmation password field should match the password field.
- The form should provide visual feedback for validation errors.

## Hints

- Use JavaScript to validate form fields.
- Use CSS to style the form and provide visual feedback for validation errors.
- Ensure your JavaScript and CSS files are linked correctly in the HTML file.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <form id="registrationForm">
            <h2>Register</h2>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name">
                <small class="error-message" id="nameError"></small>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email">
                <small class="error-message" id="emailError"></small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <small class="error-message" id="passwordError"></small>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword">
                <small class="error-message" id="confirmPasswordError"></small>
            </div>
            <button type="submit">Register</button>
        </form>
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
    background: #f4f4f4;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.error-message {
    color: red;
    font-size: 0.875em;
    display: none;
}

input.invalid {
    border-color: red;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background: #007bff;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            showSuccess(name);
        }

        if (!isValidEmail(email.value.trim())) {
            showError(email, 'Email is not valid');
            isValid = false;
        } else {
            showSuccess(email);
        }

        if (password.value.trim().length < 8) {
            showError(password, 'Password must be at least 8 characters');
            isValid = false;
        } else {
            showSuccess(password);
        }

        if (confirmPassword.value.trim() !== password.value.trim()) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            showSuccess(confirmPassword);
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = message;
        errorMessage.style.display = 'block';
        input.classList.add('invalid');
    }

    function showSuccess(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = '';
        errorMessage.style.display = 'none';
        input.classList.remove('invalid');
    }

    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
});
```

When you open `index.html` in a web browser, it should display a form that provides visual feedback for validation errors and prevents form submission if any field is invalid.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── form-validation/
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