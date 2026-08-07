import {
  WHY_PRODUCTS,
} from "../../constants/products.js";

import {
  createWhyChooseProducts,
} from "../../components/products/WhyChooseProducts.js";

export function renderWhyChoose() {

  const container =
    document.getElementById(
      "whyChooseUs"
    );

  if (!container) return;

  container.innerHTML =
    createWhyChooseProducts(
      WHY_PRODUCTS
    );

  window.lucide?.createIcons();

}
