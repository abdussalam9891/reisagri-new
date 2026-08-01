import { createGlobalMarker } from "./GlobalMarker.js";
import { createExportRoutes } from "./ExportRoutes.js";
import { createIndiaGlow } from "./IndiaGlow.js";

export function createWorldMap(markets) {

  return `

<div
class="
relative

mx-auto

max-w-6xl

animate-[floatMap_12s_ease-in-out_infinite]
"
>

  <!-- =====================================
       WORLD MAP
  ====================================== -->

  <img

    src="/public/assets/images/worldMap.svg"

    alt="Global Presence"

    class="
      w-full

      select-none

      opacity-35

      transition-all
      duration-700

      hover:scale-[1.02]
    "
  />

  <!-- =====================================
       SUBTLE OVERLAY
  ====================================== -->

  <div
    class="
      absolute
      inset-0

      bg-[radial-gradient(circle_at_center,rgba(232,114,15,.05),transparent_70%)]

      pointer-events-none
    "
  ></div>

  <!-- =====================================
       INDIA EXPORT ORIGIN
  ====================================== -->

  ${createIndiaGlow()}

  <!-- =====================================
       EXPORT ROUTES
  ====================================== -->

  ${createExportRoutes()}

  <!-- =====================================
       GLOBAL MARKERS
  ====================================== -->

  ${markets
    .map(createGlobalMarker)
    .join("")}

</div>

`;

}
