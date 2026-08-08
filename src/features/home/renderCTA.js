import {
  CTA,
} from "../../constants/home.js";

import {
  createCTAFeature,
} from "../../components/common/CTAFeature.js";

export function renderCTA() {

  const container =
    document.getElementById("ctaSection");

  if (!container) return;

  container.innerHTML = `

    <section
      class="
        relative

        overflow-hidden

        bg-[#181818]
      "
    >

      <!-- ========================================= -->
      <!-- Background Image -->
      <!-- ========================================= -->

      <img
        src="${CTA.background}"
        alt=""
        aria-hidden="true"

        loading="lazy"
        decoding="async"

        class="
          absolute
          inset-0

          h-full
          w-full

          object-cover
        "
      />


      <!-- ========================================= -->
      <!-- Dark Overlay -->
      <!-- ========================================= -->

      <div
        class="
          pointer-events-none

          absolute
          inset-0

          bg-[#181818]/70
        "
      ></div>


      <!-- ========================================= -->
      <!-- Orange Ambient Glow -->
      <!-- ========================================= -->

      <div
        class="
          pointer-events-none

          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(232,114,15,.20),transparent_68%)]
        "
      ></div>


      <!-- ========================================= -->
      <!-- Content -->
      <!-- ========================================= -->

      <div
        class="
          relative
          z-10

          mx-auto

          max-w-7xl

          px-5
          py-20

          text-center

          sm:px-6
          sm:py-24

          lg:px-8
          lg:py-28
        "
      >

        <!-- ===================================== -->
        <!-- CTA Heading -->
        <!-- ===================================== -->

        <div
          class="
            mx-auto

            max-w-4xl

            reveal
            reveal-up
          "
        >




          <!-- Heading -->

          <h2
            class="
              mt-4

              font-serif

              text-[2rem]

              leading-[1.08]

              tracking-[-0.025em]

              text-white

              sm:text-[2rem]

              md:text-[2.25rem]

              lg:text-[2.5rem]

              xl:text-[3rem]
            "
          >
            ${CTA.title}
          </h2>


          <!-- Description -->

          <p
            class="
              mx-auto

              mt-6

              max-w-2xl

              text-sm

              leading-7

              text-white/70

              sm:text-base

              sm:leading-8

              lg:text-lg
            "
          >
            ${CTA.description}
          </p>

        </div>


        <!-- ===================================== -->
        <!-- CTA Buttons -->
        <!-- ===================================== -->

        <div
          class="
            mt-9

            flex
            flex-col

            items-center
            justify-center

            gap-4

            sm:flex-row
          "
        >

          <!-- Primary -->

          <a
            href="${CTA.primaryButton.href}"

            class="
              group

              inline-flex

              items-center
              justify-center

              gap-3

              rounded-full

              bg-[#E8720F]

              px-8
              py-3.5

              text-xs

              font-semibold

              uppercase

              tracking-[0.18em]

              text-white

              transition-all
              duration-500

              ease-[cubic-bezier(.22,1,.36,1)]

              hover:-translate-y-1

              hover:bg-[#F08B2F]

              hover:shadow-[0_20px_45px_rgba(232,114,15,.32)]

              sm:px-9
              sm:py-4

              sm:text-sm
            "
          >

            ${CTA.primaryButton.text}

            <i
              data-lucide="arrow-right"

              class="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            ></i>

          </a>


          <!-- Secondary -->

          <a
            href="${CTA.secondaryButton.href}"

            class="
              group

              inline-flex

              items-center
              justify-center

              gap-3

              rounded-full

              border
              border-white/20

              bg-white/5

              px-8
              py-3.5

              text-xs

              font-semibold

              uppercase

              tracking-[0.18em]

              text-white

              backdrop-blur-md

              transition-all
              duration-500

              ease-[cubic-bezier(.22,1,.36,1)]

              hover:-translate-y-1

              hover:rounded-[6px_22px_6px_22px]

              hover:border-[#E8720F]

              hover:bg-white/10

              hover:shadow-[0_15px_35px_rgba(0,0,0,.20)]

              sm:px-9
              sm:py-4

              sm:text-sm
            "
          >

            ${CTA.secondaryButton.text}

            <i
              data-lucide="arrow-right"

              class="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            ></i>

          </a>

        </div>


        <!-- ===================================== -->
        <!-- Features -->
        <!-- ===================================== -->

        <div
          class="
            mx-auto

            mt-16

            grid

            max-w-5xl

            grid-cols-2

            gap-x-6
            gap-y-8

            border-t
            border-white/10

            pt-10

            sm:grid-cols-2

            lg:grid-cols-4

            lg:gap-x-10
          "
        >

          ${CTA.features
            .map(createCTAFeature)
            .join("")}

        </div>

      </div>

    </section>

  `;

  window.lucide?.createIcons();
}
