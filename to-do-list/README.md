# To-Do List

## Description

This is a beginner-to-intermediate-level project where you will create a simple to-do list application using HTML, CSS, and JavaScript. The to-do list should allow users to add, remove, and mark tasks as completed. This project will help you understand DOM manipulation, event handling, and basic state management in JavaScript.

## Project Structure

Your project should have the following structure:

```
to-do-list/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the to-do list.
- **style.css**: The CSS file that contains the styling for the to-do list.
- **script.js**: The JavaScript file that contains the logic for managing the to-do list items.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b to-do-list-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── to-do-list/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `to-do-list` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add To-Do List project by yourname"
    git push origin to-do-list-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The to-do list should have an input field to add new tasks.
- Each task should have a checkbox to mark it as completed.
- Each task should have a button to remove it from the list.
- The tasks should be styled differently when they are marked as completed.

## Hints

- Use event listeners to handle adding, removing, and marking tasks.
- Use JavaScript to create and update the DOM elements dynamically.
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
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="todo-container">
        <h1>To-Do List</h1>
        <input type="text" id="task-input" placeholder="Add a new task">
        <button id="add-task-btn">Add Task</button>
        <ul id="task-list"></ul>
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

.todo-container {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

input, button {
    padding: 10px;
    margin: 5px 0;
    width: calc(100% - 22px);
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    background: #28a745;
    color: #fff;
    border: none;
}

button:hover {
    background: #218838;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

li.completed {
    text-decoration: line-through;
    color: #999;
}

li button {
    background: #dc3545;
    border: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
}

li button:hover {
    background: #c82333;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
});
```

When you open `index.html` in a web browser, it should display a to-do list interface that allows users to add tasks, mark them as completed, and remove them from the list.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── to-do-list/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       └── script.js
```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Have fun coding and improving your JavaScript skills!

Happy coding! 🚀