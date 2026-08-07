export function createPackagingSection(data) {

  return `

<section
class="
bg-[#FAFAF8]
">

<div
class="
reveal reveal-up
mx-auto

max-w-7xl

px-5

py-20

sm:px-6

lg:px-8

lg:py-28
">

<div
class="
max-w-3xl
">

<span
class="
inline-flex

rounded-full

bg-[#FFF3E8]

px-5
py-2

text-xs

font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
">

${data.badge}

</span>

<h2
class="
mt-2

font-serif

text-4xl

leading-tight

text-[#181818]

md:text-5xl
">

${data.title}

</h2>

<p
class="
mt-8

leading-8

text-[#666666]
">

${data.description}

</p>

</div>

<div
class="
mt-20

grid

gap-8

lg:grid-cols-2
">

${data.cards.map(card => `

<div
class="
group

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

hover:shadow-[0_25px_60px_rgba(232,114,15,.12)]
">

<div
class="
flex

items-center

justify-between
">

<div>

<h3
class="
font-serif

text-3xl

text-[#181818]
">

${card.title}

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
data-lucide="${card.icon}"

class="
h-8
w-8

text-[#E8720F]

transition-colors

duration-300

group-hover:text-white
"></i>

</div>

</div>

<ul
class="
mt-10

space-y-5
">

${card.items.map(item => `

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
"></i>

</div>

<span
class="
leading-7

text-[#666666]
">

${item}

</span>

</li>

`).join("")}

</ul>

</div>

`).join("")}

</div>

</div>

</section>

`;

}
