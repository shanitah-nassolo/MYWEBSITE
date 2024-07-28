// The current slide index
let currentSlide = 0;

// The list of slides
let slides = document.getElementsByClassName("slide");

// Move to the next or previous slide
function moveSlide(direction) {
  // Hide the current slide
  slides[currentSlide].style.display = "none";

  // Update the current slide index
  currentSlide += direction;

  // Check if we're at the end or start of the slides
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // Show the new current slide
  slides[currentSlide].style.display = "block";
}

// Show the first slide by default
slides[0].style.display = "block";




