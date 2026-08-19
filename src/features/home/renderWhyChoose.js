import {
  WHY_CHOOSE,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/sectionHeading.js";

import {
  createWhyChooseCard,
} from "../../components/common/WhyChooseCard.js";

export function renderWhyChoose() {
  const container =
    document.getElementById("whyChooseSection");

  if (!container) return;

  container.innerHTML = `
    <section
      class="
        bg-white
      "
    >

      <div
        class="
          mx-auto
          max-w-7xl

          px-5
          py-12

          sm:px-6
          sm:py-20

          lg:px-8
          lg:py-24
        "
      >

        <!-- ===================================== -->
        <!-- Section Heading -->
        <!-- ===================================== -->

        ${createSectionHeading({
          badge: WHY_CHOOSE.badge,
          title: WHY_CHOOSE.title,
          description: WHY_CHOOSE.description,
        })}


        <!-- ===================================== -->
        <!-- Why Choose Grid -->
        <!-- ===================================== -->

        <div
          class="
            mt-8

            grid
            gap-3

            sm:mt-12
            sm:gap-5

            md:grid-cols-2

            xl:grid-cols-3
          "
        >

          ${WHY_CHOOSE.cards
            .map(createWhyChooseCard)
            .join("")}

        </div>

      </div>

    </section>
  `;

  window.lucide?.createIcons();
}
