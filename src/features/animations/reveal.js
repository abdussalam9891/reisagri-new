const STAGGER = 70;

const OBSERVER_OPTIONS = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

export function initRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  }, OBSERVER_OPTIONS);

  const parentMap = new Map();

  reveals.forEach((item) => {
    if (item.offsetParent === null) return;

    const parent = item.parentElement;

    const delay = parentMap.get(parent) || 0;

    item.style.transitionDelay = `${delay}ms`;

    parentMap.set(parent, delay + STAGGER);

    observer.observe(item);
  });
}
