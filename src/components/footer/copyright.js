export function createCopyright() {
  const year = new Date().getFullYear();

  return `
    <div
      class="
        grid
        grid-cols-1

        items-center

        gap-4

        border-t
        border-white/10

        px-6
        py-5

        text-center

        lg:grid-cols-3

        lg:px-8

        lg:text-left
      "
    >

      <!-- Copyright -->

      <p
        class="
          text-xs
          text-white/40

          lg:justify-self-start
        "
      >
        © ${year} Reis Agri Trading. All rights reserved.
      </p>


      <!-- Legal -->

      <nav
        aria-label="Legal"
        class="
          lg:justify-self-center
        "
      >
        <ul
          class="
            flex
            flex-wrap

            items-center
            justify-center

            gap-x-6
            gap-y-2

            text-xs
          "
        >

          <li>
            <a
              href="/pages/privacy-policy.html"
              class="
                text-white/40

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
                text-white/40

                transition-colors
                duration-300

                hover:text-[#E8720F]
              "
            >
              Terms & Conditions
            </a>
          </li>

          <li>
            <a
              href="/pages/disclaimer.html"
              class="
                text-white/40

                transition-colors
                duration-300

                hover:text-[#E8720F]
              "
            >
              Disclaimer
            </a>
          </li>

        </ul>
      </nav>


      <!-- Developer -->

      <p
        class="
          text-xs
          text-white/30

          lg:justify-self-end
        "
      >
        Designed & Developed by

        <a
          href="https://wa.me/919006143335"
          target="_blank"
          rel="noopener noreferrer"

          class="
            ml-1

            text-white/45

            transition-colors
            duration-300

            hover:text-[#E8720F]
          "
        >
          Abdus
        </a>
      </p>

    </div>
  `;
}
