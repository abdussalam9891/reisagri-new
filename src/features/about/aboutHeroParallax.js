let ticking = false;

export function initAboutHeroParallax() {

  const hero =
    document.querySelector("#aboutHeroSection");

  if (!hero) return;

  const image =
    hero.querySelector(".about-hero-image");

  const overlay =
    hero.querySelector(".about-overlay");

  const content =
    hero.querySelector(".about-content");

  function update() {

    const scroll =
      window.scrollY;

    image.style.transform =
      `translateY(${scroll * .18}px) scale(1.08)`;

    overlay.style.opacity =
      Math.min(.82 + scroll * .0003, .95);

    content.style.transform =
      `translateY(${scroll * .08}px)`;

    ticking = false;

  }

  window.addEventListener("scroll", () => {

    if (!ticking) {

      requestAnimationFrame(update);

      ticking = true;

    }

  });

}
