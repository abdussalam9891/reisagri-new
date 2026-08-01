export function createFeatureCard({

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

    rounded-[30px]

    ${
      dark
        ? "bg-[#181818] text-white"
        : "border border-[#ECECEC] bg-white"
    }

    p-6

    sm:p-7

    lg:p-8

    shadow-sm

    transition-all
    duration-500

    hover:-translate-y-2
    hover:scale-[1.02]

    ${
      dark
        ? "hover:shadow-[0_30px_60px_rgba(0,0,0,.35)]"
        : "hover:border-[#E8720F]/60 hover:shadow-[0_22px_45px_rgba(232,114,15,.12)]"
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

      h-14
      w-14

      items-center
      justify-center

      rounded-2xl

      ${
        dark
          ? "bg-white/10"
          : "bg-[#FFF6EE]"
      }

      transition-all
      duration-300

      ${
        dark
          ? ""
          : "group-hover:bg-[#E8720F]"
      }
    "
  >

    <i
      data-lucide="${icon}"

      class="
        h-7
        w-7

        text-[#E8720F]

        ${
          dark
            ? ""
            : "group-hover:text-white"
        }

        transition-colors
        duration-300
      "
    ></i>

  </div>

  <!-- Title -->

  <h3
    class="
      mt-6

      font-serif

      text-2xl

      transition-colors
      duration-300

      ${
        dark
          ? "text-white"
          : "text-[#181818] group-hover:text-[#E8720F]"
      }
    "
  >

    ${title}

  </h3>

  <!-- Description -->

  <p
    class="
      mt-4

      text-[15px]

      leading-7

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
