export function createGlobalMarker({

  name,

  x,

  y,

}) {

  return `

<div
class="
market-marker

group

absolute

z-20
"

style="
left:${x};
top:${y};
transform:translate(-50%,-50%);
"
>

  <!-- =====================================
       LABEL
  ====================================== -->

  <div
    class="
      pointer-events-none

      absolute

      bottom-10
      left-1/2

      -translate-x-1/2

      whitespace-nowrap

      rounded-full

      border
      border-[#E8720F]/20

      bg-[#181818]/95

      px-4
      py-2

      text-[11px]

      font-semibold

      uppercase

      tracking-[0.22em]

      text-white

      backdrop-blur

      shadow-[0_12px_35px_rgba(0,0,0,.35)]

      opacity-0

      transition-all
      duration-500

      group-hover:-translate-y-2

      group-hover:opacity-100
    "
  >

    ${name}

  </div>

  <!-- =====================================
       CONNECTOR
  ====================================== -->

  <span
    class="
      absolute

      bottom-5
      left-1/2

      h-5
      w-px

      -translate-x-1/2

      bg-[#E8720F]/60

      opacity-0

      transition-all
      duration-500

      group-hover:opacity-100
    "
  ></span>

  <!-- =====================================
       OUTER PULSE
  ====================================== -->

  <span
    class="
      absolute

      left-1/2
      top-1/2

      h-10
      w-10

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-[#E8720F]/15

      animate-ping
    "
  ></span>

  <!-- =====================================
       GLOW RING
  ====================================== -->

  <span
    class="
      absolute

      left-1/2
      top-1/2

      h-7
      w-7

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      border
      border-[#E8720F]/40
    "
  ></span>

  <!-- =====================================
       MARKER
  ====================================== -->

  <div
    class="
      relative

      flex

      h-5
      w-5

      items-center
      justify-center

      rounded-full

      bg-[#E8720F]

      shadow-[0_0_30px_rgba(232,114,15,.45)]

      transition-all
      duration-500

      group-hover:scale-125
    "
  >

    <span
      class="
        h-2
        w-2

        rounded-full

        bg-white
      "
    ></span>

  </div>

</div>

`;

}
