let ticking = false;


export function initAboutHeroParallax() {

  const hero =
    document.querySelector(
      "#aboutHeroSection"
    );


  if (!hero) return;


  const image =
    hero.querySelector(
      ".about-hero-image"
    );


  const overlay =
    hero.querySelector(
      ".about-overlay"
    );


  const content =
    hero.querySelector(
      ".about-content"
    );


  /* =========================================
     UPDATE
  ========================================= */

  function update() {

    const scroll =
      window.scrollY;


    /* ---------------------------------------
       IMAGE
    --------------------------------------- */

    if (image) {

      image.style.transform =
        `translate3d(
          0,
          ${scroll * 0.18}px,
          0
        ) scale(1.08)`;

    }


    /* ---------------------------------------
       OVERLAY
    --------------------------------------- */

    if (overlay) {

      overlay.style.opacity =
        Math.min(
          0.82 + scroll * 0.0003,
          0.95
        );

    }


    /* ---------------------------------------
       CONTENT
    --------------------------------------- */

    if (content) {

      content.style.transform =
        `translate3d(
          0,
          ${scroll * 0.08}px,
          0
        )`;

    }


    ticking = false;

  }


  /* =========================================
     SCROLL
  ========================================= */

  function handleScroll() {

    if (ticking) return;


    requestAnimationFrame(
      update
    );


    ticking = true;

  }


  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true,
    }
  );


  /* =========================================
     INITIAL STATE
  ========================================= */

  update();

}
