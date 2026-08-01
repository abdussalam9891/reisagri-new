import { HERO_SLIDES } from "../../constants/heroSlides.js";

export function createHeroIndicators() {
  return `
    <div
      class="
        absolute
        bottom-10
        left-1/2
        z-40

        flex
        -translate-x-1/2
        items-center
        gap-4

        md:bottom-12
      "
    >

      ${HERO_SLIDES.map(
        (_, index) => `
          <button
            type="button"

            class="
              hero-indicator

              relative

              h-1
              w-12

              overflow-hidden

              rounded-full

              bg-white/20

              transition-all
              duration-500

              hover:bg-white/40
              hover:w-16
            "

            data-indicator="${index}"

            aria-label="Go to slide ${index + 1}"
          >

            <span
              class="
                hero-indicator-progress

                absolute
                inset-0

                origin-left

                scale-x-0

                rounded-full

                bg-[#E8720F]
              "
            ></span>

          </button>
        `
      ).join("")}

    </div>
  `;
}
