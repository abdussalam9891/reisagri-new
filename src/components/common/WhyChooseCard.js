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

        overflow-hidden

        border
        border-[#E7E3DC]

        bg-white

        p-7

        shadow-[0_8px_30px_rgba(24,24,24,.04)]

        transition-all
        duration-500

        ease-[cubic-bezier(.22,1,.36,1)]

        hover:-translate-y-2

        hover:border-[#E8720F]/40

        hover:shadow-[0_24px_55px_rgba(232,114,15,.10)]

        rounded-tl-[8px]
        rounded-tr-[34px]
        rounded-br-[8px]
        rounded-bl-[34px]

        sm:p-8

        sm:rounded-tr-[42px]
        sm:rounded-bl-[42px]

        lg:p-9

        lg:rounded-tr-[52px]
        lg:rounded-bl-[52px]

        hover:rounded-tl-[34px]
        hover:rounded-tr-[8px]
        hover:rounded-br-[34px]
        hover:rounded-bl-[8px]
      "
    >

      <!-- ================================= -->
      <!-- Top Accent -->
      <!-- ================================= -->

      <span
        class="
          pointer-events-none

          absolute
          left-0
          top-0

          h-[3px]
          w-0

          bg-[#E8720F]

          transition-all
          duration-700

          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:w-full
        "
      ></span>


      <!-- ================================= -->
      <!-- Icon -->
      <!-- ================================= -->

      <div
        class="
          relative

          mb-8

          flex
          h-14
          w-14

          items-center
          justify-center

          overflow-hidden

          rounded-[16px]

          bg-[#FFF3E8]

          transition-all
          duration-500

          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:scale-105

          group-hover:rounded-[8px_20px_8px_20px]

          group-hover:bg-[#E8720F]
        "
      >

        <!-- Icon background detail -->

        <span
          class="
            pointer-events-none

            absolute
            -right-4
            -top-4

            h-10
            w-10

            rounded-full

            bg-[#E8720F]/10

            transition-transform
            duration-700

            group-hover:scale-[2.5]
          "
        ></span>


        <i
          data-lucide="${icon}"

          class="
            relative
            z-10

            h-6
            w-6

            text-[#E8720F]

            transition-all
            duration-500

            group-hover:scale-110

            group-hover:text-white
          "
        ></i>

      </div>


      <!-- ================================= -->
      <!-- Small Label -->
      <!-- ================================= -->




      <!-- ================================= -->
      <!-- Title -->
      <!-- ================================= -->

      <h3
        class="
          max-w-[300px]

          font-serif

          text-[1.55rem]

          leading-[1.12]

          tracking-[-0.02em]

          text-[#181818]

          transition-transform
          duration-500

          group-hover:translate-x-1

          sm:text-[1.65rem]
        "
      >
        ${title}
      </h3>


      <!-- ================================= -->
      <!-- Description -->
      <!-- ================================= -->

      <p
        class="
          mt-4

          max-w-[420px]

          text-[15px]

          leading-7

          text-[#666666]
        "
      >
        ${description}
      </p>


      

    </article>
  `;
}
