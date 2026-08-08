
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

<section

id="aboutHeroSection"

class="
relative

min-h-[100svh]

overflow-hidden
"
>

  <!-- =====================================
       BACKGROUND IMAGE
  ====================================== -->

 <img
src="/src/assets/images/maize.jpg"

 loading="lazy"
  decoding="async"

class="
about-hero-image

absolute
inset-0

h-full
w-full

object-cover

scale-110

will-change-transform
"
>

  <!-- Dark Overlay -->

<div
class="
about-overlay

absolute
inset-0

bg-gradient-to-r

from-black/85
via-black/65
to-black/40
"
>

  <!-- =====================================
       CONTENT
  ====================================== -->

 <div
class="
about-content

relative
z-20

will-change-transform

mx-auto

flex

min-h-[100svh]

max-w-7xl

items-center

px-6

lg:px-8
"
>

    <div class="max-w-4xl">





      <!-- Heading -->

      <h1
        class="
          about-title

          mt-3

          font-serif

          text-4xl

          leading-[1.02]

          text-white

          md:text-4xl

          lg:text-5xl
        "
      >

        Building Trusted
        Agricultural
        Supply Chains
        Worldwide.

      </h1>


      <!-- CTA -->

      <div
        class="
          about-actions

          mt-12

          flex

          flex-wrap

          gap-5
        "
      >

        <!-- Primary Button -->

        <a
          href="/pages/contact.html"

          class="
            group

            inline-flex

            items-center

            gap-3

            rounded-full

            bg-[#E8720F]

            px-9
            py-4

            text-sm

            font-semibold

            uppercase

            tracking-[0.18em]

            text-white

            transition-all
            duration-300

            hover:-translate-y-1

            hover:shadow-[0_20px_45px_rgba(232,114,15,.35)]
          "
        >

          Get Quote

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

            border-white/20

            px-9
            py-4

            text-sm

            font-semibold

            uppercase

            tracking-[0.18em]

            text-white
          "
        >

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

          <span
            class="
              relative

              z-10

              flex

              items-center

              gap-3
            "
          >

            Explore Products

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

          </span>

        </a>

      </div>

    </div>

  </div>

  <!-- Stats will be added in Part 2 -->

  <!-- =====================================
     FLOATING STATS
====================================== -->

<div
  class="
    absolute

    inset-x-0
    bottom-6

    z-30
  "
>

  <div
    class="
      mx-auto

      max-w-7xl

      px-6

      lg:px-8
    "
  >

    <div
      class="
        about-stats

        grid

        overflow-hidden









        shadow-[0_30px_80px_rgba(0,0,0,.45)]

        sm:grid-cols-2

        lg:grid-cols-4
      "
    >

      <!-- Years -->

      <div
        class="
          border-white/10

          p-4

          text-center

          lg:border-r
        "
      >

        <h3
          class="
            about-counter

            font-serif

            text-5xl

            text-[#E8720F]
          "

          data-target="10"
          data-suffix="+"
        >

          0

        </h3>

        <p
          class="
            mt-3

            text-xs

            uppercase

            tracking-[0.22em]

            text-white/70
          "
        >

          Years Experience

        </p>

      </div>

      <!-- Countries -->

      <div
        class="
          border-white/10

          p-8

          text-center

          lg:border-r
        "
      >

        <h3
          class="
            about-counter

            font-serif

            text-5xl

            text-[#E8720F]
          "

          data-target="25"
          data-suffix="+"
        >

          0

        </h3>

        <p
          class="
            mt-3

            text-xs

            uppercase

            tracking-[0.22em]

            text-white/70
          "
        >

          Countries Served

        </p>

      </div>

      <!-- Quality -->

      <div
        class="
          border-white/10

          p-8

          text-center

          lg:border-r
        "
      >

        <h3
          class="
            about-counter

            font-serif

            text-5xl

            text-[#E8720F]
          "

          data-target="100"
          data-suffix="%"
        >

          0

        </h3>

        <p
          class="
            mt-3

            text-xs

            uppercase

            tracking-[0.22em]

            text-white/70
          "
        >

          Quality Commitment

        </p>

      </div>

      <!-- Support -->

      <div
        class="
          p-8

          text-center
        "
      >

        <h3
          class="
            about-counter

            font-serif

            text-5xl

            text-[#E8720F]
          "

          data-target="24"
          data-suffix="/7"
        >

          0

        </h3>

        <p
          class="
            mt-3

            text-xs

            uppercase

            tracking-[0.22em]

            text-white/70
          "
        >

          Customer Support

        </p>

      </div>

    </div>

  </div>

</div>

</section>

`;

  window.lucide?.createIcons();

initAboutCounters();

initAboutHeroParallax();

animateFadeUp(

  document.querySelector(".about-badge"),

  0

);

animateTitle();

animateFadeUp(

  document.querySelector(".about-description"),

  850

);

animateFadeUp(

  document.querySelector(".about-actions"),

  1150

);

animateFadeUp(

  document.querySelector(".about-stats"),

  1500

);

}
