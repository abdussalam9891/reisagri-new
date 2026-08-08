import { HERO_SLIDES } from "../../constants/heroSlides.js";

export function createHeroContent() {
  return `
    <div
      class="
        absolute
        inset-0
        z-30

        flex
        items-center
      "
    >

      <div
        class="
          mx-auto
          w-full
          max-w-7xl

          px-6
          sm:px-8
          lg:px-12
          xl:px-14
        "
      >

        ${HERO_SLIDES.map((slide, index) => {

          const lines = slide.title.split("\n");

          return `
            <div
              class="
                hero-content

                ${
                  index === 0
                    ? "opacity-100 visible"
                    : "opacity-0 invisible absolute"
                }

                max-w-[680px]

                transition-opacity
                duration-700
              "

              data-content="${index}"
            >

              <!-- Heading -->

              <h1
                class="
                  hero-title

                  flex
                  flex-col

                  overflow-hidden

                  font-serif
                  font-semibold

                  text-[32px]
                  leading-[1.04]
                  tracking-[-0.02em]

                  text-white

                  sm:text-[36px]

                  md:text-[42px]

                  lg:text-[50px]

                  xl:text-[58px]
                "
              >

                ${lines
                  .map(
                    line => `
                      <span
                        class="
                          hero-title-line

                          block
                          overflow-hidden
                        "
                      >

                        <span
                          class="
                            hero-title-word

                            block
                          "
                        >

                          ${line}

                        </span>

                      </span>
                    `
                  )
                  .join("")}

              </h1>


              <!-- Description -->

              <p
                class="
                  hero-description

                  hidden
                  md:block

                  mt-6
                  lg:mt-7

                  max-w-[580px]

                  text-base
                  lg:text-lg

                  leading-7
                  lg:leading-8

                  font-light

                  text-white/90
                "
              >

                ${slide.description}

              </p>


              <!-- CTA -->

              <div
                class="
                  hero-actions

                  mt-7

                  sm:mt-8

                  md:mt-9

                  lg:mt-10
                "
              >

                <a
                  href="${slide.button.href}"

                  class="
                    hero-button

                    group

                    inline-flex
                    items-center
                    gap-2.5

                    rounded-full

                    bg-[#E8720F]

                    px-6
                    py-3

                    sm:px-7
                    sm:py-3.5

                    md:px-8
                    md:py-3.5

                    text-[11px]

                    sm:text-xs

                    md:text-sm

                    font-semibold

                    uppercase

                    tracking-[0.16em]

                    text-white

                    transition-all
                    duration-300

                    hover:-translate-y-[3px]

                    hover:bg-[#F08B32]

                    hover:shadow-[0_18px_40px_rgba(232,114,15,.35)]
                  "
                >

                  ${slide.button.text}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 24 24"

                    fill="none"

                    stroke="currentColor"

                    stroke-width="2"

                    class="
                      h-3.5
                      w-3.5

                      sm:h-4
                      sm:w-4

                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  >

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h14M13 5l7 7-7 7"
                    />

                  </svg>

                </a>

              </div>

            </div>
          `;

        }).join("")}

      </div>

    </div>
  `;
}
