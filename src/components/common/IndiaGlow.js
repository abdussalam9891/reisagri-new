export function createIndiaGlow() {

  return `

<div
class="
absolute

left-[72.1%]
top-[52.1%]

-translate-x-1/2
-translate-y-1/2

pointer-events-none

z-30
"
>

  <!-- =====================================
       OUTER GLOW
  ====================================== -->

  <span
    class="
      absolute

      left-1/2
      top-1/2

      h-24
      w-24

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-[#E8720F]/10

      blur-3xl
    "
  ></span>

  <!-- =====================================
       PULSE 1
  ====================================== -->

  <span
    class="
      absolute

      left-1/2
      top-1/2

      h-12
      w-12

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      border
      border-[#E8720F]/40

      animate-ping
    "
  ></span>

  <!-- =====================================
       PULSE 2
  ====================================== -->

  <span
    class="
      absolute

      left-1/2
      top-1/2

      h-20
      w-20

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      border
      border-[#E8720F]/20

      animate-ping

      [animation-delay:700ms]
    "
  ></span>

  <!-- =====================================
       CENTER DOT
  ====================================== -->

  <span
    class="
      relative

      flex

      h-5
      w-5

      items-center
      justify-center

      rounded-full

      bg-[#E8720F]

      shadow-[0_0_40px_rgba(232,114,15,.8)]
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

  </span>

  <!-- =====================================
       LABEL
  ====================================== -->

  <div
    class="
      absolute

      bottom-8
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

      shadow-[0_15px_35px_rgba(0,0,0,.35)]
    "
  >

    Export Origin

  </div>

</div>

`;

}
