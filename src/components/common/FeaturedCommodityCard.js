export function createFeaturedCommodityCard({

  featured,

  title,

  subtitle,

  image,

  specifications,

  href,

}) {

  return `

<a
href="${href}"

class="
group

relative

block

overflow-hidden

rounded-[34px]

bg-[#181818]

shadow-sm

transition-all
duration-500

hover:-translate-y-2

hover:shadow-[0_30px_70px_rgba(0,0,0,.28)]

${featured ? "lg:row-span-2 min-h-[640px]" : "min-h-[310px]"}
"
>

<!-- =====================================
     IMAGE
===================================== -->

<img
src="${image}"

alt="${title}"

 loading="lazy"
decoding="async"

class="
absolute
inset-0

h-full
w-full

object-cover

transition-transform
duration-700

group-hover:scale-110
"
/>

<!-- =====================================
     OVERLAY
===================================== -->

<div
class="
absolute
inset-0

bg-gradient-to-t

from-black

via-black/45

to-transparent
"
></div>

<!-- =====================================
     TOP ACCENT
===================================== -->

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

<!-- =====================================
     FEATURED BADGE
===================================== -->

${
featured
? `
<div
class="
absolute

left-8
top-8

rounded-full

bg-[#E8720F]

px-5
py-2

text-xs

font-semibold

uppercase

tracking-[0.18em]

text-white
"
>

Featured Commodity

</div>
`
: ""
}

<!-- =====================================
     CONTENT
===================================== -->

<div
class="
absolute

bottom-0
left-0
right-0

p-8
"
>

<p
class="
text-xs

font-semibold

uppercase

tracking-[0.22em]

text-[#E8720F]
"
>

${subtitle}

</p>

<h3
class="
mt-4

font-serif

text-3xl

leading-tight

text-white

${featured ? "lg:text-5xl" : ""}
"
>

${title}

</h3>

<!-- =====================================
     SPECIFICATIONS
===================================== -->

<div
class="
mt-8

flex

flex-wrap

gap-3
"
>

${specifications.map(spec => `

<span
class="
rounded-full

border
border-white/15

bg-white/10

px-4
py-2

text-xs

font-medium

uppercase

tracking-[0.16em]

text-white

backdrop-blur

transition-all
duration-300

group-hover:border-[#E8720F]

group-hover:bg-[#E8720F]/20
"
>

${spec}

</span>

`).join("")}

</div>

<!-- =====================================
     CTA
===================================== -->

<div
class="
mt-10

flex

items-center

justify-between
"
>

<span
class="
text-sm

font-semibold

uppercase

tracking-[0.18em]

text-white
"
>

View Product

</span>

<div
class="
flex

h-12
w-12

items-center

justify-center

rounded-full

border
border-white/15

bg-white/10

backdrop-blur

transition-all
duration-300

group-hover:border-[#E8720F]

group-hover:bg-[#E8720F]
"
>

<i
data-lucide="arrow-up-right"

class="
h-5
w-5

text-white

transition-transform
duration-300

group-hover:rotate-45
"
></i>

</div>

</div>

</div>

</a>

`;

}
