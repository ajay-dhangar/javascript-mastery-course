# Movie Search App

## Description

This is an intermediate-level project where you will create a Movie Search App using HTML, CSS, and JavaScript. The app will allow users to search for movies by title and display the results in a user-friendly interface. You will fetch movie data from a public API and render the information dynamically. This project will help you understand how to work with APIs, handle asynchronous operations, and enhance your UI/UX skills.

## Project Structure

Your project should have the following structure:

```
movie-search-app/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the app.
- **style.css**: The CSS file that contains the styling for the app.
- **script.js**: The JavaScript file that contains the logic for fetching and displaying movie data.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b movie-search-app-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── movie-search-app/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `movie-search-app` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Movie Search App project by yourname"
    git push origin movie-search-app-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The app should have a search input where users can type a movie title.
- The app should fetch movie data from a public API (e.g., [OMDb API](http://www.omdbapi.com/)).
- The app should display a list of movies based on the search query, including the movie title, year, and poster.
- The app should handle edge cases like empty searches and no results found.
- The app should be styled using CSS to ensure a responsive and attractive UI.

## Hints

- Use the `fetch` API or `axios` to make API requests.
- Handle asynchronous operations using `async/await`.
- Use CSS Flexbox or Grid to create a responsive layout.
- Consider adding loading states and error handling for better UX.

## API Key Setup

To use the OMDb API, you need an API key. Follow these steps to obtain one:

1. Go to [OMDb API](http://www.omdbapi.com/apikey.aspx) and sign up for a free API key.
2. Include your API key in the `script.js` file as part of the request URL.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files might look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Search App</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Movie Search App</h1>
        <input type="text" id="searchInput" placeholder="Search for a movie...">
        <button id="searchButton">Search</button>
        <div id="moviesContainer" class="movies-container"></div>
    </div>
</body>
</html>
```

**style.css**:
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    max-width: 600px;
    width: 100%;
}

input[type="text"] {
    padding: 10px;
    font-size: 1.2em;
    width: 70%;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    font-size: 1.2em;
    cursor: pointer;
}

.movies-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
}

.movie-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 200px;
    padding: 15px;
    text-align: center;
}

.movie-card img {
    max-width: 100%;
    border-radius: 4px;
}
```

**script.js**:
```javascript
document.getElementById('searchButton').addEventListener('click', async function() {
    const query = document.getElementById('searchInput').value;
    const apiKey = 'your_api_key_here'; // Replace with your OMDb API key
    const url = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            document.getElementById('moviesContainer').innerHTML = `<p>No results found for "${query}".</p>`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function displayMovies(movies) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        container.appendChild(movieCard);
    });
}
```

When you open `index.html` in a web browser, it should display a simple search interface where users can search for movies, and the results should be displayed as a list of movie cards.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── movie-search-app/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       └── script.js
```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Have fun coding and improving your JavaScript and API integration skills!

Happy coding! 🚀