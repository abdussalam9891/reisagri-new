import { HERO_SLIDES } from "../../constants/heroSlides.js";

export function createHeroIndicators() {
  return `
    <div
      class="
        absolute
        bottom-8
        left-1/2
        z-40

        flex
        -translate-x-1/2
        items-center
        gap-3

        sm:bottom-10
        sm:gap-4

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

              h-[3px]

              w-12
              sm:w-16
              lg:w-20

              shrink-0

              overflow-hidden

              rounded-full

              bg-white/25

              transition-opacity
              duration-300

              hover:bg-white/40

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#E8720F]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-transparent
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
