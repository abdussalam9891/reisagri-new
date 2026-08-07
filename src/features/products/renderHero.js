import {
  PRODUCT_HERO,
} from "../../constants/products.js";

import {
  createProductHero,
} from "../../components/products/ProductHero.js";

export function renderHero() {

  const container =
    document.getElementById("heroContainer");

  if (!container) return;

  container.innerHTML =
    createProductHero(
      PRODUCT_HERO
    );

}
