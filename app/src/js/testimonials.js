const sliderBox = document.getElementById("slider_box");
const slider = document.getElementById("slider");
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");

const slidesInRow = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 991) return 3;
  else if (screenWidth <= 479) return 1;
  else return 2;
};

let currentIndex = 0;
let slidesLength = 0;

const moveSlider = (e) => {
  const sliderBoxWidth = sliderBox.clientWidth;

  const target = e.target.id;

  if (target === "arrow_left") {
    currentIndex === 0 ? null : currentIndex--;
  } else {
    currentIndex === slidesLength - slidesInRow() ? null : currentIndex++;
  }

  slider.style.transform = `translateX(-${
    currentIndex * (sliderBoxWidth / slidesInRow())
  }px)`;
};

if (window.location.pathname !== "/prices.html") {
  arrowLeft.addEventListener("click", (e) => moveSlider(e));
  arrowRight.addEventListener("click", (e) => moveSlider(e));
}

export const displayTestimonials = (arr) => {
  const sliderBoxWidth = sliderBox.clientWidth;
  const testimonials = arr.data;
  slidesLength = testimonials.length;

  testimonials.forEach(({ uzytkownik, data, tekst }) => {
    if (slider) {
      slider.innerHTML += `    
      <div class='testimonial_box' style='width: ${
        sliderBoxWidth / slidesInRow() - 40
      }px'>
        <p class='testimonial_date'>${data}</p>
        <p class='testimonial_text'>${tekst}</p>
        <p class='testimonial_user'>${uzytkownik}</p>
      </div>
      `;
    }
  });
};
