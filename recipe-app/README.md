# Recipe App

## Description

This is an intermediate-level project where you will create a dynamic Recipe App using HTML, CSS, and JavaScript. The app will allow users to search for recipes, view details of each recipe, and add their own recipes. This project will help you practice DOM manipulation, API interaction, event handling, and responsive design.

## Project Structure

Your project should have the following structure:

```
recipe-app/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the app.
- **style.css**: The CSS file that contains the styling for the app.
- **script.js**: The JavaScript file that contains the logic for fetching and displaying recipes.

## Features

- **Search Recipes**: Users should be able to search for recipes using a keyword.
- **View Recipe Details**: Clicking on a recipe should display the details, including ingredients and instructions.
- **Add Recipes**: Users should be able to add their own recipes, which will be displayed in the app.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b recipe-app-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── recipe-app/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `recipe-app` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Recipe App project by yourname"
    git push origin recipe-app-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- **Responsive Design**: The app should be responsive, providing a good user experience on both mobile and desktop devices.
- **Recipe API**: Use a public API like [TheMealDB](https://www.themealdb.com/api.php) to fetch recipes.
- **Search Functionality**: Implement a search bar that allows users to search for recipes by name.
- **Recipe Details**: Clicking on a recipe should display details including ingredients, instructions, and an image.
- **Add Recipes**: Implement a form that allows users to add their own recipes, which should be stored locally.

## Hints

- Use `fetch` or `axios` to interact with the recipe API.
- Use local storage to save user-added recipes.
- Ensure your CSS file is linked correctly in the HTML file.
- Consider using modern JavaScript features like `async/await` for API calls.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files might look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe App</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Recipe App</h1>
        <input type="text" id="search" placeholder="Search for recipes...">
    </header>
    <main id="recipe-list">
        <!-- Recipes will be displayed here -->
    </main>
    <section id="add-recipe">
        <h2>Add Your Recipe</h2>
        <form id="recipe-form">
            <input type="text" id="recipe-name" placeholder="Recipe Name" required>
            <textarea id="recipe-ingredients" placeholder="Ingredients" required></textarea>
            <textarea id="recipe-instructions" placeholder="Instructions" required></textarea>
            <button type="submit">Add Recipe</button>
        </form>
    </section>
</body>
</html>
```

**style.css**:
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f8f8f8;
}

header {
    background-color: #ff6f61;
    color: white;
    padding: 1rem;
    text-align: center;
}

#search {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 80%;
    max-width: 500px;
    border: none;
    border-radius: 5px;
}

main {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

.recipe-card {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease-in-out;
}

.recipe-card:hover {
    transform: scale(1.05);
}

.recipe-card img {
    width: 100%;
    height: auto;
}

.recipe-card h3 {
    margin: 0;
    padding: 1rem;
    background-color: #ff6f61;
    color: white;
}

#add-recipe {
    padding: 2rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 2rem 1rem;
    border-radius: 5px;
}

#add-recipe form {
    display: flex;
    flex-direction: column;
}

#add-recipe form input,
#add-recipe form textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#add-recipe form button {
    padding: 0.5rem;
    background-color: #ff6f61;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

#add-recipe form button:hover {
    background-color: #e65c55;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const recipeList = document.getElementById('recipe-list');
    const recipeForm = document.getElementById('recipe-form');

    // Fetch recipes from the API
    async function fetchRecipes(query = '') {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        return data.meals || [];
    }

    // Render recipes on the page
    function renderRecipes(recipes) {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                <h3>${recipe.strMeal}</h3>
            `;
            recipeCard.addEventListener('click', () => showRecipeDetails(recipe));
            recipeList.appendChild(recipeCard);
        });
    }

    // Show recipe details
    function showRecipeDetails(recipe) {
        alert(`Ingredients:\n${recipe.strIngredient1}\nInstructions:\n${recipe.strInstructions}`);
    }

    // Search for recipes
    searchInput.addEventListener('input', async () => {
        const query = searchInput.value;
        const recipes = await fetchRecipes(query);
        renderRecipes(recipes);
    });

    // Add new recipe
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('recipe-ingredients').value;
        const instructions = document.getElementById('recipe-instructions').value;

        const newRecipe = {
            strMeal: name,
            strIngredient1: ingredients,
            strInstructions: instructions,
            strMealThumb: 'https://via.placeholder.com/150',
        };

        renderRecipes([newRecipe, ...recipes]);
        recipeForm.reset();
    });

    // Initial fetch and render of recipes
    fetchRecipes().then(renderRecipes);
});
```

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── recipe-app/
│   └── yourname/
│       ├── index.html
│      

 ├── style.css
│       └── script.js
```

## Deadline

Please complete and submit your project within **2 weeks** from the date of assignment.