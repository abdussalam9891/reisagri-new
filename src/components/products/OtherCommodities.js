export function createOtherCommodities(data){

return `

<section
class="
bg-[#F8F7F4]
">

<div
class="
reveal reveal-up
mx-auto

max-w-7xl

px-5
py-8

sm:px-6

lg:px-8
">

<div class="max-w-3xl">



<h2
class="
reveal reveal-left
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

divide-y

divide-[#E8E8E8]
">

${data.products
.map(createCommodity)
.join("")}

</div>

</div>

</section>

`;

}



function createCommodity(item){

return`

<div
class="
group

grid

gap-12

py-12

transition-all

duration-300

hover:px-6

hover:bg-white
">

<div
class="
grid

items-start

gap-10

lg:grid-cols-[220px_1fr_auto]
">

<div>

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
data-lucide="${item.icon}"

class="
h-8

w-8

text-[#E8720F]

group-hover:text-white
">

</i>

</div>

</div>

<div>

<h3
class="
font-serif

text-3xl

text-[#181818]
">

${item.title}

</h3>

<p
class="
mt-6

max-w-3xl

leading-8

text-[#666666]
">

${item.description}

</p>

</div>

<div>

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

Export

</span>

</div>

</div>

</div>

`;

}
