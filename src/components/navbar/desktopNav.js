import { NAVIGATION } from "../../constants/navigation.js";

export function createDesktopNav(theme = "light") {
  const textColor =
    theme === "dark"
      ? "text-[#181818]"
      : "text-white";

  const navTextColor =
    theme === "dark"
      ? "text-[#181818]/90"
      : "text-white/90";

  const navLinks = NAVIGATION.map(
    (item) => `
      <li>
        <a
          href="${item.href}"
          data-nav="${item.slug}"
          class="
            relative

            py-2

            text-[13px]
            font-medium
            uppercase
            tracking-[0.18em]

            navbar-text
            ${navTextColor}

            transition-colors
            duration-300

            hover:text-[#E8720F]

            after:absolute
            after:left-0
            after:bottom-0
            after:h-[2px]
            after:w-0
            after:bg-[#E8720F]

            after:transition-all
            after:duration-300

            hover:after:w-full
          "
        >
          ${item.label}
        </a>
      </li>
    `
  ).join("");

  return `
<nav
  id="navbar"
  class="
    h-24

    bg-transparent

    border-b
    border-transparent

    transition-all
    duration-500
  "
>

  <div
    class="
      mx-auto

      flex
      h-full
      max-w-7xl

      items-center
      justify-between

      px-5
      lg:px-8
    "
  >

    <!-- Mobile Menu -->

    <button
      id="menuBtn"
      type="button"
      aria-label="Open Menu"
      class="
        flex
        items-center
        justify-center

        navbar-text
        ${textColor}

        transition-colors
        duration-300

        hover:text-[#E8720F]

        lg:hidden
      "
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      >
        <line x1="4" y1="6" x2="20" y2="6"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <line x1="4" y1="18" x2="15" y2="18"/>
      </svg>

    </button>

    <!-- Logo -->

    <a
      href="/index.html"
      class="
        flex
        items-center

        navbar-text

        ${textColor}
      "
    >

      <img
  id="navbarLogo"

  src="/public/assets/reisagri-logo-white.png"

  alt="REISAGRI"

  class="
    h-32
    w-auto
    object-contain
  "
/>
    </a>

    <!-- Desktop Navigation -->

    <ul
      class="
        hidden

        items-center

        gap-12

        lg:flex
      "
    >
      ${navLinks}
    </ul>

    <!-- CTA -->
        <div
      class="
        hidden
        lg:ml-10
    lg:flex
      "
    >

<a
  id="navbarCTA"

  href="/pages/contact.html"

  class="
    group

    relative

    inline-flex
    items-center
    justify-center

    gap-2

    overflow-hidden

    rounded-lg

    border
    border-[#E8720F]

    px-7
    py-3.5

    text-[13px]
    font-semibold

    uppercase

    tracking-[0.18em]

    text-white

    transition-all
    duration-500

    ease-[cubic-bezier(0.22,1,0.36,1)]

    hover:rounded-[4px_22px_4px_22px]

    hover:-translate-y-1

    hover:border-[#F08B2F]

    hover:shadow-[0_18px_40px_rgba(232,114,15,.28)]
  "
>

  <!-- Fill -->

  <span
    class="
      absolute
      inset-0

      z-0

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

    Get Quote

    <i
      data-lucide="arrow-right"

      class="
        h-4
        w-4

        transition-transform
        duration-300

        group-hover:translate-x-1.5
      "
    ></i>

  </span>

</a>

    </div>

  </div>

</nav>

`;
}
