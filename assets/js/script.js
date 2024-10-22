let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbarLinks")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
