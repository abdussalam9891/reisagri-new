export function createRiceSection(data) {

  return `

<section
  class="
    bg-white
  "
>

  <div
    class="
      mx-auto

      max-w-7xl

      px-5

      py-6

      sm:px-6

      lg:px-8

      lg:py-12
    "
  >

    <div class="max-w-3xl">



      <h2
        class="
          font-serif

          text-4xl

          leading-tight

          text-[#181818]

          md:text-5xl
        "
      >

        ${data.title}

      </h2>

      <p
        class="
          mt-2

          leading-8

          text-[#666666]
        "
      >

        ${data.description}

      </p>

    </div>

    ${createRiceCategory(
      "Non-Basmati Rice",
      data.nonBasmati
    )}

    ${createRiceCategory(
      "Basmati Rice",
      data.basmati
    )}

  </div>

</section>

`;

}



function createRiceCategory(
  heading,
  varieties
){

return `

<div class="mt-24">

<h3

class="

mb-12

font-serif

text-3xl

text-[#181818]

"

>

${heading}

</h3>

<div

class="

grid

gap-6

md:grid-cols-2

"

>

${varieties
.map(createRiceVariety)
.join("")}

</div>

</div>

`;

}



function createRiceVariety(variety) {

return `

<div
class="
group

relative

overflow-hidden

rounded-[32px]

border
border-[#ECECEC]

bg-white

p-8

shadow-sm

transition-all
duration-500

hover:-translate-y-2

hover:border-[#E8720F]

hover:shadow-[0_25px_55px_rgba(232,114,15,.12)]
">

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
"></div>

<div
class="
flex

items-start

justify-between

gap-6
">

<div>

<p
class="
text-xs

font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
">

Rice Variety

</p>

<h3
class="
mt-3

font-serif

text-3xl

leading-tight

text-[#181818]
">

${variety.name}

</h3>

</div>

<div
class="
flex

h-16

w-16

items-center

justify-center

rounded-2xl

bg-[#FFF6EE]

transition-all
duration-300

group-hover:bg-[#E8720F]
">

<i
data-lucide="wheat"

class="
h-8
w-8

text-[#E8720F]

transition-all
duration-300

group-hover:text-white
group-hover:rotate-6
"></i>

</div>

</div>

<div
class="
mt-8

flex

flex-wrap

gap-3
">

${variety.variants.map(variant => `

<span
class="
rounded-full

border
border-[#ECECEC]

bg-[#FAFAF8]

px-5
py-2.5

text-xs

font-semibold

uppercase

tracking-[0.12em]

text-[#555555]

transition-all
duration-300

group-hover:border-[#E8720F]/40
">

${variant}

</span>

`).join("")}

</div>

</div>

`;

}
