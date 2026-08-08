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

</div>

</section>

`;

}
