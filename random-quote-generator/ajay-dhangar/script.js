document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The best way to predict the future is to invent it. - Alan Kay",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "If you can dream it, you can achieve it. - Zig Ziglar",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
        "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "The best way to make your dreams come true is to wake up. - Paul Valery",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "The best way to predict the future is to create it. - Peter Drucker",
        "The only thing that will stop you from fulfilling your dreams is you. - Tom Bradley",
        "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
        "Life is a journey, and if you fall in love with the journey, you will be in love forever. - Peter Hagerty",
        "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
        "I'm a web developer, and I'm proud of it. - Ajay Dhangar",
        "Whole world is my home, and every human is my family. - Ajay Dhangar",
        "Failure is the key to success; each mistake teaches us something. - Morihei Ueshiba",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "The only way to get started is to quit talking and begin doing. - Walt Disney",
        "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
        "When you have a dream, you've got to grab it and never let go. - Carol Burnett",
        "What is coming is better than what is gone. - Arabic Proverb"
        
    ];

    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayRandomQuote() {
        quoteElement.innerText = getRandomQuote();
    }

    newQuoteButton.addEventListener('click', displayRandomQuote);

    // Display an initial quote
    displayRandomQuote();
});
