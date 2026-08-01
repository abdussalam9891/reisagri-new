export function createWhyChooseCard({

  icon,

  title,

  description,

}) {

  return `

<div
class="
group

relative

overflow-hidden

rounded-[30px]

border
border-[#ECECEC]

bg-white

p-8

shadow-sm

transition-all
duration-500

hover:-translate-y-2

hover:border-[#E8720F]/60

hover:shadow-[0_25px_50px_rgba(232,114,15,.12)]
"
>

<!-- Orange Accent -->

<div
class="
absolute

left-0
top-0

h-[3px]
w-0

bg-[#E8720F]

transition-all
duration-500

group-hover:w-full
"
></div>

<!-- Icon -->

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
duration-500

group-hover:scale-110

group-hover:bg-[#E8720F]
"
>

<i
data-lucide="${icon}"

class="
h-8
w-8

text-[#E8720F]

transition-all
duration-500

group-hover:text-white

group-hover:rotate-6
"
></i>

</div>

<h3
class="
mt-8

font-serif

text-2xl

text-[#181818]
"
>

${title}

</h3>

<p
class="
mt-5

leading-8

text-[#666666]
"
>

${description}

</p>

<!-- Bottom Link -->

<div
class="
mt-8

flex

items-center

gap-3

text-sm

font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
"
>

<span>

Why REISAGRI

</span>

<i
data-lucide="arrow-right"

class="
h-4
w-4

transition-transform
duration-300

group-hover:translate-x-1
"
></i>

</div>

</div>

`;

}
