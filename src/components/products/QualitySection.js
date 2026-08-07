export function createQualitySection(data){

return `

<section
class="
bg-[#FAFAF8]
">

<div
class="
mx-auto

max-w-7xl

px-5
py-28

sm:px-6

lg:px-8
">

<div
class="
grid

items-center

gap-24

lg:grid-cols-[1fr_.9fr]
">

<!-- LEFT -->

<div class="reveal reveal-left">

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

max-w-2xl

leading-9

text-[#666666]
">

${data.description}

</p>

<div
class="
mt-14

grid

gap-5

sm:grid-cols-2
">

${data.points.map(createPoint).join("")}

</div>

</div>

<!-- IMAGE -->

<div
class="
group

relative

overflow-hidden

rounded-[36px]
">

<img

src="${data.image}"

alt="${data.imageAlt}"

class="
h-[620px]

w-full

object-cover

transition-transform

duration-700

group-hover:scale-105
"/>

<div
class="
absolute

inset-0

bg-gradient-to-t

from-black/70

via-black/10

to-transparent
">

</div>

<div
class="
absolute

bottom-10

left-10

right-10
">

<p
class="
text-sm

font-semibold

uppercase

tracking-[0.2em]

text-[#E8720F]
">

Export Ready

</p>

<h3
class="
mt-4

font-serif

text-4xl

leading-tight

text-white
">

Every Shipment
Inspected Before Export.

</h3>

</div>

</div>

</div>

</div>

</section>

`;

}




function createPoint(point){

return`

<div
class="
group

flex

gap-5

rounded-[24px]

bg-white

p-6

shadow-sm

transition-all

duration-300

hover:-translate-y-1

hover:shadow-[0_20px_40px_rgba(0,0,0,.08)]
">

<div
class="
flex

h-12

w-12

items-center

justify-center

rounded-xl

bg-[#FFF6EE]

transition-all

duration-300

group-hover:bg-[#E8720F]
">

<i
data-lucide="check"

class="
h-5

w-5

text-[#E8720F]

group-hover:text-white
">

</i>

</div>

<div>

<h4
class="
font-semibold

text-[#181818]
">

${point.title}

</h4>

<p
class="
mt-2

text-sm

leading-7

text-[#666666]
">

${point.description}

</p>

</div>

</div>

`;

}
