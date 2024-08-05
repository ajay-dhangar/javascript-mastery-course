# Currency Converter

## Description

This is an intermediate-level project where you will create a currency converter using HTML, CSS, and JavaScript. The currency converter will allow users to convert an amount from one currency to another using live exchange rates from an API. This project will help you understand how to work with APIs, handle asynchronous requests, and manage user input.

## Project Structure

Your project should have the following structure:

```
currency-converter/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the currency converter.
- **style.css**: The CSS file that contains the styling for the currency converter.
- **script.js**: The JavaScript file that contains the logic for fetching exchange rates and performing the conversion.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b currency-converter-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── currency-converter/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `currency-converter` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Currency Converter project by yourname"
    git push origin currency-converter-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The currency converter should have input fields for the amount, the source currency, and the target currency.
- The converter should fetch live exchange rates from a reliable API (e.g., [ExchangeRate-API](https://www.exchangerate-api.com/), [Open Exchange Rates](https://openexchangerates.org/), [Currency API](https://currencyapi.com/)).
- The converter should display the converted amount based on the live exchange rate.
- The converter should be styled using CSS to look presentable.

## Hints

- Use the `fetch` API or a library like Axios to make HTTP requests.
- Handle the API response asynchronously using `async` and `await` or `.then()` and `.catch()`.
- Ensure proper error handling for failed API requests.
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
    <title>Currency Converter</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="converter">
        <h1>Currency Converter</h1>
        <div class="input-group">
            <input type="number" id="amount" placeholder="Amount">
            <select id="fromCurrency"></select>
            <select id="toCurrency"></select>
        </div>
        <button id="convertBtn">Convert</button>
        <div id="result"></div>
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

.converter {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.input-group {
    margin-bottom: 20px;
}

input, select {
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#result {
    margin-top: 20px;
    font-size: 1.5em;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');
    const apiKey = 'your_api_key_here'; // Replace with your API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    async function populateCurrencyOptions() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const currencies = Object.keys(data.conversion_rates);
            
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                option1.value = option2.value = currency;
                option1.text = option2.text = currency;
                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            });
        } catch (error) {
            console.error('Error fetching currency data:', error);
            resultDiv.innerText = 'Error fetching currency data. Please try again later.';
        }
    }

    async function convertCurrency() {
        const amount = document.getElementById('amount').value;
        const from = fromCurrency.value;
        const to = toCurrency.value;
        
        if (!amount || !from || !to) {
            resultDiv.innerText = 'Please fill in all fields.';
            return;
        }

        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`);
            const data = await response.json();
            const rate = data.conversion_rate;
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
        } catch (error) {
            console.error('Error fetching conversion rate:', error);
            resultDiv.innerText = 'Error fetching conversion rate. Please try again later.';
        }
    }

    convertBtn.addEventListener('click', convertCurrency);

    populateCurrencyOptions();
});
```

When you open `index.html` in a web browser, it should display a currency converter interface that allows users to convert an amount from one currency to another using live exchange rates.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── currency-converter/
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