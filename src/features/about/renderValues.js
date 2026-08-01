import {
  CORE_VALUES,
} from "../../constants/about.js";

import {
  createSectionHeading,
} from "../../components/common/SectionHeading.js";

import {
  createFeatureCard,
} from "../../components/common/FeatureCard.js";

export function renderValues() {

  const container =
    document.getElementById("valuesSection");

  if (!container) return;

  container.innerHTML = `

<section class="bg-white">

  <div
    class="
      mx-auto
      max-w-7xl

      px-5
      py-10

      sm:px-6
      sm:py-10

      lg:px-8
      lg:py-16
    "
  >

    ${createSectionHeading({

      badge:
        "Core Values",

      title:
        "The Principles Behind\nEverything We Do.",

      description:
        "Our values guide every sourcing decision, every shipment and every long-term partnership we build across global agricultural markets.",

    })}

    <div
      class="
        mt-10

        grid

        gap-6

        sm:grid-cols-2

        xl:grid-cols-4
      "
    >

      ${CORE_VALUES
        .map(createFeatureCard)
        .join("")}

    </div>

  </div>

</section>

`;

  window.lucide?.createIcons();

}
