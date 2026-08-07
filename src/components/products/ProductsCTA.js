export function createProductsCTA(data) {

  return `

<section
  class="
  reveal reveal-up
    overflow-hidden

    bg-[#181818]

    text-white
  "
>

  <div
    class="
      mx-auto

      max-w-7xl

      px-5

      py-24

      text-center

      sm:px-6

      lg:px-8

      lg:py-32
    "
  >

    <span
      class="
        inline-flex

        rounded-full

        bg-[#E8720F]/10

        px-5

        py-2

        text-xs

        font-semibold

        uppercase

        tracking-[0.18em]

        text-[#E8720F]
      "
    >

      Let's Work Together

    </span>

    <h2
      class="
        mt-2

        font-serif

        text-3xl

        leading-tight

        text-white

        md:text-4xl
      "
    >

      ${data.heading}

    </h2>

    <p
      class="
        mx-auto

        mt-8

        max-w-3xl

        leading-8

        text-white/70
      "
    >

      ${data.description}

    </p>

    <div
      class="
        mt-12

        flex

        flex-wrap

        justify-center

        gap-5
      "
    >

      <a
        href="${data.button.href}"

        class="
          inline-flex

          items-center

          gap-3

          rounded-full

          bg-[#E8720F]

          px-8

          py-4

          text-sm

          font-semibold

          uppercase

          tracking-[0.18em]

          transition-all

          duration-300

          hover:-translate-y-1

          hover:bg-[#F28D34]

          hover:shadow-[0_20px_40px_rgba(232,114,15,.25)]
        "
      >

        ${data.button.text}

        <i
          data-lucide="arrow-right"

          class="
            h-4

            w-4
          "
        ></i>

      </a>

      <a
        href="/pages/contact.html"

        class="
          inline-flex

          items-center

          gap-3

          rounded-full

          border

          border-white/20

          px-8

          py-4

          text-sm

          font-semibold

          uppercase

          tracking-[0.18em]

          transition-all

          duration-300

          hover:border-[#E8720F]

          hover:bg-white/5
        "
      >

        Contact Us

      </a>

    </div>

  </div>

</section>

`;

}
