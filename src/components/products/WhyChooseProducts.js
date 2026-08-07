export function createWhyChooseProducts(data){

return `

<section
class="
bg-[#181818]

text-white
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

<div
class="
max-w-3xl
">

<div
class="
reveal reveal-left
inline-flex

rounded-full

bg-[#E8720F]/10

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
mt-2

font-serif

text-5xl

leading-[1.08]
">

${data.title}

</h2>

<p
class="
reveal reveal-left
mt-8

leading-9

text-white/70
">

${data.description}

</p>

</div>

<div
class="
reveal reveal-right
mt-24

space-y-8
">

${data.features
.map(createFeature)
.join("")}

</div>

</div>

</section>

`;

}




function createFeature(item) {

  return `

<div
class="
group

rounded-[36px]

border

border-white/10

bg-white/5

p-10

backdrop-blur

transition-all

duration-500

hover:-translate-y-2

hover:border-[#E8720F]

hover:bg-white/10
">

<div
class="
grid

items-center

gap-10

lg:grid-cols-[100px_1fr]
">

<div
class="
flex

h-24

w-24

items-center

justify-center

rounded-[28px]

bg-[#E8720F]/10

transition-all

duration-300

group-hover:bg-[#E8720F]
">

<i
data-lucide="${item.icon}"

class="
h-12
w-12

text-[#E8720F]

transition-colors

duration-300

group-hover:text-white
"></i>

</div>

<div>

<h3
class="
font-serif

text-3xl

leading-tight

text-white
">

${item.title}

</h3>

<p
class="
mt-5

leading-9

text-white/65
">

${item.description}

</p>

</div>

</div>

</div>

`;

}
