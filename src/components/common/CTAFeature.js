export function createCTAFeature({

  icon,

  text,

}) {

  return `

<div
class="
group

inline-flex

items-center

gap-3
"
>

<div
class="
flex

h-12
w-12

items-center
justify-center

rounded-full

border
border-white/10

bg-white/10

backdrop-blur

transition-all
duration-300

group-hover:border-[#E8720F]

group-hover:bg-[#E8720F]
"
>

<i
data-lucide="${icon}"

class="
h-5
w-5

text-white

transition-transform
duration-300

group-hover:scale-110
"
></i>

</div>

<p
class="
text-sm

font-medium

tracking-wide

text-white/90
"
>

${text}

</p>

</div>

`;

}
