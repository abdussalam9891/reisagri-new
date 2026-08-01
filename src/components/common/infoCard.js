export function createInfoCard({

  badge,

  title,

  description,

  icon,

  variant = "light",

}) {

  const dark = variant === "dark";

  return `

<div
  class="
    

    group

    relative
    overflow-hidden

    rounded-[32px]

    ${
      dark
        ? "bg-[#181818] text-white"
        : "border border-[#ECECEC] bg-white"
    }

    p-8

    sm:p-10

    shadow-sm

    transition-all
    duration-500

    hover:-translate-y-2

    ${
      dark
        ? "hover:shadow-[0_30px_60px_rgba(0,0,0,.35)]"
        : "hover:border-[#E8720F]/60 hover:shadow-[0_25px_50px_rgba(232,114,15,.10)]"
    }
  "
>

  <!-- Top Accent -->

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

  <!-- Icon -->

  <div
    class="
      flex

      h-16
      w-16

      items-center
      justify-center

      rounded-2xl

      ${
        dark
          ? "bg-white/10"
          : "bg-[#FFF6EE]"
      }
    "
  >

    <i
      data-lucide="${icon}"

      class="
        h-8
        w-8

        text-[#E8720F]
      "
    ></i>

  </div>

  <!-- Badge -->

  <span
    class="
      mt-8

      inline-block

      text-xs
      font-semibold

      uppercase

      tracking-[0.22em]

      text-[#E8720F]
    "
  >

    ${badge}

  </span>

  <!-- Title -->

  <h3
    class="
      mt-4

      font-serif

      text-3xl

      leading-tight

      ${
        dark
          ? "text-white"
          : "text-[#181818]"
      }
    "
  >

    ${title.replace(/\n/g, "<br>")}

  </h3>

  <!-- Description -->

  <p
    class="
      mt-6

      leading-8

      ${
        dark
          ? "text-white/75"
          : "text-[#666666]"
      }
    "
  >

    ${description}

  </p>

</div>

`;

}
