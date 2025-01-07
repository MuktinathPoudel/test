const imagesContainer = document.querySelector(".images");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

const updateDots = () => {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const slideTo = index => {
  currentIndex = index;
  const translateX = -currentIndex * 100; // Adjusted for percentage width
  imagesContainer.style.transform = `translateX(${translateX}%)`;
  updateDots();
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideTo(index);
  });
});

const slideNext = () => {
  currentIndex = (currentIndex + 1) % dots.length; // Adjusted for the number of dots
  slideTo(currentIndex);
};

setInterval(slideNext, 2000);