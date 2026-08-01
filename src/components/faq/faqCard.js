export function createFaqCard(faq) {
  return `
    <div
      class="
        reveal
        faq-item

        overflow-hidden

        rounded-2xl

        border
        border-[#E5E7EB]

        bg-white

        transition-all
        duration-300

        hover:border-[#E8720F]/30
        hover:shadow-lg
      "
    >

      <!-- Question -->

      <button
        class="
          faq-toggle

          flex
          w-full

          items-center
          justify-between

          gap-6

          px-7
          py-6

          text-left
        "
      >

        <h3
          class="
            text-lg
            font-semibold
            leading-7

            text-[#181818]
          "
        >
          ${faq.question}
        </h3>

        <svg
          class="
            faq-icon

            h-5
            w-5

            shrink-0

            text-[#E8720F]

            transition-transform
            duration-300
          "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 5v14M5 12h14"
          />
        </svg>

      </button>

      <!-- Answer -->

      <div
        class="
          faq-content

          hidden

          border-t
          border-[#EEF1EF]

          px-7
          py-6
        "
      >

        <p
          class="
            leading-8

            text-[#5E6663]
          "
        >
          ${faq.answer}
        </p>

      </div>

    </div>
  `;
}
