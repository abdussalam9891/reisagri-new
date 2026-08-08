import {
  GLOBAL_PRESENCE,
} from "../../constants/home.js";

import {
  createSectionHeading,
} from "../../components/common/sectionHeading.js";

import {
  createWorldMap,
} from "../../components/common/WorldMap.js";

 

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
py-8

sm:px-6
sm:py-8

lg:px-8
lg:py-12
"
>

${createSectionHeading({



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
mt-12
"
>

${createWorldMap(

  GLOBAL_PRESENCE.markets

)}

</div>





</div>

</section>

`;

  window.lucide?.createIcons();

}
