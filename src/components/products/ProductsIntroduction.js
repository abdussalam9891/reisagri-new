export function createProductsIntroduction(data) {

  return `

<section
class="
relative

bg-[#F8F7F4]
">

<div
class="
mx-auto

max-w-7xl

px-5

py-6

sm:px-6
sm:py-6

lg:px-8
lg:py-8
">

<div
class="
grid

gap-16

lg:grid-cols-[520px_1fr]

lg:gap-20

items-start
">

<!-- ================================= -->
<!-- Left Sticky -->
<!-- ================================= -->

<div
class="
reveal
reveal-left

lg:sticky

lg:top-28
">



<h2
class="

font-serif

text-3xl

leading-[1.08]

text-[#181818]

sm:text-5xl

lg:text-6xl
">

${data.title}

</h2>

${data.paragraphs
  .map(
    p => `

<p
class="
mt-6

max-w-xl

text-[15px]

leading-8

text-[#666666]

sm:text-base
">

${p}

</p>

`
  )
  .join("")}

<div
class="
mt-10

flex

flex-wrap

gap-4
">

<a

href="#riceSection"

class="
group

inline-flex

items-center

gap-3

rounded-full

bg-[#181818]

px-7
py-4

text-sm

font-semibold

uppercase

tracking-[0.18em]

text-white

transition-all

duration-500

hover:-translate-y-1

hover:bg-[#E8720F]

hover:shadow-[0_20px_40px_rgba(232,114,15,.25)]
">

Explore Rice

<i

data-lucide="arrow-right"

class="
h-4
w-4

transition-transform

duration-300

group-hover:translate-x-1
"></i>

</a>

</div>

</div>

<!-- ================================= -->
<!-- Right Scroll -->
<!-- ================================= -->

<div
class="
reveal
reveal-right
space-y-6
">

${data.categories
  .map(createPortfolioCard)
  .join("")}

</div>

</div>

</div>

</section>

`;

}

function createPortfolioCard(item) {

  return `

<div

class="
group

relative

overflow-hidden

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

hover:shadow-[0_30px_60px_rgba(232,114,15,.12)]
">

<div
class="
absolute

left-0
top-0

h-1

w-0

bg-[#E8720F]

transition-all

duration-500

group-hover:w-full
"></div>

<div
class="
flex

items-start

justify-between

gap-6
">

<div>

<p
class="
text-xs

font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
">

${item.label}

</p>

<h3
class="
mt-3

font-serif

text-2xl

leading-tight

text-[#181818]

sm:text-3xl
">

${item.title}

</h3>

</div>

<div
class="
flex

h-16

w-16

shrink-0

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

transition-all

duration-300

group-hover:text-white

group-hover:rotate-6
"></i>

</div>

</div>

<p
class="
mt-6

leading-8

text-[#666666]
">

${item.description}

</p>

</div>

`;

}


