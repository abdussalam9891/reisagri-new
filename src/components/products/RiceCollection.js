export function createRiceCollection(data){

return `

<section
id="riceSection"

class="
bg-white
">

<div
class="
reveal reveal-up
mx-auto

max-w-7xl

px-5

py-28

sm:px-6

lg:px-8
">

<div class=" max-w-3xl">

<div
class="
inline-flex

rounded-full

bg-[#FFF3E8]

px-5

py-2

mb-10

text-xs

font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
">

${data.badge}

</div>

<h2
class="
mt-2

font-serif

text-5xl

leading-[1.08]

text-[#181818]
">

${data.title}

</h2>

<p
class="
mt-8

leading-9

text-[#666666]
">

${data.description}

</p>

</div>

<div class="mt-24">

${createCategory(
"Non-Basmati Rice",
data.nonBasmati
)}

${createCategory(
"Basmati Rice",
data.basmati
)}

</div>

</div>

</section>

`;

}



function createVariety(item){

return `

<div
class="
group

grid

gap-8

py-10

transition-all

duration-300

hover:bg-[#FAFAF8]

lg:grid-cols-[320px_1fr]
">

<div>

<h4
class="
font-serif

text-3xl

text-[#181818]

transition-colors

duration-300

group-hover:text-[#E8720F]
">

${item.name}

</h4>

</div>

<div
class="
flex

flex-wrap

gap-4
">

${item.variants.map(variant=>`

<span
class="
rounded-full

border

border-[#ECECEC]

bg-white

px-5

py-3

text-sm

font-medium

transition-all

duration-300

group-hover:border-[#E8720F]

group-hover:bg-[#FFF6EE]
">

${variant}

</span>

`).join("")}

</div>

</div>

`;

}
