import { CTA } from "../../constants/about.js";

export function renderCTA() {

  const container =
    document.getElementById("ctaSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
relative

overflow-hidden

bg-[#0F0F10]
"

>

<!-- Background -->

<div
class="
absolute
inset-0

bg-[radial-gradient(circle_at_top,rgba(232,114,15,.12),transparent_45%)]
"
></div>

<div
class="
absolute

top-0
left-1/2

h-px
w-[92%]

-max-w-7xl

-translate-x-1/2

bg-gradient-to-r
from-transparent
via-[#E8720F]
to-transparent
"
></div>

<div
class="
relative

mx-auto

max-w-7xl

px-6

py-28

text-center
"

>



<h2
class="
mx-auto

mt-8

max-w-4xl

font-serif

text-5xl

leading-[1.05]

text-white

lg:text-7xl
"
>

${CTA.heading.replace(/\n/g,"<br>")}

</h2>

<p
class="
mx-auto

mt-8

max-w-3xl

text-lg

leading-9

text-white/65
"
>

${CTA.description}

</p>

<div
class="
mt-14

flex

flex-col

items-center

justify-center

gap-5

sm:flex-row
"
>

<!-- =====================================
     PRIMARY CTA
====================================== -->

<a
  href="/pages/contact.html"
  class="
    group

    inline-flex
    items-center
    gap-3

    rounded-full

    bg-[#E8720F]

    px-10
    py-4

    text-sm
    font-semibold

    uppercase

    tracking-[0.18em]

    text-white

    transition-all
    duration-300

    hover:-translate-y-1
    hover:bg-[#F28723]
    hover:shadow-[0_20px_45px_rgba(232,114,15,.35)]
  "
>

  <span>
    Request Quote
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

</a>

<!-- =====================================
     SECONDARY CTA
====================================== -->

<a
  href="/pages/products.html"
  class="
    group

    relative

    inline-flex
    items-center
    justify-center

    gap-3

    overflow-hidden

    rounded-full

    border
    border-white/15

    bg-white/5

    px-10
    py-4

    text-sm
    font-semibold

    uppercase

    tracking-[0.18em]

    text-white

    backdrop-blur

    transition-all
    duration-300

    hover:-translate-y-1
    hover:border-[#E8720F]
    hover:shadow-[0_18px_40px_rgba(232,114,15,.18)]
  "
>

  <!-- Animated Fill -->

  <span
    class="
      absolute
      inset-0

      origin-left

      scale-x-0

      bg-[#E8720F]

      transition-transform
      duration-500
      ease-[cubic-bezier(.22,1,.36,1)]

      group-hover:scale-x-100
    "
  ></span>

  <!-- Content -->

  <span
    class="
      relative
      z-10

      flex
      items-center

      gap-3
    "
  >

    Explore Products

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

<!-- Trust Row -->

<div
class="
mt-20

flex

flex-wrap

justify-center

gap-10

text-sm

uppercase

tracking-[0.18em]

text-white/45
"
>

<span>Global Export</span>

<span>•</span>

<span>Reliable Supply Chain</span>

<span>•</span>

<span>Quality Focused</span>

<span>•</span>

<span>Long-Term Partnerships</span>

</div>

</div>

</section>

`;

if(window.lucide){
window.lucide.createIcons();
}

}
