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



  <h2
    class="
      mt-4

      font-serif

      text-[2rem]

      leading-tight

      text-[#181818]

      sm:text-[2.5rem]

      lg:text-5xl
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
