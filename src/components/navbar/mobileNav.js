import { NAVIGATION } from "../../constants/navigation.js";

export function createMobileNav() {
  const navigation = NAVIGATION.map(
    (item) => `
      <li>
        <a
          href="${item.href}"
          data-nav="${item.slug}"

          class="
            group

            flex
            items-center
            justify-between

            rounded-xl

            px-5
            py-3.5

            text-sm
            font-medium
            uppercase
            tracking-[0.15em]

            text-white

            transition-all
            duration-300

            hover:bg-white/5
            hover:text-[#E8720F]
          "
        >

          <span>
            ${item.label}
          </span>


          <svg
            xmlns="http://www.w3.org/2000/svg"

            class="
              h-5
              w-5
              shrink-0

              transition-transform
              duration-300

              group-hover:translate-x-1
            "

            fill="none"
            viewBox="0 0 24 24"

            stroke="currentColor"
            stroke-width="1.8"
          >

            <path
              stroke-linecap="round"
              stroke-linejoin="round"

              d="M9 6l6 6-6 6"
            />

          </svg>

        </a>
      </li>
    `
  ).join("");


  return `

    <!-- ===================================== -->
    <!-- Mobile Drawer -->
    <!-- ===================================== -->

    <div
      id="mobileDrawer"

      class="
        fixed
        inset-0

        z-[200]

        hidden
      "
    >


      <!-- =================================== -->
      <!-- Backdrop -->
      <!-- =================================== -->

      <div
        id="mobileBackdrop"

        class="
          absolute
          inset-0

          bg-black/65

          opacity-0

          backdrop-blur-[3px]

          transition-opacity
          duration-300
        "
      ></div>


      <!-- =================================== -->
      <!-- Drawer Panel -->
      <!-- =================================== -->

      <aside
        id="mobilePanel"

        class="
          absolute

          left-1/2
          top-1/2

          z-10

          w-[calc(100vw-2rem)]

          max-w-[380px]

          max-h-[calc(100svh-2rem)]

          -translate-x-1/2
          -translate-y-[calc(50%+120vh)]

          overflow-hidden
          overflow-y-auto

          rounded-[28px]

          border
          border-white/10

          bg-[#181818]

          shadow-[0_30px_100px_rgba(0,0,0,.45)]

          transition-transform
          duration-500

          ease-[cubic-bezier(.22,1,.36,1)]

          no-scrollbar

          sm:w-[calc(100vw-3rem)]

          sm:rounded-[32px]
        "
      >


        <!-- ================================= -->
        <!-- Header -->
        <!-- ================================= -->

        <div
          class="
            flex
            items-center
            justify-between

            border-b
            border-white/10

            px-6
            py-1

            sm:px-7
            sm:py-1
          "
        >

          <!-- Logo -->

          <div
            class="
              flex
              items-center
            "
          >

            <img
              src="/public/assets/reisagri_trading_white.svg"

              alt="REIS AGRI TRADING"

              class="
                h-20
                w-auto

                sm:h-18
              "
            />

          </div>


          <!-- Close -->

          <button
            id="closeDrawerBtn"

            type="button"

            aria-label="Close Menu"

            class="
              flex

              h-10
              w-10

              shrink-0

              items-center
              justify-center

              rounded-full

              text-white

              transition-all
              duration-300

              hover:bg-white/5

              hover:text-[#E8720F]

              hover:rotate-90
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"

              class="
                h-6
                w-6
              "

              fill="none"
              viewBox="0 0 24 24"

              stroke="currentColor"
              stroke-width="1.8"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"

                d="M6 6l12 12M18 6L6 18"
              />

            </svg>

          </button>

        </div>


        <!-- ================================= -->
        <!-- Navigation -->
        <!-- ================================= -->

        <nav
          class="
            px-4
            py-4

            sm:px-5
            sm:py-4
          "
        >

          <ul
            class="
              space-y-1
            "
          >

            ${navigation}

          </ul>

        </nav>


        <!-- ================================= -->
        <!-- Contact -->
        <!-- ================================= -->

        <div
          class="
            border-t
            border-white/10

            px-6
            py-5

            sm:px-7
            sm:py-5
          "
        >

          <p
            class="
              text-[10px]

              uppercase

              tracking-[0.25em]

              text-white/40
            "
          >
            Contact
          </p>


          <div
            class="
              mt-3

              space-y-2.5
            "
          >

            <a
              href="mailto:info@reisagritrading.com"

              class="
                block

                text-sm

                text-white/90

                transition-colors
                duration-300

                hover:text-[#E8720F]
              "
            >
              info@reisagritrading.com
            </a>


            <a
              href="tel:+918298771036"

              class="
                block

                text-sm

                text-white/90

                transition-colors
                duration-300

                hover:text-[#E8720F]
              "
            >
              +91 82987 71036
            </a>

          </div>

        </div>


        <!-- ================================= -->
        <!-- CTA -->
        <!-- ================================= -->

        <div
          class="
            px-6
            pb-5

            sm:px-7
            sm:pb-5
          "
        >

          <a
            href="/pages/contact.html"

            class="
              group

              flex

              items-center
              justify-center

              gap-3

              rounded-xl

              bg-[#E8720F]

              px-6
              py-3.5

              text-sm

              font-semibold

              uppercase

              tracking-[0.15em]

              text-white

              transition-all
              duration-300

              hover:-translate-y-0.5

              hover:bg-[#F08B2F]

              hover:shadow-[0_15px_35px_rgba(232,114,15,.25)]
            "
          >

            Get Quote


            <svg
              xmlns="http://www.w3.org/2000/svg"

              class="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1
              "

              fill="none"
              viewBox="0 0 24 24"

              stroke="currentColor"
              stroke-width="2"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"

                d="M5 12h14M13 5l7 7-7 7"
              />

            </svg>

          </a>

        </div>


        <!-- ================================= -->
        <!-- Footer -->
        <!-- ================================= -->

        <div
          class="
            border-t
            border-white/10

            px-6
            py-4

            text-center

            sm:px-7
            sm:py-4
          "
        >

          <p
            class="
              text-[10px]

              text-white/35
            "
          >
            © 2026 Reis Agri Trading.
          </p>


          <p
            class="
              mt-1

              text-[9px]

              text-white/20
            "
          >
            Global Agricultural Commodity Exporter
          </p>

        </div>


      </aside>

    </div>
  `;
}
