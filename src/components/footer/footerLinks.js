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
          viewBox="0 0 32 32"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.52 1.73 6.49L3 29l6.69-1.75A13 13 0 1016 3zm0 23.63c-2.02 0-4-.54-5.74-1.57l-.41-.24-3.97 1.04 1.06-3.87-.27-.4A10.62 10.62 0 115.38 16 10.63 10.63 0 0116 5.38c5.86 0 10.62 4.76 10.62 10.62S21.86 26.62 16 26.62z"/>
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
        src="/public/assets/reisagri-logo-white.png"
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
