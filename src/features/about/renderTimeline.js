import {
  COMPANY_TIMELINE,
} from "../../constants/about.js";

import {
  createTimelineCard,
} from "../../components/common/TimelineCard.js";

import {
  createSectionHeading,
} from "../../components/common/ sectionHeading.js";

export function renderTimeline() {

  const container =
    document.getElementById("timelineSection");

  if (!container) return;

  container.innerHTML = `

<section class="bg-white">

<div
class="
mx-auto

max-w-7xl

px-5
py-12

sm:px-6
sm:py-16

lg:px-8
lg:py-16
"
>

${createSectionHeading({



title:
"Growing Through\nExperience.",

description:
"Every milestone reflects our commitment to building stronger supply chains, trusted partnerships and sustainable growth."

})}

<div
class="
mx-auto

mt-10

max-w-3xl
"
>

${COMPANY_TIMELINE
.map(createTimelineCard)
.join("")}

</div>

</div>

</section>

`;

  if (window.lucide) {
    window.lucide.createIcons();
  }

}
