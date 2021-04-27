//CSS
import "../css/normalize.css";
import "../css/webflow.css";
import "../css/auto-doctor.webflow.css";
import "../css/main.css";
//JS
import { webflow } from "./webflow";
import { displayImages } from "./gallery";
import { displayTestimonials } from "./testimonials";
import { displayOffers } from "./offers";
//utils
import { getData } from "../utils/index";

//init
(async () => {
  const page = window.location.pathname;

  const imgs = await getData("zdjecies");

  const testimonials = await getData("komentarzs");

  const offers = await getData("uslugas");

  if (page === "/prices.html") {
    displayOffers(offers);
  } else {
    displayTestimonials(testimonials);
    displayImages(imgs);
  }
  webflow();
})();
