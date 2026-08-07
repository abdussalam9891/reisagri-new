import {
  OTHER_COMMODITIES,
} from "../../constants/products.js";

import {
  createOtherCommodities,
} from "../../components/products/OtherCommodities.js";

export function renderOtherCommodities() {

  const container =
    document.getElementById(
      "otherCommodities"
    );

  if (!container) return;

  container.innerHTML =
    createOtherCommodities(
      OTHER_COMMODITIES
    );

}
