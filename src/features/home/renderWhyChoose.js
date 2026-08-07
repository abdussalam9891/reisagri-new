import {
  WHY_CHOOSE,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/sectionHeading.js";

import {
  createWhyChooseCard,
} from "../../components/common/WhyChooseCard.js";

export function renderWhyChoose() {

  const container =
    document.getElementById("whyChooseSection");

  if (!container) return;

  container.innerHTML = `

<section
class="

"
>

<div
class="
mx-auto

max-w-7xl

px-5
py-8

sm:px-6
sm:py-8

lg:px-8
lg:py-12
"
>

${createSectionHeading({



title:
WHY_CHOOSE.title,

description:
WHY_CHOOSE.description,

})}

<div
class="
mt-10

grid

gap-8

md:grid-cols-2

xl:grid-cols-3
"
>

${WHY_CHOOSE.cards
.map(createWhyChooseCard)
.join("")}

</div>

</div>

</section>

`;

  window.lucide?.createIcons();

}
