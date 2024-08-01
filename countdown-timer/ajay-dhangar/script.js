document.addEventListener('DOMContentLoaded', function() {
    let interval;
    let timeRemaining;
    const timeInput = document.getElementById('timeInput');
    const timeDisplay = document.getElementById('timeDisplay');
    const startButton = document.getElementById('startButton');
    const pauseButton = document.getElementById('pauseButton');
    const resetButton = document.getElementById('resetButton');

    function updateDisplay() {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        clearInterval(interval);
        timeRemaining = parseInt(timeInput.value, 10) || 0;
        if (timeRemaining > 0) {
            updateDisplay();
            interval = setInterval(() => {
                timeRemaining--;
                updateDisplay();
                if (timeRemaining <= 0) {
                    clearInterval(interval);
                    alert('Time is up!');
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(interval);
    }

    function resetTimer() {
        clearInterval(interval);
        timeRemaining = 0;
        timeDisplay.textContent = '00:00';
        timeInput.value = '';
    }

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);
});
