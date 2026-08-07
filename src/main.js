import { initNavbar } from "./features/navbar/index.js";

import { initRevealAnimations } from "./features/animations/reveal.js";

import { initHomePage } from "./pages/homepage.js";

import { initAboutPage } from "./pages/aboutpage.js";

import {
  initProductsPage,
} from "./pages/productsPage.js";






import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";

document.addEventListener("DOMContentLoaded", () => {
  // Global
  initNavbar();


const page = document.body.dataset.page;

switch (page) {

  case "home":
    initHomePage();
    break;

  case "about":
    initAboutPage();
    break;

     case "products":
    initProductsPage();
    break;

}



  // Footer
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
    initFooterAccordion();
  }


    initRevealAnimations();
});
