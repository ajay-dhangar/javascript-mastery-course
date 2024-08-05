# Weather App

## Description

This is an intermediate-level project where you will create a weather app using HTML, CSS, and JavaScript. The app should fetch weather data from an external API and display it to the user based on their search query. This project will help you understand API integration, asynchronous JavaScript (using `fetch` or `axios`), and dynamic DOM manipulation.

## Project Structure

Your project should have the following structure:

```
weather-app/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the app.
- **style.css**: The CSS file that contains the styling for the app.
- **script.js**: The JavaScript file that contains the logic for fetching weather data and updating the DOM.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b weather-app-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── weather-app/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `weather-app` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Weather App project by yourname"
    git push origin weather-app-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The app should have an input field for the user to enter a city name.
- The app should fetch and display the current weather for the entered city.
- The displayed weather information should include temperature, weather description, humidity, and wind speed.
- The app should handle errors gracefully, such as when the city is not found.
- The app should be styled using CSS to look presentable.

## Hints

- Use the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.
- You will need to sign up for an API key from OpenWeatherMap.
- Use `fetch` or `axios` to make asynchronous requests to the API.
- Ensure your JavaScript code is linked correctly in the HTML file.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="weather-app">
        <h1>Weather App</h1>
        <input type="text" id="cityInput" placeholder="Enter city name">
        <button id="searchButton">Search</button>
        <div id="weatherDisplay"></div>
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

.weather-app {
    text-align: center;
}

#cityInput {
    padding: 10px;
    font-size: 1em;
}

#searchButton {
    padding: 10px;
    font-size: 1em;
    margin-left: 10px;
    cursor: pointer;
}

#weatherDisplay {
    margin-top: 20px;
    font-size: 1.2em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const weatherDisplay = document.getElementById('weatherDisplay');

    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    async function fetchWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            weatherDisplay.innerHTML = `<p>${error.message}</p>`;
        }
    }

    function displayWeather(data) {
        const { name, main, weather, wind } = data;
        weatherDisplay.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;
    }
});
```

When you open `index.html` in a web browser, it should display a simple interface allowing users to enter a city name and fetch the current weather data for that city.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── weather-app/
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