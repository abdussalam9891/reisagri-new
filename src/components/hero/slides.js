import { HERO_SLIDES } from "../../constants/heroSlides.js";

export function createHeroSlides() {

  return HERO_SLIDES
    .slice(1)
    .map(
      (slide, index) => {

        const actualIndex = index + 1;

        return `
          <div
            class="
              hero-slide

              absolute
              inset-0

              overflow-hidden

              opacity-0
              z-10

              pointer-events-none

              transition-opacity
              duration-[1600ms]
              ease-out
            "

            data-slide="${actualIndex}"
          >

            <picture>

              <!-- Mobile -->

              <source
                media="(max-width: 768px)"
                srcset="${slide.mobileImage}"
              />

              <!-- Desktop -->

              <img
                src="${slide.image}"

                alt="${slide.title.replace(/\n/g, " ")}"

                loading="lazy"

                fetchpriority="auto"

                decoding="async"

                draggable="false"

                class="
                  hero-image

                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover

                  select-none
                "
              />

            </picture>


            <!-- Left Gradient -->

            <div
              class="
                pointer-events-none

                absolute
                inset-0

                bg-[linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(18,18,18,.62)_35%,rgba(232,114,15,.12)_100%)]
              "
            ></div>


            <!-- Bottom Fade -->

            <div
              class="
                pointer-events-none

                absolute
                inset-x-0
                bottom-0

                h-48

                md:h-40

                bg-gradient-to-t
                from-black/80
                via-black/35
                to-transparent
              "
            ></div>

          </div>
        `;

      }
    )
    .join("");
}
