function addBirthdayWish() {
    const messageList = document.getElementById('message-list');
    const birthdayWish = document.getElementById('birthday-wish').value;

    if (birthdayWish.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = birthdayWish;
        messageList.appendChild(li);
        document.getElementById('birthday-wish').value = '';
    }
}

let slideIndex = 0;
const slides = document.querySelectorAll(".memory-lane .slide");

function showSlides() {
    slides[slideIndex].style.display = "none"; // Hide the current slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Reset the index if all slides are shown
    }
    slides[slideIndex].style.display = "block"; // Show the next slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Hide all slides on page load
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

showSlides(); // Start the slideshow
