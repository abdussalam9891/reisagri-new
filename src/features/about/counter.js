const DURATION = 1800;

let hasAnimated = false;

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function animateCounter(element) {

  const target =
    Number(element.dataset.target);

  const suffix =
    element.dataset.suffix || "";

  const start = performance.now();

  function update(now) {

    const elapsed = now - start;

    const progress = Math.min(
      elapsed / DURATION,
      1
    );

    const eased =
      easeOutQuart(progress);

    const value =
      Math.floor(target * eased);

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

export function initAboutCounters() {

  if (hasAnimated) return;

  const counters = [
    ...document.querySelectorAll(".about-counter")
  ];

  if (!counters.length) return;

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) return;

          hasAnimated = true;

          counters.forEach(animateCounter);

          observer.disconnect();

        });

      },

      {
        threshold: 0.35
      }

    );

  observer.observe(counters[0]);

}
