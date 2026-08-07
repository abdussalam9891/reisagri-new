export function createExportPackaging(data){

return `

<section
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

<div class="max-w-3xl">

<div
class="
reveal reveal-left
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
reveal reveal-left
mt-8

font-serif

text-5xl

leading-[1.08]

text-[#181818]
">

${data.title}

</h2>

<p
class="
reveal reveal-left
mt-8

leading-9

text-[#666666]
">

${data.description}

</p>

</div>

<div
class="
reveal reveal-right
mt-24

grid

gap-8

lg:grid-cols-2
">

${data.cards.map(createCard).join("")}

</div>

</div>

</section>

`;

}


function createCard(card){

return`

<div
class="
group

rounded-[34px]

border

border-[#ECECEC]

bg-[#FAFAF8]

p-10

transition-all

duration-500

hover:-translate-y-2

hover:border-[#E8720F]

hover:shadow-[0_25px_60px_rgba(232,114,15,.10)]
">

<div
class="
flex

items-center

justify-between
">

<h3
class="
font-serif

text-3xl

text-[#181818]
">

${card.title}

</h3>

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
data-lucide="${card.icon}"

class="
h-8

w-8

text-[#E8720F]

group-hover:text-white
">

</i>

</div>

</div>

<ul
class="
mt-10

space-y-5
">

${card.items.map(item=>`

<li
class="
flex

items-center

gap-4
">

<div
class="
flex

h-8

w-8

items-center

justify-center

rounded-full

bg-[#FFF6EE]
">

<i
data-lucide="check"

class="
h-4

w-4

text-[#E8720F]
">

</i>

</div>

<span
class="
leading-7

text-[#555]
">

${item}

</span>

</li>

`).join("")}

</ul>

</div>

`;

}
