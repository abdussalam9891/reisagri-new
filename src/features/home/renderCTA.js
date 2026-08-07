import {
  CTA,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/sectionHeading.js";

import {
  createCTAFeature,
} from "../../components/common/CTAFeature.js";

export function renderCTA() {

  const container =
    document.getElementById("ctaSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
relative

overflow-hidden
"
>

<!-- =====================================
     BACKGROUND IMAGE
===================================== -->

<img

src="${CTA.background}"

alt="Warehouse"

 loading="lazy"
  decoding="async"

class="
absolute

inset-0

h-full
w-full

object-cover
"
/>

<!-- Dark Overlay -->

<div
class="
absolute
inset-0

bg-[#181818]/60
"
></div>

<!-- Orange Glow -->

<div
class="
absolute
inset-0

bg-[radial-gradient(circle_at_center,rgba(232,114,15,.18),transparent_70%)]
"
></div>

<!-- =====================================
     CONTENT
===================================== -->

<div
class="
relative

mx-auto

max-w-7xl

px-5
py-8

text-center

sm:px-6

lg:px-8
lg:py-12
"
>

${createSectionHeading({



title:
CTA.title,

description:
CTA.description,

})}

<!-- =====================================
     BUTTONS
===================================== -->

<div
class="
mt-12

flex

flex-col

items-center

justify-center

gap-5

sm:flex-row
"
>

<a

href="${CTA.primaryButton.href}"

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

hover:shadow-[0_20px_45px_rgba(232,114,15,.35)]
"
>

${CTA.primaryButton.text}

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

<a

href="${CTA.secondaryButton.href}"

class="
group

inline-flex

items-center

justify-center

rounded-full

border
border-white/20

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

hover:border-[#E8720F]

hover:bg-white/10
"
>

${CTA.secondaryButton.text}

</a>

</div>

<!-- =====================================
     FEATURES
===================================== -->

<div
class="
mt-16

grid

gap-8

sm:grid-cols-2

lg:grid-cols-4
"
>

${CTA.features
.map(createCTAFeature)
.join("")}

</div>

</div>

</section>

`;

  window.lucide?.createIcons();

}
