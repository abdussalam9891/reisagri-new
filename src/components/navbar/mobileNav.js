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

            rounded-2xl

            px-5
            py-4

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
          <span>${item.label}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-5
              w-5

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
<div
  id="mobileDrawer"
  class="
    fixed
    inset-0
    z-[999]
    hidden
  "
>

  <!-- Backdrop -->

  <div
    id="mobileBackdrop"
    class="
      absolute
      inset-0

      bg-black/60
      backdrop-blur-sm

      opacity-0

      transition-opacity
      duration-300
    "
  ></div>

  <!-- Drawer -->

  <aside
    id="mobilePanel"
    class="
      absolute

      left-4
      top-4
      bottom-4

      w-[340px]
      max-w-[calc(100vw-2rem)]

      overflow-y-auto

      rounded-3xl

      border
      border-white/10

      bg-[#181818]

      shadow-2xl

      -translate-x-[120%]

      transition-transform
      duration-300

      no-scrollbar
    "
  >

    <!-- Header -->

    <div
      class="
        flex
        items-center
        justify-between

        border-b
        border-white/10

        px-6
        py-6
      "
    >

      <div>

        <h2
          class="
            font-serif
            text-2xl
            text-white
          "
        >
          REISAGRI
        </h2>

        <p
          class="
            mt-1

            text-[10px]
            uppercase
            tracking-[0.25em]

            text-[#E8720F]
          "
        >
          Global Commodities
        </p>

      </div>

      <button
        id="closeDrawerBtn"
        type="button"
        aria-label="Close Menu"
        class="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          text-white

          transition

          hover:bg-white/5
          hover:text-[#E8720F]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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

    <!-- Navigation -->

    <nav class="px-4 py-6">

      <ul class="space-y-2">

        ${navigation}

      </ul>

    </nav>

    <!-- Contact -->

    <div
      class="
        border-t
        border-white/10

        px-6
        py-6
      "
    >

      <p
        class="
          text-xs
          uppercase
          tracking-[0.25em]

          text-white/40
        "
      >
        Contact
      </p>

      <div class="mt-5 space-y-4">

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
          href="tel:+911234567890"
          class="
            block

            text-sm

            text-white/90

            transition-colors
            duration-300

            hover:text-[#E8720F]
          "
        >
          +91 12345 67890
        </a>

      </div>

    </div>

    <!-- CTA -->

    <div class="px-6 pb-8">

      <a
        href="/pages/contact.html"
        class="
          flex
          items-center
          justify-center

          rounded-xl

          bg-[#E8720F]

          py-4

          text-sm
          font-semibold
          uppercase
          tracking-[0.15em]

          text-white

          transition-all
          duration-300

          hover:bg-[#cf670d]
        "
      >
        Get Quote
      </a>

    </div>

    <!-- Footer -->

    <div
      class="
        border-t
        border-white/10

        px-6
        py-6
        text-center
      "
    >

      <p class="text-xs text-white/40">
        © 2026 REISAGRI
      </p>

      <p class="mt-2 text-[11px] text-white/25">
        Global Agricultural Commodity Exporter
      </p>

    </div>

  </aside>

</div>
`;
}
