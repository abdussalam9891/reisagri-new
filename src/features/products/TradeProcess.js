export function createTradeProcess(data){

return `

<section
class="
bg-[#F8F7F4]
">

<div
class="
mx-auto

max-w-7xl

px-5
py-8

sm:px-6

lg:px-8
">

<div class="max-w-3xl">

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
mt-4

leading-9

text-[#666666]
">

${data.description}

</p>

</div>

<div
class="
relative

mt-8

grid

gap-8

lg:grid-cols-4
">

${data.steps.map((step,index)=>

createStep(step,index,data.steps.length)

).join("")}

</div>

</div>

</section>

`;

}





function createStep(
step,
index,
total
){

return `

<div
class="
group

relative
">

<div
class="
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

data-lucide="${step.icon}"

class="
h-8

w-8

text-[#E8720F]

transition-colors

duration-300

group-hover:text-white
">

</i>

</div>

<span
class="
font-serif

text-5xl

text-[#ECECEC]
">

0${index+1}

</span>

</div>

<h3
class="
mt-8

font-serif

text-3xl

leading-tight

text-[#181818]
">

${step.title}

</h3>

<p
class="
mt-5

leading-8

text-[#666666]
">

${step.description}

</p>

</div>

${
index!==total-1?

`

<div
class="
absolute

right-[-28px]

top-1/2

hidden

-lg:translate-y-1/2

lg:block
">

<i

data-lucide="arrow-right"

class="
h-8

w-8

text-[#E8720F]/40
">

</i>

</div>

`

:

""

}

</div>

`;

}
