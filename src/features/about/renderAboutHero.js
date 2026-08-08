 import {
  initAboutCounters,
} from "./counter.js";

import {
  animateFadeUp,
  animateTitle,
} from "./aboutHeroAnimations.js";

import {
  initAboutHeroParallax,
} from "./aboutHeroParallax.js";


export function renderAboutHero() {

  const container =
    document.getElementById("aboutHero");

  if (!container) return;


  container.innerHTML = `

    <!-- ========================================= -->
    <!-- About Hero -->
    <!-- ========================================= -->

    <section
      id="aboutHeroSection"

      class="
        relative

        h-[72svh]

        min-h-[520px]

        max-h-[680px]

        overflow-hidden

        md:h-[78vh]

        md:min-h-[580px]

        md:max-h-[720px]

        lg:h-[82vh]

        lg:min-h-[600px]

        lg:max-h-[760px]
      "
    >

      <!-- ========================================= -->
      <!-- Background Image -->
      <!-- ========================================= -->

      <img
        src="/src/assets/images/maize.jpg"

        alt="Agricultural farming and maize"

        loading="eager"

        fetchpriority="high"

        decoding="async"

        draggable="false"

        class="
          about-hero-image

          absolute
          inset-0

          h-full
          w-full

          object-cover

          scale-110

          will-change-transform

          select-none
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

          bg-gradient-to-r

          from-black/85

          via-black/65

          to-black/35

          md:from-black/80
          md:via-black/60
          md:to-black/30
        "
      ></div>


      <!-- ========================================= -->
      <!-- Main Content -->
      <!-- ========================================= -->

      <div
        class="
          relative
          z-20

          mt-10

          mx-auto

          flex

          min-h-full

          max-w-7xl

          items-center

          px-6

          sm:px-8

          lg:px-12

          xl:px-14
        "
      >

        <div
          class="
            max-w-[620px]

            pb-24

            sm:pb-28

            md:max-w-[680px]

            md:pb-32

            lg:max-w-[720px]

            lg:pb-36
          "
        >

          <!-- ===================================== -->
          <!-- Heading -->
          <!-- ===================================== -->

         <h1
  class="
    about-title

    max-w-[340px]

    font-serif

    text-[29px]

    leading-[1.06]

    tracking-[-0.02em]

    mt-4

    text-white

    sm:text-[32px]

    md:max-w-[620px]

    md:text-[42px]

    lg:text-[48px]

    xl:text-[54px]
  "
>
  Building Trusted
  Agricultural
  Supply Chains
  Worldwide
</h1>


          <!-- ===================================== -->
          <!-- CTA -->
          <!-- ===================================== -->

          <div
            class="
              about-actions

              mt-8

              flex

              flex-wrap

              gap-3

              sm:mt-10

              sm:gap-4

              md:mt-11

              lg:mt-12
            "
          >

            <!-- Primary CTA -->

            <a
              href="/pages/contact.html"

              class="
                group

                inline-flex

                items-center

                gap-2.5

                rounded-full

                bg-[#E8720F]

                px-6
                py-3

                text-[11px]

                font-semibold

                uppercase

                tracking-[0.16em]

                text-white

                transition-all
                duration-300

                hover:-translate-y-1

                hover:bg-[#f68b32]

                hover:shadow-[0_18px_40px_rgba(232,114,15,.35)]

                sm:px-7
                sm:py-3.5

                sm:text-xs

                md:px-8
                md:py-4

                md:text-sm
              "
            >

              Get Quote

              <i
                data-lucide="arrow-right"

                class="
                  h-3.5
                  w-3.5

                  sm:h-4
                  sm:w-4

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              ></i>

            </a>


            <!-- Secondary CTA -->

            <a
              href="/pages/products.html"

              class="
                group

                relative

                inline-flex

                items-center

                justify-center

                overflow-hidden

                rounded-full

                border

                border-white/25

                px-6
                py-3

                text-[11px]

                font-semibold

                uppercase

                tracking-[0.16em]

                text-white

                transition-all
                duration-500

                ease-[cubic-bezier(.22,1,.36,1)]

                hover:rounded-[6px_20px_6px_20px]

                hover:-translate-y-1

                hover:border-[#E8720F]

                hover:shadow-[0_16px_35px_rgba(232,114,15,.22)]

                sm:px-7
                sm:py-3.5

                sm:text-xs

                md:px-8
                md:py-4

                md:text-sm
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

                  ease-[cubic-bezier(.22,1,.36,1)]

                  group-hover:scale-x-100
                "
              ></span>


              <!-- Content -->

              <span
                class="
                  relative

                  z-10

                  flex

                  items-center

                  gap-2.5
                "
              >

                Explore Products

                <i
                  data-lucide="arrow-right"

                  class="
                    h-3.5
                    w-3.5

                    sm:h-4
                    sm:w-4

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                ></i>

              </span>

            </a>

          </div>

        </div>

      </div>


      <!-- ========================================= -->
      <!-- Bottom Stats -->
      <!-- ========================================= -->

<div
  class="
    absolute
    inset-x-0
    bottom-0

    z-30

    w-full
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

    <!-- stats block here -->
      <div
  class="
    about-stats

    absolute
    inset-x-0
    bottom-0

    z-30

    grid
    grid-cols-2
    sm:grid-cols-4

    overflow-hidden

    border-t
    border-white/10

    bg-black/25

    backdrop-blur-md
  "
>

  <!-- ================================= -->
  <!-- Years Experience -->
  <!-- ================================= -->

  <div
    class="
      flex
      min-w-0
      flex-col
      items-center
      justify-center

      border-r
      border-b
      border-white/10

      px-2
      py-3

      text-center

      sm:border-b-0
      sm:px-4
      sm:py-4

      md:px-6
      md:py-5
    "
  >

    <h3
      class="
        about-counter

        font-serif

        text-[18px]
        leading-none

        text-[#E8720F]

        sm:text-2xl
        md:text-3xl
        lg:text-4xl
      "

      data-target="10"
      data-suffix="+"
    >
      0
    </h3>

    <p
      class="
        mt-1.5

        whitespace-nowrap

        text-[7px]
        font-medium
        uppercase
        leading-none

        tracking-[0.08em]

        text-white/65

        sm:text-[9px]
        sm:tracking-[0.12em]

        md:mt-2
        md:text-[10px]
        md:tracking-[0.18em]
      "
    >
      Years Experience
    </p>

  </div>


  <!-- ================================= -->
  <!-- Countries -->
  <!-- ================================= -->

  <div
    class="
      flex
      min-w-0
      flex-col
      items-center
      justify-center

      border-b
      border-white/10

      px-2
      py-3

      text-center

      sm:border-r
      sm:border-b-0

      sm:px-4
      sm:py-4

      md:px-6
      md:py-5
    "
  >

    <h3
      class="
        about-counter

        font-serif

        text-[18px]
        leading-none

        text-[#E8720F]

        sm:text-2xl
        md:text-3xl
        lg:text-4xl
      "

      data-target="25"
      data-suffix="+"
    >
      0
    </h3>

    <p
      class="
        mt-1.5

        whitespace-nowrap

        text-[7px]
        font-medium
        uppercase
        leading-none

        tracking-[0.08em]

        text-white/65

        sm:text-[9px]
        sm:tracking-[0.12em]

        md:mt-2
        md:text-[10px]
        md:tracking-[0.18em]
      "
    >
      Countries Served
    </p>

  </div>


  <!-- ================================= -->
  <!-- Quality -->
  <!-- ================================= -->

  <div
    class="
      flex
      min-w-0
      flex-col
      items-center
      justify-center

      border-r
      border-white/10

      px-2
      py-3

      text-center

      sm:px-4
      sm:py-4

      md:px-6
      md:py-5
    "
  >

    <h3
      class="
        about-counter

        font-serif

        text-[18px]
        leading-none

        text-[#E8720F]

        sm:text-2xl
        md:text-3xl
        lg:text-4xl
      "

      data-target="100"
      data-suffix="%"
    >
      0
    </h3>

    <p
      class="
        mt-1.5

        whitespace-nowrap

        text-[7px]
        font-medium
        uppercase
        leading-none

        tracking-[0.08em]

        text-white/65

        sm:text-[9px]
        sm:tracking-[0.12em]

        md:mt-2
        md:text-[10px]
        md:tracking-[0.18em]
      "
    >
      Quality Commitment
    </p>

  </div>


  <!-- ================================= -->
  <!-- Support -->
  <!-- ================================= -->

  <div
    class="
      flex
      min-w-0
      flex-col
      items-center
      justify-center

      px-2
      py-3

      text-center

      sm:px-4
      sm:py-4

      md:px-6
      md:py-5
    "
  >

    <h3
      class="
        about-counter

        font-serif

        text-[18px]
        leading-none

        text-[#E8720F]

        sm:text-2xl
        md:text-3xl
        lg:text-4xl
      "

      data-target="24"
      data-suffix="/7"
    >
      0
    </h3>

    <p
      class="
        mt-1.5

        whitespace-nowrap

        text-[7px]
        font-medium
        uppercase
        leading-none

        tracking-[0.08em]

        text-white/65

        sm:text-[9px]
        sm:tracking-[0.12em]

        md:mt-2
        md:text-[10px]
        md:tracking-[0.18em]
      "
    >
      Customer Support
    </p>

  </div>

</div>

  </div>
</div>



      <!-- ========================================= -->
      <!-- Bottom Gradient -->
      <!-- ========================================= -->

      <div
        class="
          pointer-events-none

          absolute

          inset-x-0

          bottom-0

          z-10

          h-40

          bg-gradient-to-t

          from-black/80

          via-black/30

          to-transparent

          md:h-48
        "
      ></div>

    </section>

  `;


  window.lucide?.createIcons();


  /* ========================================= */
  /* Initialize Animations                     */
  /* ========================================= */

 initAboutCounters();

initAboutHeroParallax();

animateTitle();

animateFadeUp(
  document.querySelector(".about-actions"),
  1150
);



}
