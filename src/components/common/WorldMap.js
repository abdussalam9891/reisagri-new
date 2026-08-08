import { createGlobalMarker } from "./GlobalMarker.js";
import { createExportRoutes } from "./ExportRoutes.js";
import { createIndiaGlow } from "./IndiaGlow.js";


export function createWorldMap(markets) {

  return `

    <div
      class="
        world-map-wrapper

        relative

        mx-auto

        w-full

        max-w-6xl

        rounded-[24px]



        p-3
        sm:p-5
        lg:p-7

        transition-all
        duration-700

        ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-2

        hover:scale-[1.015]

        hover:rounded-[42px]



        
      "
    >




      <!-- ========================================= -->
      <!-- Floating Map -->
      <!-- ========================================= -->

      <div
        class="
          world-map-float

          relative

          z-10

          w-full

          transform-gpu

          transition-transform
          duration-700

          ease-[cubic-bezier(0.22,1,0.36,1)]
        "
      >

        <img
          src="/public/assets/images/worldMap.svg"

          alt="Global Presence"

          loading="lazy"

          decoding="async"

          draggable="false"

          class="
            world-map

            block

            w-full

            select-none

            opacity-35

            transform-gpu

            transition-all
            duration-700

            ease-[cubic-bezier(0.22,1,0.36,1)]

            hover:opacity-50

            hover:scale-[1.025]

            hover:rotate-[0.35deg]

            hover:drop-shadow-[0_20px_35px_rgba(232,114,15,.10)]
          "
        />


        <!-- ========================================= -->
        <!-- India Glow -->
        <!-- ========================================= -->

        ${createIndiaGlow()}


        <!-- ========================================= -->
        <!-- Export Routes -->
        <!-- ========================================= -->

        ${createExportRoutes()}


        <!-- ========================================= -->
        <!-- Global Markers -->
        <!-- ========================================= -->

        ${markets
          .map(createGlobalMarker)
          .join("")}

      </div>

    </div>

  `;
}
