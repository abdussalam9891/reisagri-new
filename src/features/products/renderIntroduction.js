import {
  PRODUCT_INTRODUCTION,
} from "../../constants/products.js";

import {
  createProductsIntroduction,
} from "../../components/products/ProductsIntroduction.js";

export function renderIntroduction() {

  const container =
    document.getElementById(
      "productsIntroduction"
    );

  if (!container) return;

  container.innerHTML =
    createProductsIntroduction(
      PRODUCT_INTRODUCTION
    );

}
