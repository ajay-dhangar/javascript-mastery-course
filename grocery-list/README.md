# Grocery List

## Description

This project involves creating a simple grocery list application using HTML, CSS, and JavaScript. Users will be able to add, remove, and mark items as purchased. This project will help you understand the basics of DOM manipulation, event handling, and local storage.

## Project Structure

Your project should have the following structure:

```
grocery-list/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the grocery list.
- **style.css**: The CSS file that contains the styling for the grocery list.
- **script.js**: The JavaScript file that contains the logic for adding, removing, and marking items as purchased.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b grocery-list-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── grocery-list/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `grocery-list` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Grocery List project by yourname"
    git push origin grocery-list-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- Users should be able to add items to the list.
- Users should be able to remove items from the list.
- Users should be able to mark items as purchased.
- The list should be styled using CSS to look presentable.
- The list should persist across page reloads using local storage.

## Hints

- Use event listeners to handle button clicks for adding, removing, and marking items.
- Use JavaScript to update the DOM and manage the list.
- Utilize local storage to save and load the list.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery List</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Grocery List</h1>
        <form id="item-form">
            <input type="text" id="item-input" placeholder="Enter a new item" required>
            <button type="submit">Add Item</button>
        </form>
        <ul id="item-list"></ul>
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
    background: #f9f9f9;
}

.container {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

form {
    display: flex;
    justify-content: space-between;
}

input[type="text"] {
    flex: 1;
    padding: 5px;
}

button {
    padding: 5px 10px;
    border: none;
    background: #5cb85c;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background: #4cae4c;
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

li.purchased {
    text-decoration: line-through;
    color: #888;
}

button.remove {
    background: #d9534f;
    color: #fff;
}

button.remove:hover {
    background: #c9302c;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');

    // Load items from local storage
    const savedItems = JSON.parse(localStorage.getItem('groceryItems')) || [];
    savedItems.forEach(item => addItemToDOM(item));

    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newItem = itemInput.value.trim();
        if (newItem) {
            addItemToDOM(newItem);
            saveItemToLocalStorage(newItem);
            itemInput.value = '';
        }
    });

    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove')) {
            const item = e.target.parentElement;
            removeItemFromLocalStorage(item.textContent.slice(0, -1));
            item.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('purchased');
            togglePurchasedInLocalStorage(e.target.textContent.slice(0, -1));
        }
    });

    function addItemToDOM(item) {
        const li = document.createElement('li');
        li.textContent = item;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('remove');
        li.appendChild(removeButton);
        itemList.appendChild(li);
    }

    function saveItemToLocalStorage(item) {
        const items = JSON.parse(localStorage.getItem('groceryItems')) || [];
        items.push(item);
        localStorage.setItem('groceryItems', JSON.stringify(items));
    }

    function removeItemFromLocalStorage(item) {
        let items = JSON.parse(localStorage.getItem('groceryItems')) || [];
        items = items.filter(i => i !== item);
        localStorage.setItem('groceryItems', JSON.stringify(items));
    }

    function togglePurchasedInLocalStorage(item) {
        let items = JSON.parse(localStorage.getItem('groceryItems')) || [];
        const index = items.indexOf(item);
        if (index > -1) {
            items[index] = items[index] + ' (purchased)';
        } else {
            items[index] = items[index].replace(' (purchased)', '');
        }
        localStorage.setItem('groceryItems', JSON.stringify(items));
    }
});
```

When you open `index.html` in a web browser, it should display a simple grocery list interface that allows users to add, remove, and mark items as purchased. The list should persist across page reloads.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── grocery-list/
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