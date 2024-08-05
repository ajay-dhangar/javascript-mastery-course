document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('colorButton');

  button.addEventListener('click', function() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
  });
});document.addEventListener('DOMContentLoaded', function() {
  const clock = document.getElementById('clock');

  function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      clock.innerText = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call to display clock immediately on load
});

