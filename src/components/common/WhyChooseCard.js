export function createWhyChooseCard({
  icon,
  title,
  description,
}) {
  return `
    <article
      class="
        why-choose-card
        group

        relative

        flex
        flex-row
        items-start
        gap-4

        rounded-2xl

        border
        border-[#E7E3DC]

        bg-white

        p-5

        shadow-[0_8px_30px_rgba(24,24,24,.04)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1

        hover:border-[#E8720F]/35

        hover:shadow-[0_18px_40px_rgba(232,114,15,.10)]

        sm:flex-col
        sm:items-stretch
        sm:gap-0

        sm:p-7

        lg:p-8
      "
    >

      <!-- ================================= -->
      <!-- Bottom Accent -->
      <!-- ================================= -->

      <span
        class="
          pointer-events-none

          absolute
          left-5
          right-5
          bottom-0

          hidden
          sm:block

          h-px

          origin-left
          scale-x-0

          bg-[#E8720F]

          transition-transform
          duration-500
          ease-out

          group-hover:scale-x-100
        "
      ></span>


      <!-- ================================= -->
      <!-- Icon -->
      <!-- ================================= -->

      <div
        class="
          flex
          h-11
          w-11
          shrink-0

          items-center
          justify-center

          rounded-[10px]

          border
          border-[#E7E3DC]

          text-[#181818]

          transition-all
          duration-300
          ease-out

          group-hover:border-[#E8720F]

          group-hover:bg-[#E8720F]

          group-hover:text-white

          sm:mb-6
          sm:h-12
          sm:w-12
          sm:rounded-xl
        "
      >

        <i
          data-lucide="${icon}"

          class="
            h-5
            w-5

            sm:h-[22px]
            sm:w-[22px]
          "
        ></i>

      </div>


      <!-- ================================= -->
      <!-- Text -->
      <!-- ================================= -->

      <div
        class="
          min-w-0
        "
      >

        <h3
          class="
            font-serif

            text-[17px]
            leading-snug

            tracking-[-0.01em]

            text-[#181818]

            sm:text-[1.35rem]
          "
        >
          ${title}
        </h3>

        <p
          class="
            mt-1.5

            text-[13.5px]
            leading-6

            text-[#666666]

            sm:mt-3
            sm:text-[15px]
            sm:leading-7
          "
        >
          ${description}
        </p>

      </div>

    </article>
  `;
}
