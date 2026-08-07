export function createFAQItem({

  question,

  answer,

}, index) {

  return `

<div
class="
faq-item

overflow-hidden

border-b
border-[#E8E8E8]

transition-all
duration-500
"
>

  <!-- =====================================
       BUTTON
  ====================================== -->

  <button

    type="button"

    data-index="${index}"

    class="
      faq-trigger

      flex

      w-full

      items-center
      justify-between

      gap-8

      py-8

      text-left

      group
    "

  >

    <!-- Question -->

    <h3
      class="
      reveal reveal-left
        faq-title

        text-xl

        font-medium

        leading-relaxed

        text-[#181818]

        transition-colors
        duration-300
      "
    >

      ${question}

    </h3>

    <!-- Icon -->

    <div
      class="
        faq-icon

        flex

        h-11
        w-11

        shrink-0

        items-center
        justify-center

        rounded-full

        border
        border-[#E5E5E5]

        bg-white

        transition-all
        duration-500

        ease-[cubic-bezier(0.22,1,0.36,1)]
      "
    >

      <i
        data-lucide="plus"

        class="
          h-5
          w-5

          text-[#181818]

          transition-all
          duration-500
        "
      ></i>

    </div>

  </button>

  <!-- =====================================
       CONTENT
  ====================================== -->

  <div
    class="
      faq-content

      grid

      grid-rows-[0fr]

      transition-all
      duration-500

      ease-[cubic-bezier(0.22,1,0.36,1)]
    "
  >

    <div class="overflow-hidden reveal reveal-left">

      <p
        class="
          pb-8

          pr-16

          leading-8

          text-[#666666]
        "
      >

        ${answer}

      </p>

    </div>

  </div>

</div>

`;

}
