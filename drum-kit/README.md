# Drum Kit

## Description

This project involves creating a drum kit using HTML, CSS, and JavaScript. The drum kit should allow users to play different drum sounds by clicking on the corresponding drum pad or pressing the associated keyboard keys. This project will help you understand advanced DOM manipulation, event handling, and audio in web development.

## Project Structure

Your project should have the following structure:

```
drum-kit/
└── yourname/
    ├── index.html
    ├── style.css
    ├── script.js
    └── sounds/
        ├── kick.wav
        ├── snare.wav
        ├── tom1.wav
        ├── tom2.wav
        ├── tom3.wav
        └── tom4.wav
```

- **index.html**: The HTML file that includes the structure of the drum kit.
- **style.css**: The CSS file that contains the styling for the drum kit.
- **script.js**: The JavaScript file that contains the logic for playing the drum sounds.
- **sounds**: A directory containing sound files for each drum pad.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b drum-kit-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── drum-kit/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       ├── script.js
    │       └── sounds/
    │           ├── kick.wav
    │           ├── snare.wav
    │           ├── tom1.wav
    │           ├── tom2.wav
    │           ├── tom3.wav
    │           └── tom4.wav
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, `script.js`, and sound files to the `yourname` folder within the `drum-kit` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Drum Kit project by yourname"
    git push origin drum-kit-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The drum kit should have drum pads for different drum sounds (kick, snare, toms).
- The drum pads should be clickable, and pressing the associated keyboard keys should also play the corresponding sound.
- Each drum pad should play a different sound and should be visually styled using CSS.

## Hints

- Use the `audio` element in HTML or JavaScript to play sounds.
- Use event listeners to handle mouse clicks and key presses.
- Ensure your CSS file is linked correctly in the HTML file.
- Use data attributes to link keys to sound files.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drum Kit</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="drum-kit">
        <div class="pad" data-key="65" data-sound="sounds/kick.wav">A</div>
        <div class="pad" data-key="83" data-sound="sounds/snare.wav">S</div>
        <div class="pad" data-key="68" data-sound="sounds/tom1.wav">D</div>
        <div class="pad" data-key="70" data-sound="sounds/tom2.wav">F</div>
        <div class="pad" data-key="71" data-sound="sounds/tom3.wav">G</div>
        <div class="pad" data-key="72" data-sound="sounds/tom4.wav">H</div>
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
    background-color: #f5f5f5;
}

.drum-kit {
    display: flex;
}

.pad {
    background: #333;
    color: #fff;
    font-size: 2em;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    text-align: center;
}

.pad:active, .pad.playing {
    background: #555;
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const pads = document.querySelectorAll('.pad');

    function playSound(e) {
        const audio = new Audio(e.target.dataset.sound);
        audio.currentTime = 0;
        audio.play();
    }

    function playSoundByKey(e) {
        const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
        if (pad) {
            const audio = new Audio(pad.dataset.sound);
            audio.currentTime = 0;
            audio.play();
            pad.classList.add('playing');
            setTimeout(() => pad.classList.remove('playing'), 200);
        }
    }

    pads.forEach(pad => pad.addEventListener('click', playSound));
    window.addEventListener('keydown', playSoundByKey);
});
```

When you open `index.html` in a web browser, it should display a drum kit interface where users can click on drum pads or press the corresponding keys to play different drum sounds.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── drum-kit/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       └── sounds/
│           ├── kick.wav
│           ├── snare.wav
│           ├── tom1.wav
│           ├── tom2.wav
│           ├── tom3.wav
│           └── tom4.wav
```

## Notes

- Ensure your project follows the file structure guidelines.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Have fun coding and exploring the world of web development with JavaScript!

Happy coding! 🎶