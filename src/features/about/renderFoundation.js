import { FOUNDATION } from "../../constants/about.js";

import {
  createSectionHeading,
} from "../../components/common/sectionHeading.js";

import {
  createInfoCard,
} from "../../components/common/infoCard.js";

export function renderFoundation() {

  const container =
    document.getElementById("foundationSection");

  if (!container) return;

  container.innerHTML = `

<section class="bg-white">

  <div
    class="
      mx-auto
      max-w-7xl

      px-5
      py-16

      sm:px-6
      sm:py-20

      lg:px-8
      lg:py-24
    "
  >

    ${createSectionHeading(
      FOUNDATION.heading
    )}

    <div
      class="
        mt-16

        grid
        gap-8

        lg:grid-cols-2
      "
    >

      ${FOUNDATION.cards
        .map(createInfoCard)
        .join("")}

    </div>

  </div>

</section>

`;

}
