

export function createAboutPreviewCard({
  title,
  description,
  video,
  stats,
  cta,
}) {
  return `
    <div
      class="
        grid
        items-center

        gap-10

        lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]

        lg:gap-16
        xl:gap-20
      "
    >

      <!-- ========================================= -->
      <!-- Video -->
      <!-- ========================================= -->

      <div
        class="
          about-video-wrapper

          group

          relative

          overflow-hidden

          rounded-tl-[8px]
          rounded-tr-[48px]
          rounded-br-[8px]
          rounded-bl-[48px]

          sm:rounded-tr-[72px]
          sm:rounded-bl-[72px]

          lg:rounded-tr-[96px]
          lg:rounded-bl-[96px]

          bg-black

          shadow-sm

          transition-all
          duration-500

          hover:-translate-y-1

          hover:shadow-[0_30px_60px_rgba(0,0,0,.18)]
        "
      >

        <!-- ========================================= -->
        <!-- Video -->
        <!-- ========================================= -->

        <video
          data-about-video

          autoplay
          muted
          loop
          playsinline
          preload="metadata"

          poster="/src/assets/images/10.webp"

          class="
            about-video

            block

            aspect-[4/3]

            w-full

            object-cover

            transition-transform
            duration-700

            ease-out

            group-hover:scale-[1.03]

            lg:aspect-[16/9]
          "
        >

          <source
            src="${video}"
            type="video/mp4"
          />

          Your browser does not support the video tag.

        </video>


        <!-- ========================================= -->
        <!-- Video Overlay -->
        <!-- ========================================= -->

        <div
          class="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-t
            from-black/30
            via-transparent
            to-black/5
          "
        ></div>


        <!-- ========================================= -->
        <!-- Play / Pause Button -->
        <!-- ========================================= -->

        <button
          type="button"

          data-video-toggle

          aria-label="Pause video"

          class="
            absolute

            left-1/2
            top-1/2

            z-20

            flex

            h-16
            w-16

            sm:h-20
            sm:w-20

            -translate-x-1/2
            -translate-y-1/2

            items-center
            justify-center

            rounded-full

            bg-[#E8720F]

            text-white

            shadow-[0_12px_35px_rgba(0,0,0,.25)]

            transition-all
            duration-300

            hover:scale-110

            hover:bg-[#f68b32]

            active:scale-95
          "
        >

          <!-- Pause Icon -->

          <svg
            data-video-pause-icon

            xmlns="http://www.w3.org/2000/svg"

            viewBox="0 0 24 24"

            fill="currentColor"

            class="
              h-6
              w-6

              sm:h-7
              sm:w-7
            "
          >

            <rect
              x="6"
              y="5"
              width="4"
              height="14"
              rx="1"
            />

            <rect
              x="14"
              y="5"
              width="4"
              height="14"
              rx="1"
            />

          </svg>


          <!-- Play Icon -->

          <svg
            data-video-play-icon

            xmlns="http://www.w3.org/2000/svg"

            viewBox="0 0 24 24"

            fill="currentColor"

            class="
              hidden

              ml-1

              h-6
              w-6

              sm:h-7
              sm:w-7
            "
          >

            <path
              d="M8 5.5v13l10-6.5z"
            />

          </svg>

        </button>


        <!-- ========================================= -->
        <!-- Bottom Accent -->
        <!-- ========================================= -->

        <div
          class="
            pointer-events-none

            absolute

            bottom-0
            left-0

            h-[3px]

            w-0

            bg-[#E8720F]

            transition-all
            duration-500

            group-hover:w-full
          "
        ></div>

      </div>


      <!-- ========================================= -->
      <!-- Content -->
      <!-- ========================================= -->

      <div
        class="
          about-content
        "
      >

        <!-- ========================================= -->
        <!-- Heading -->
        <!-- ========================================= -->

        <h2
          class="
            about-title

            font-serif

            text-[2rem]

            leading-[1.08]

            tracking-[-0.02em]

            text-[#181818]

            sm:text-[2rem]

            lg:text-[2rem]

            xl:text-[2.25rem]
          "
        >

          ${title.replace(/\n/g, "<br>")}

        </h2>


        <!-- ========================================= -->
        <!-- Description -->
        <!-- ========================================= -->

        <p
          class="
            mt-6

            max-w-2xl

            text-base

            leading-7

            text-[#666666]

            sm:text-lg

            sm:leading-8
          "
        >

          ${description}

        </p>


        <!-- ========================================= -->
        <!-- Stats -->
        <!-- ========================================= -->

        <div
          class="
            mt-8

            grid

            grid-cols-2

            gap-x-8
            gap-y-7

            lg:grid-cols-4
          "
        >

          ${stats
            .map(stat => {

              /*
                Numeric examples:

                "15+"  → target: 15, suffix: +
                "6"    → target: 6,  suffix: ""
                "100%" → target: 100, suffix: %

                Non-numeric:

                "Global" → static text
              */

              const match =
                String(stat.value).match(
                  /^(\d+(?:\.\d+)?)(.*)$/
                );


              const isNumeric =
                Boolean(match);


              const target =
                isNumeric
                  ? match[1]
                  : "";


              const suffix =
                isNumeric
                  ? match[2]
                  : "";


              return `
                <div
                  class="
                    about-stat

                    min-w-0
                  "
                >

                  <!-- Number -->

                  <div
                    ${
                      isNumeric
                        ? `
                          data-target="${target}"
                          data-suffix="${suffix}"
                        `
                        : ""
                    }

                    class="
                      ${
                        isNumeric
                          ? "about-counter"
                          : "about-stat-text"
                      }

                      text-3xl

                      font-medium

                      leading-none

                      tracking-tight

                      text-[#E8720F]

                      sm:text-4xl

                      transition-colors
                      duration-300
                    "
                  >

                    ${
                      isNumeric
                        ? `0${suffix}`
                        : stat.value
                    }

                  </div>


                  <!-- Label -->

                  <div
                    class="
                      mt-2

                      max-w-[130px]

                      text-[10px]

                      font-medium

                      uppercase

                      leading-4

                      tracking-[0.14em]

                      text-[#777777]

                      sm:text-xs
                    "
                  >

                    ${stat.label}

                  </div>

                </div>
              `;
            })
            .join("")}

        </div>


        <!-- ========================================= -->
        <!-- CTA -->
        <!-- ========================================= -->

        <a
          href="${cta.href}"

          class="
            about-cta

            group/cta

            relative

            mt-9

            inline-flex

            items-center
            justify-center

            overflow-hidden

            rounded-full

            border
            border-[#E8720F]

            px-7
            py-3.5

            text-xs

            font-semibold

            uppercase

            tracking-[0.16em]

            text-[#181818]

            transition-all
            duration-500

            ease-[cubic-bezier(0.22,1,0.36,1)]

            sm:px-8
            sm:py-4

            sm:text-sm

            hover:rounded-[6px_22px_6px_22px]

            hover:-translate-y-1

            hover:shadow-[0_12px_30px_rgba(232,114,15,.18)]
          "
        >

          <!-- Fill -->

          <span
            class="
              absolute
              inset-0

              origin-left

              scale-x-0

              bg-[#E8720F]

              transition-transform
              duration-500

              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover/cta:scale-x-100
            "
          ></span>


          <!-- Content -->

          <span
            class="
              relative

              z-10

              flex

              items-center

              gap-3

              transition-colors
              duration-300

              group-hover/cta:text-white
            "
          >

            ${cta.text}

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

                group-hover/cta:translate-x-1
              "
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />

            </svg>

          </span>

        </a>

      </div>

    </div>
  `;
}
