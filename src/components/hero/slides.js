import { HERO_SLIDES } from "../../constants/heroSlides.js";

export function createHeroSlides() {
  return HERO_SLIDES.map(
    (slide, index) => `
      <div
        class="
          hero-slide
          absolute
          inset-0
          overflow-hidden
          ${index === 0 ? "opacity-100 z-20" : "opacity-0 z-10"}
          transition-opacity
          duration-[1600ms]
          ease-out
        "
        data-slide="${index}"
      >

        <img
          src="${slide.image}"
          alt="${slide.title.replace(/\n/g, " ")}"
          loading="${index === 0 ? "eager" : "lazy"}"
          draggable="false"
          class="
            hero-image
            absolute
            inset-0
            h-full
            w-full
            object-cover
            select-none
            will-change-transform
          "
        />



<!-- Premium Overlay -->

<div
  class="
    absolute
    inset-0

    bg-[linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(18,18,18,.62)_35%,rgba(232,114,15,.12)_100%)]
  "
></div>

<!-- Bottom Fade -->

<div
  class="
    absolute
    inset-x-0
    bottom-0

    h-56

    bg-gradient-to-t
    from-black
    via-black/45
    to-transparent
  "
></div>

      </div>
    `
  ).join("");
}
