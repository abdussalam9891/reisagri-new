import {
  PACKAGING,
} from "../../constants/products.js";

import {
  createPackagingSection,
} from "../../components/products/PackagingSection.js";

export function renderPackaging() {

  const container =
    document.getElementById(
      "packagingSection"
    );

  if (!container) return;

  container.innerHTML =
    createPackagingSection(
      PACKAGING
    );

  window.lucide?.createIcons();

}
