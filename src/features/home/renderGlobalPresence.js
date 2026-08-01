import {
  GLOBAL_PRESENCE,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/ sectionHeading.js";

import {
  createWorldMap,
} from "../../components/common/WorldMap.js";

import {
  createGlobalStat,
} from "../../components/common/GlobalStat.js";

export function renderGlobalPresence() {

  const container =
    document.getElementById("globalPresenceSection");

  if (!container) return;

  container.innerHTML = `

<section
class="
relative

overflow-hidden


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
    GLOBAL_PRESENCE.badge,

  title:
    GLOBAL_PRESENCE.title,

  description:
    GLOBAL_PRESENCE.description,

})}

<!-- =====================================
     WORLD MAP
===================================== -->

<div
class="
mt-20
"
>

${createWorldMap(

  GLOBAL_PRESENCE.markets

)}

</div>

<!-- =====================================
     STATS
===================================== -->

<div
class="
mt-24

grid

grid-cols-2

overflow-hidden

rounded-[28px]

border
border-white/10

bg-white/5

backdrop-blur

lg:grid-cols-4
"
>

${GLOBAL_PRESENCE.stats.map((stat, index) => `

<div
class="
relative

px-8
py-10

${index !== GLOBAL_PRESENCE.stats.length - 1
  ? "lg:border-r lg:border-white/10"
  : ""
}
"
>

${createGlobalStat(stat)}

</div>

`).join("")}

</div>

</div>

</section>

`;

  window.lucide?.createIcons();

}
