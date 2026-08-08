import { NAVIGATION, SOCIAL_LINKS } from "../../constants/navigation.js";

export function createFooterLinks() {
  const navigateLinks = NAVIGATION.map(
    (item) => `
      <li>
        <a
          href="${item.href}"
          class="
            text-white/60
            transition-colors
            duration-300
            hover:text-[#E8720F]
          "
        >
          ${item.label}
        </a>
      </li>
    `
  ).join("");

  const socialLinks = SOCIAL_LINKS.map((social) => {
    const icons = {
      linkedin: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.12c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V22h-3V8z"/>
        </svg>
      `,

      whatsapp: `
       <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  class="h-5 w-5"
  aria-hidden="true"
>
  <path
    d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.35 11.91-11.92 0-3.18-1.24-6.17-3.45-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.9 9.9 0 0 1-1.52-5.27C2.16 6.45 6.6 2 12.05 2c2.64 0 5.12 1.03 6.99 2.9a9.86 9.86 0 0 1 2.9 7.01c0 5.46-4.44 9.89-9.88 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z"
  />
</svg>
      `,

      email: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16v12H4z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4 7 8 6 8-6"
          />
        </svg>
      `,
    };

    return `
      <a
        href="${social.href}"
        aria-label="${social.label}"
        target="_blank"
        rel="noopener noreferrer"
        class="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          text-white/70

          transition-all
          duration-300

          hover:border-[#E8720F]
          hover:bg-[#E8720F]/10
          hover:text-[#E8720F]
        "
      >
        ${icons[social.slug]}
      </a>
    `;
  }).join("");

  return `
<section class="bg-[#181818]">

  <div
    class="
      mx-auto
      grid
      max-w-7xl

      gap-14

      px-6
      py-12

      md:grid-cols-2

      lg:grid-cols-[1.6fr_1fr_1fr_1fr]
      lg:gap-16
      lg:px-8
      lg:py-14
    "
  >

    <!-- Brand -->

    <div>

      <img
        src="/public/assets/reisagri_trading_white.svg"
        alt="REISAGRI"
        class="
          h-32
          w-auto
          object-contain
        "
      />

      <p
        class="
          mt-6
          max-w-sm

          text-sm
          leading-7

          text-white/60
        "
      >
        Connecting trusted producers with global buyers through reliable
        sourcing, quality assurance and seamless agricultural commodity
        exports.
      </p>

      <div
        class="
          mt-8
          flex
          items-center
          gap-3
        "
      >
        ${socialLinks}
      </div>

    </div>

        <!-- Navigate -->

    <div class="footer-section">

      <button
        class="
          footer-toggle
          flex
          w-full
          items-center
          justify-between
          py-2
          lg:cursor-default
        "
      >

        <span
          class="
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white
          "
        >
          Navigate
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="
            footer-chevron
            h-5
            w-5
            text-white/60
            transition-transform
            duration-300
            lg:hidden
          "
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>

      </button>

      <ul
        class="
          footer-content
          hidden
          space-y-4
          pt-5
          text-sm
          lg:block
        "
      >
        ${navigateLinks}
      </ul>

    </div>

    <!-- Contact -->

    <div class="footer-section">

      <button
        class="
          footer-toggle
          flex
          w-full
          items-center
          justify-between
          py-2
          lg:cursor-default
        "
      >

        <span
          class="
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white
          "
        >
          Contact
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="
            footer-chevron
            h-5
            w-5
            text-white/60
            transition-transform
            duration-300
            lg:hidden
          "
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>

      </button>

      <div
        class="
          footer-content
          hidden
          space-y-6
          pt-5
          text-sm
          lg:block
        "
      >

        <!-- Address -->

        <div>

          <h4
            class="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            Address
          </h4>

          <p
            class="
              mt-3
              leading-7
              text-white/60
            "
          >
            Unit No. TK1, Third Floor<br>
Living Style Mall, Jasola<br>
New Delhi – 110025<br>
India
          </p>

        </div>

        <!-- Phone -->

        <div>

          <h4
            class="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            Phone
          </h4>

          <a
            href="tel:+918298771036"
            class="
              mt-3
              inline-block
              text-white/60
              transition-colors
              duration-300
              hover:text-[#E8720F]
            "
          >
            +91 82987 71036
          </a>

        </div>

        <!-- Email -->

        <div>

          <h4
            class="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-white
            "
          >
            Email
          </h4>

          <a
            href="mailto:info@reisagritrading.com"
            class="
              mt-3
              inline-block
              text-white/60
              transition-colors
              duration-300
              hover:text-[#E8720F]
            "
          >
            info@reisagritrading.com
          </a>

        </div>

      </div>

    </div>

        <!-- Company -->

    <div class="footer-section">

      <button
        class="
          footer-toggle
          flex
          w-full
          items-center
          justify-between
          py-2
          lg:cursor-default
        "
      >

        <span
          class="
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white
          "
        >
          Company
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="
            footer-chevron
            h-5
            w-5
            text-white/60
            transition-transform
            duration-300
            lg:hidden
          "
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>

      </button>

      <ul
        class="
          footer-content
          hidden
          space-y-4
          pt-5
          text-sm
          lg:block
        "
      >

        <li>
          <a
            href="/pages/about.html"
            class="
              text-white/60
              transition-colors
              duration-300
              hover:text-[#E8720F]
            "
          >
            About Us
          </a>
        </li>



        <li>
          <a
            href="/pages/contact.html"
            class="
              text-white/60
              transition-colors
              duration-300
              hover:text-[#E8720F]
            "
          >
            Contact
          </a>
        </li>

        <li>
          <a
            href="/pages/privacy-policy.html"
            class="
              text-white/60
              transition-colors
              duration-300
              hover:text-[#E8720F]
            "
          >
            Privacy Policy
          </a>
        </li>

        <li>
          <a
            href="/pages/terms-and-conditions.html"
            class="
              text-white/60
              transition-colors
              duration-300
              hover:text-[#E8720F]
            "
          >
            Terms &amp; Conditions
          </a>
        </li>

      </ul>

    </div>

  </div>

</section>
`;
}
