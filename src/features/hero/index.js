import { createHeroSlides } from "../../components/hero/slides.js";
import { createHeroContent } from "../../components/hero/heroContent.js";
import { createHeroIndicators } from "../../components/hero/indicators.js";

import { initHeroSlider } from "./slider.js";

export function initHero() {

  const hero =
    document.getElementById("hero");

  if (!hero) {
    console.warn("[Hero] #hero not found.");
    return;
  }


  // -----------------------------------------
  // Insert slides 2–4
  // -----------------------------------------

  const dynamicSlides =
    document.getElementById("heroDynamicSlides");

  if (dynamicSlides) {

    dynamicSlides.innerHTML =
      createHeroSlides();

  }


  // -----------------------------------------
  // Insert hero content
  // -----------------------------------------

  const heroContent =
    document.getElementById("heroContent");

  if (heroContent) {

    heroContent.innerHTML =
      createHeroContent();

  }


  // -----------------------------------------
  // Insert indicators
  // -----------------------------------------

  const heroIndicators =
    document.getElementById("heroIndicators");

  if (heroIndicators) {

    heroIndicators.innerHTML =
      createHeroIndicators();

  }


  // -----------------------------------------
  // Initialize slider
  // -----------------------------------------

  initHeroSlider();
}
