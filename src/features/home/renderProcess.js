import {
  PROCESS,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/SectionHeading.js";

import {
  createProcessCard,
} from "../../components/common/ProcessCard.js";

export function renderProcess() {

  const container =
    document.getElementById("processSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
relative

overflow-hidden

bg-white
"
>

 

<div
class="
relative

mx-auto

max-w-7xl

px-5
py-16

sm:px-6
sm:py-20

lg:px-8
lg:py-28
"
>

${createSectionHeading({

badge:
PROCESS.badge,

title:
PROCESS.title,

description:
PROCESS.description,

})}

<div
class="
mt-20

grid

gap-14

md:grid-cols-2

xl:grid-cols-3
"

>

${PROCESS.steps
.map((step,index)=>

createProcessCard({

...step,

isLast:
index===PROCESS.steps.length-1,

})

)
.join("")}

</div>

</div>

</section>

`;

  window.lucide?.createIcons();

}
