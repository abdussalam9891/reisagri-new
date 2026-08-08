const DURATION = 1800;

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}


function animateCounter(element) {

  const target =
    Number(element.dataset.target);

  const suffix =
    element.dataset.suffix || "";

  if (!Number.isFinite(target)) {
    return;
  }

  const start =
    performance.now();


  function update(now) {

    const elapsed =
      now - start;

    const progress =
      Math.min(
        elapsed / DURATION,
        1
      );

    const eased =
      easeOutQuart(progress);

    const value =
      Math.floor(
        target * eased
      );


    element.textContent =
      value + suffix;


    if (progress < 1) {

      requestAnimationFrame(update);

    } else {

      element.textContent =
        target + suffix;

    }

  }


  requestAnimationFrame(update);
}


/* ---------------------------------------- */
/* INIT                                     */
/* ---------------------------------------- */

let hasAnimated = false;


export function initAboutCounters() {

  if (hasAnimated) return;


  const counters =
    document.querySelectorAll(
      ".about-counter"
    );


  if (!counters.length) return;


  const observer =
    new IntersectionObserver(

      entries => {

        const visible =
          entries.some(
            entry =>
              entry.isIntersecting
          );


        if (!visible) return;


        hasAnimated = true;


        counters.forEach(
          (counter, index) => {

            setTimeout(
              () => {

                animateCounter(
                  counter
                );

              },

              index * 120

            );

          }
        );


        observer.disconnect();

      },

      {
        threshold: 0.35,
      }

    );


  observer.observe(
    counters[0]
  );

}
