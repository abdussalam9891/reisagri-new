export function createProductHero(data) {

  return `

<section
class="
relative

overflow-hidden

bg-[#181818]

text-white
">

<!-- Background -->

<div
class="
absolute
inset-0
">

<img

src="${data.image}"

alt="${data.imageAlt}"

loading="eager"

class="
h-full
w-full

object-cover

opacity-20
"/>

<div
class="
absolute
inset-0

bg-gradient-to-r

from-[#181818]

via-[#181818]/90

to-[#181818]/60
"></div>

</div>

<div
class="
relative

mx-auto

max-w-7xl

px-5

pt-20
pb-16

sm:px-6
sm:pt-24
sm:pb-20

lg:px-8
lg:pt-28
lg:pb-24
">

<div
class="
max-w-3xl
">

<!-- Badge -->

<div
class="
inline-flex

items-center

gap-3

rounded-full

border

border-[#E8720F]/30

bg-[#E8720F]/10

px-4
py-2

backdrop-blur
">

<span
class="
h-2
w-2

rounded-full

bg-[#E8720F]

animate-pulse
"></span>

<span
class="
text-[11px]

font-semibold

uppercase

tracking-[0.18em]

text-[#E8720F]
">

${data.badge}

</span>

</div>

<!-- Heading -->

<h1
class="
mt-4



font-serif

text-3xl

leading-[1.08]

sm:text-5xl

lg:mt-4
lg:text-5xl
">

${data.title}

</h1>

<!-- Description -->

<p
class="
mt-3

max-w-2xl

text-base

leading-8

text-white/70

sm:text-lg
">

${data.description}

</p>

<!-- CTA -->

<div
class="
mt-8

flex

flex-wrap

gap-4

lg:mt-10
">

<a

href="/pages/contact.html"

class="
group

inline-flex

items-center

gap-3

rounded-full

bg-[#E8720F]

px-7
py-3.5

text-sm

font-semibold

uppercase

tracking-[0.18em]

transition-all

duration-500

hover:-translate-y-1

hover:shadow-[0_25px_60px_rgba(232,114,15,.35)]
">

Request Quote

<i
data-lucide="arrow-right"

class="
h-5
w-5

transition-transform

duration-300

group-hover:translate-x-1
"></i>

</a>

<a

href="#riceSection"

class="
group

inline-flex

items-center

gap-3

rounded-full

border

border-white/15

bg-white/5

px-7
py-3.5

text-sm

font-semibold

uppercase

tracking-[0.18em]

backdrop-blur

transition-all

duration-500

hover:border-[#E8720F]

hover:bg-white/10
">

Explore Products

<i
data-lucide="arrow-down"

class="
h-5
w-5

transition-transform

duration-300

group-hover:translate-y-1
"></i>

</a>

</div>

</div>

<!-- Stats -->

<div
class="
mt-14

grid

grid-cols-2

gap-4

sm:mt-16
sm:gap-5

lg:mt-20
lg:grid-cols-4
lg:gap-6
">

${data.stats.map(stat => `

<div

class="
group

rounded-[24px]

border

border-white/10

bg-white/5

p-5

backdrop-blur

transition-all

duration-500

hover:border-[#E8720F]

hover:bg-white/10

sm:p-6

lg:rounded-[30px]
lg:p-8
">

<p
class="
font-serif

text-3xl

text-[#E8720F]

sm:text-4xl

lg:text-5xl
">

${stat.value}

</p>

<p
class="
mt-2

text-[11px]

uppercase

tracking-[0.18em]

text-white/60

sm:text-xs
">

${stat.label}

</p>

</div>

`).join("")}

</div>

</div>

</section>

`;

}
