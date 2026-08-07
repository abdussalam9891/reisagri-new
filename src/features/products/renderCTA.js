import {
  PRODUCTS_CTA,
} from "../../constants/products.js";

import {
  createProductsCTA,
} from "../../components/products/ProductsCTA.js";

export function renderCTA() {

  const container =
    document.getElementById(
      "ctaSection"
    );

  if (!container) return;

  container.innerHTML =
    createProductsCTA(
      PRODUCTS_CTA
    );

  window.lucide?.createIcons();

}
