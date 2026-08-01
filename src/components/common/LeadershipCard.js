export function createLeadershipCard({

  image,

  alt,

  heading,

  paragraphs,

  quote,

  name,

  designation,

}) {

  return `

<div
  class="
    grid

    items-start

    gap-14

    lg:grid-cols-[420px_1fr]
    lg:gap-20
  "
>

  <!-- =====================================
       LEFT COLUMN
  ====================================== -->

  <div>

    <!-- CEO IMAGE -->

    <div
  class="
    group

    overflow-hidden

    rounded-[32px]

    border
    border-transparent

    bg-white

    shadow-xl

    transition-all
    duration-500

    hover:-translate-y-2
    hover:border-[#E8720F]/60
    hover:shadow-[0_28px_60px_rgba(232,114,15,.15)]
  "
>

      <img
        src="${image}"
        alt="${alt}"

        class="
          aspect-[4/5]

          w-full

          object-cover

          transition-transform
          duration-700

          group-hover:scale-105
        "
      />

    </div>

    <!-- EXECUTIVE INFO -->

    <div
      class="
        mt-8

        border-t
        border-[#ECECEC]

        pt-6

        text-center

        lg:text-left
      "
    >

      <h3
        class="
          text-[30px]

          font-semibold

          text-[#181818]
        "
      >

        ${name}

      </h3>

      <p
        class="
          mt-2

          text-sm

          font-medium

          uppercase

          tracking-[0.24em]

          text-[#E8720F]
        "
      >

        ${designation}

      </p>

    </div>

  </div>

  <!-- =====================================
       RIGHT COLUMN
  ====================================== -->

  <div>

    <h2
      class="
        font-serif

        text-[2rem]

        leading-tight

        text-[#181818]

        sm:text-[2.5rem]

        lg:text-5xl
      "
    >

      ${heading.replace(/\n/g,"<br>")}

    </h2>

    ${paragraphs.map(paragraph => `

      <p
        class="
          mt-8

          leading-8

          text-[#666666]
        "
      >

        ${paragraph}

      </p>

    `).join("")}

    <!-- Quote -->

    <div
      class="
        group

        relative

        mt-12

        overflow-hidden

        rounded-[30px]

        border
        border-[#ECECEC]

        bg-white

        p-8

        shadow-sm

        transition-all
        duration-500

        hover:-translate-y-1

        hover:border-[#E8720F]/60

        hover:shadow-[0_20px_45px_rgba(232,114,15,.12)]
      "
    >

      <!-- Accent -->

      <div
        class="
          absolute

          left-0
          top-0

          h-1
          w-0

          bg-[#E8720F]

          transition-all
          duration-500

          group-hover:w-full
        "
      ></div>

      <i
        data-lucide="quote"

        class="
          mb-5

          h-9
          w-9

          text-[#E8720F]
        "
      ></i>

      <p
        class="
          font-serif

          text-2xl

          italic

          leading-relaxed

          text-[#181818]
        "
      >

        "${quote}"

      </p>

    </div>

  </div>

</div>

`;

}
