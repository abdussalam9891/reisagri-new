export function createProcessCard({

  number,

  icon,

  title,

  description,

  isLast = false,

}) {

  return `

<div
class="
relative

group

flex

flex-col

items-center

text-center
"
>

<!-- =====================================
     CONNECTOR
====================================== -->

${
!isLast
? `
<div
class="
hidden

xl:block

absolute

top-9

left-[58%]

w-full

h-px

overflow-hidden
"
>

<div
class="
absolute

inset-0

bg-[#ECECEC]
"
></div>

<div
class="
absolute

left-0

top-0

h-full

w-0

bg-[#E8720F]

transition-all
duration-700

group-hover:w-full
"
></div>

</div>
`
: ""
}

<!-- =====================================
     STEP NUMBER
====================================== -->

<div
class="
absolute

-top-5

right-5

font-serif

text-4xl

leading-none

text-[#E8720F]/10

transition-all
duration-500

group-hover:text-[#E8720F]/20
"
>

${number}

</div>

<!-- =====================================
     ICON
====================================== -->

<div
class="
relative

z-10

flex

h-20
w-20

items-center
justify-center

rounded-[24px]

border
border-[#ECECEC]

bg-white

shadow-sm

transition-all
duration-500

group-hover:-translate-y-1

group-hover:border-[#E8720F]

group-hover:bg-[#FFF6EE]

group-hover:shadow-[0_20px_40px_rgba(232,114,15,.18)]
"
>

<i

data-lucide="${icon}"

class="
h-9
w-9

text-[#E8720F]

transition-transform
duration-500

group-hover:rotate-12
"
></i>

</div>

<!-- =====================================
     CONTENT
====================================== -->

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

max-w-[280px]

leading-8

text-[#666666]
"
>

${description}

</p>

</div>

`;

}
