const EASE = t => 1 - Math.pow(1 - t, 4);

/* --------------------------------------- */
/* GENERIC                                 */
/* --------------------------------------- */

function animate({

  element,

  delay = 0,

  duration = 900,

  from,

  to,

}) {

  let start = null;

  function frame(time) {

    if (!start) start = time;

    const elapsed = time - start;

    if (elapsed < delay) {

      requestAnimationFrame(frame);

      return;

    }

    const progress =
      Math.min(
        (elapsed - delay) / duration,
        1
      );

    const eased =
      EASE(progress);

    const currentOpacity =
      from.opacity +
      (to.opacity - from.opacity) * eased;

    const currentY =
      from.y +
      (to.y - from.y) * eased;

    const currentBlur =
      from.blur +
      (to.blur - from.blur) * eased;

    element.style.opacity =
      currentOpacity;

    element.style.transform =
      `translateY(${currentY}px)`;

    element.style.filter =
      `blur(${currentBlur}px)`;

    if (progress < 1) {

      requestAnimationFrame(frame);

    }

  }

  requestAnimationFrame(frame);

}

/* --------------------------------------- */
/* FADE UP                                 */
/* --------------------------------------- */

export function animateFadeUp(

  element,

  delay = 0

) {

  animate({

    element,

    delay,

    duration: 850,

    from: {

      opacity: 0,

      y: 40,

      blur: 8,

    },

    to: {

      opacity: 1,

      y: 0,

      blur: 0,

    },

  });

}

/* --------------------------------------- */
/* TITLE                                   */
/* --------------------------------------- */

export function animateTitle() {

  const title =
    document.querySelector(".about-title");

  if (!title) return;

  title.style.opacity = 0;

  title.style.transform =
    "translateY(60px)";

  animate({

    element: title,

    delay: 250,

    duration: 1100,

    from: {

      opacity: 0,

      y: 60,

      blur: 10,

    },

    to: {

      opacity: 1,

      y: 0,

      blur: 0,

    },

  });

}
