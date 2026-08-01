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

          px-8
          lg:px-14
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

              max-w-[760px]

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

  text-[48px]

  font-semibold

  leading-[1.05]

  tracking-[-0.02em]

  text-white

  md:text-[64px]

  lg:text-[74px]

  xl:text-[82px]
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

  mt-8

  max-w-[640px]

  text-lg

  leading-8

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

                mt-14
              "
            >

            <a
  href="${slide.button.href}"

  class="
    hero-button

    group

    inline-flex
    items-center
    gap-3

    rounded-full

    bg-[#E8720F]

    px-8
    py-4

    text-sm
    font-semibold

    uppercase

    tracking-[0.18em]

    text-white

    transition-all
    duration-300

    hover:translate-y-[-3px]
    hover:bg-[#f68b32]
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
      h-4
      w-4

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

</a>            </div>

          </div>

          `;

        }).join("")}

      </div>

    </div>
  `;
}
