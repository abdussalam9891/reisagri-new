export function createAboutPreviewCard({

  badge,

  title,

  description,

  image,

  imageAlt,

  stats,

  cta,

}) {

  return `

<div
class="
grid

items-center

gap-16

lg:grid-cols-[520px_1fr]

lg:gap-24
"
>

<!-- =====================================
     IMAGE
====================================== -->

<div
class="
group

relative

overflow-hidden

rounded-[36px]

shadow-sm

transition-all
duration-500

hover:-translate-y-2

hover:shadow-[0_30px_60px_rgba(0,0,0,.18)]
"
>

<img
src="${image}"

alt="${imageAlt}"

class="
aspect-[4/5]

w-full

object-cover

transition-transform
duration-700

group-hover:scale-105
"
/>

<!-- Overlay -->

<div
class="
absolute

inset-0

bg-gradient-to-t

from-black/35

via-transparent

to-transparent
"
></div>

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

</div>

<!-- =====================================
     CONTENT
====================================== -->

<div>

<span
class="
inline-flex

rounded-full

bg-[#FFF6EE]

px-4
py-2

text-xs

font-semibold

uppercase

tracking-[0.22em]

text-[#E8720F]
"
>

${badge}

</span>

<h2
class="
mt-6

font-serif

text-[2.2rem]

leading-tight

text-[#181818]

sm:text-[2.8rem]

lg:text-5xl
"
>

${title.replace(/\n/g,"<br>")}

</h2>

<p
class="
mt-8

max-w-2xl

leading-8

text-[#666666]
"
>

${description}

</p>

<!-- =====================================
     STATS
====================================== -->

<div
class="
mt-12

grid

grid-cols-2

gap-6

lg:grid-cols-4
"
>

${stats.map(stat => `

<div>

<h3
class="
font-serif

text-4xl

text-[#181818]
"
>

${stat.value}

</h3>

<p
class="
mt-2

text-sm

uppercase

tracking-[0.16em]

text-[#777777]
"
>

${stat.label}

</p>

</div>

`).join("")}

</div>

<!-- =====================================
     CTA
====================================== -->

<a
href="${cta.href}"

class="
group

relative

mt-12

inline-flex

items-center

justify-center

overflow-hidden

rounded-full

border
border-[#E8720F]

px-8
py-4

text-sm

font-semibold

uppercase

tracking-[0.18em]

text-[#181818]
"
>

<span
class="
absolute

inset-0

origin-left

scale-x-0

bg-[#E8720F]

transition-transform
duration-700

ease-[cubic-bezier(0.22,1,0.36,1)]

group-hover:scale-x-100
"
></span>

<span
class="
relative

z-10

flex

items-center

gap-3

transition-colors
duration-300

group-hover:text-white
"
>

${cta.text}

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

</span>

</a>

</div>

</div>

`;

}
