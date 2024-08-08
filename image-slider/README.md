# Image Slider

## Description

This is an intermediate-level project where you will create an image slider using HTML, CSS, and JavaScript. The image slider should automatically transition between images and allow users to manually navigate through the images using navigation buttons. This project will enhance your skills in DOM manipulation, event handling, and working with intervals in JavaScript.

## Project Structure

Your project should have the following structure:

```
image-slider/
└── yourname/
    ├── index.html
    ├── style.css
    └── script.js
```

- **index.html**: The HTML file that includes the structure of the image slider.
- **style.css**: The CSS file that contains the styling for the image slider.
- **script.js**: The JavaScript file that contains the logic for the image slider’s functionality.

## Submission Instructions

1. **Fork the Repository**: Start by forking this repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/javascript-mastery-course.git
    ```

3. **Create a New Branch**: Create a new branch for your project using:
    ```bash
    git checkout -b image-slider-yourname
    ```

4. **Create Your Project Folder**: Inside the `projects` directory, create a new folder with your name:
    ```
    javascript-mastery-course/
    ├── image-slider/
    │   └── yourname/
    │       ├── index.html
    │       ├── style.css
    │       └── script.js
    ```

5. **Add Your Files**: Add your `index.html`, `style.css`, and `script.js` files to the `yourname` folder within the `image-slider` project.

6. **Commit and Push**: Commit your changes and push them to your forked repository:
    ```bash
    git add .
    git commit -m "Add Image Slider project by yourname"
    git push origin image-slider-yourname
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your branch.

## Requirements

- The image slider should automatically transition between images every few seconds.
- The slider should include "Previous" and "Next" buttons for manual navigation.
- The slider should be responsive and adapt to different screen sizes.
- Optionally, you can include indicators (dots) to show the current slide.

## Hints

- Use JavaScript `setInterval` to create the automatic transition between images.
- Use event listeners to handle the "Previous" and "Next" button clicks.
- Use CSS for smooth transitions between images.

## Demo

Here’s a simple example of what your `index.html`, `style.css`, and `script.js` files should look like:

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="slider">
        <div class="slides">
            <img src="image1.jpg" class="slide" alt="Image 1">
            <img src="image2.jpg" class="slide" alt="Image 2">
            <img src="image3.jpg" class="slide" alt="Image 3">
        </div>
        <button class="prev">&#10094;</button>
        <button class="next">&#10095;</button>
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
    background-color: #f0f0f0;
}

.slider {
    position: relative;
    width: 80%;
    max-width: 600px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    width: 100%;
    border: none;
    display: block;
}

.prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
```

**script.js**:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    const slideWidth = slideImages[0].clientWidth;

    function showSlide(index) {
        if (index >= slideImages.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideImages.length - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    setInterval(nextSlide, 3000); // Automatically move to the next slide every 3 seconds
});
```

When you open `index.html` in a web browser, it should display an image slider that automatically transitions between images and allows manual navigation.

## Contributor's Folder Structure

Your submission should follow this structure:

```
javascript-mastery-course/
├── image-slider/
│   └── yourname/
│       ├── index.html
│       ├── style.css
│       └── script.js
```

## Notes

- Ensure your project follows the file structure guidelines.
- Make sure your images are included and paths are correct.
- Your submission will be reviewed, and feedback will be provided if necessary.
- Feel free to get creative with the design and functionality!

Happy coding! 🚀