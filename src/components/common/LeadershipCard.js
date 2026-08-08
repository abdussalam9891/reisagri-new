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
    ceo-image-wrapper

    group
    relative

    overflow-hidden

    rounded-tl-[8px]
    rounded-tr-[72px]
    rounded-br-[8px]
    rounded-bl-[72px]

    bg-black

    transition-all
    duration-500

    ease-[cubic-bezier(0.22,1,0.36,1)]

    hover:-translate-y-1

    hover:rounded-tl-[48px]
    hover:rounded-tr-[8px]
    hover:rounded-br-[48px]
    hover:rounded-bl-[8px]

    
  "
>

  <img
    src="${image}"
    alt="${alt}"

    loading="lazy"
    decoding="async"

    class="
      block

      aspect-[4/5]

      w-full

      object-cover

      select-none

      transition-transform
      duration-700

      ease-out

      group-hover:scale-[1.035]
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
