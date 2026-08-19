export function createSectionHeading({

  badge,

  title,

  description,

  align = "center",

}) {

  const alignment =
    align === "left"
      ? "text-left mx-0"
      : "text-center mx-auto";

  return `

<div
  class="


    max-w-3xl

    ${alignment}
  "
>

  ${
    badge
      ? `
  <span
    class="
      inline-flex
      items-center
      gap-2

      text-[12px]
      font-semibold
      uppercase

      tracking-[0.14em]

      text-[#E8720F]
    "
  >
    <span
      class="
        h-1.5
        w-1.5

        rounded-full

        bg-[#E8720F]
      "
    ></span>
    ${badge}
  </span>
`
      : ""
  }

  <h2
    class="
      mt-4

      font-serif

      text-[2rem]

      leading-tight

      text-[#181818]

      sm:text-[2rem]

      lg:text-4xl
    "
  >

    ${title.replace(/\n/g, "<br>")}

  </h2>

  ${
    description
      ? `
  <p
    class="
      mx-auto

      mt-4

      max-w-2xl

      leading-8

      text-[#666666]
    "
  >

    ${description}

  </p>
`
      : ""
  }

</div>

`;

}
