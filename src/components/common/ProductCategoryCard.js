export function createProductCategoryCard({

  title,

  description,

  image,

  href,

}) {

  return `

<a
  href="${href}"

  class="
    group

    relative

    block

    overflow-hidden

    rounded-[32px]

    bg-[#181818]

    shadow-sm

    transition-all
    duration-500

    hover:-translate-y-2

    hover:shadow-[0_28px_60px_rgba(0,0,0,.22)]
  "
>

  <!-- =====================================
       IMAGE
  ====================================== -->

  <div
    class="
      relative

      h-[440px]

      overflow-hidden
    "
  >

    <img
      src="${image}"
      alt="${title}"

      class="
        h-full
        w-full

        object-cover

        transition-transform
        duration-700

        group-hover:scale-110
      "
    />

    <!-- Dark Overlay -->

    <div
      class="
        absolute
        inset-0

        bg-gradient-to-t

        from-black/85

        via-black/35

        to-transparent

        transition-all
        duration-500

        group-hover:from-black/90
      "
    ></div>

    <!-- Orange Top Accent -->

    <div
      class="
        absolute

        left-0
        top-0

        h-[3px]
        w-0

        bg-[#E8720F]

        transition-all
        duration-500

        group-hover:w-full
      "
    ></div>

  </div>

  <!-- =====================================
       CONTENT
  ====================================== -->

  <div
    class="
      absolute

      inset-x-0
      bottom-0

      p-8
    "
  >

    <!-- Category -->

    <span
      class="
        text-xs

        font-semibold

        uppercase

        tracking-[0.24em]

        text-[#E8720F]
      "
    >

      Commodity

    </span>

    <!-- Title -->

    <h3
      class="
        mt-4

        font-serif

        text-4xl

        text-white
      "
    >

      ${title}

    </h3>

    <!-- Description -->

    <p
      class="
        mt-5

        max-w-[90%]

        leading-8

        text-white/75
      "
    >

      ${description}

    </p>

    <!-- Bottom Row -->

    <div
      class="
        mt-8

        flex

        items-center
        justify-between
      "
    >

      <span
        class="
          text-sm

          font-medium

          uppercase

          tracking-[0.18em]

          text-white
        "
      >

        Explore

      </span>

      <div
        class="
          flex

          h-12
          w-12

          items-center
          justify-center

          rounded-full

          border
          border-white/20

          bg-white/10

          backdrop-blur

          transition-all
          duration-300

          group-hover:border-[#E8720F]

          group-hover:bg-[#E8720F]
        "
      >

        <i
          data-lucide="arrow-up-right"

          class="
            h-5
            w-5

            text-white

            transition-transform
            duration-300

            group-hover:rotate-45
          "
        ></i>

      </div>

    </div>

  </div>

</a>

`;

}
