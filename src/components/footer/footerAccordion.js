const MOBILE_BREAKPOINT = 1024;

export function initFooterAccordion() {
  if (window.innerWidth >= MOBILE_BREAKPOINT) return;

  const toggles = document.querySelectorAll(".footer-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const chevron = toggle.querySelector(".footer-chevron");

      toggles.forEach((otherToggle) => {
        if (otherToggle === toggle) return;

        const otherContent = otherToggle.nextElementSibling;
        const otherChevron =
          otherToggle.querySelector(".footer-chevron");

        otherContent.classList.add("hidden");
        otherChevron.classList.remove("rotate-180");
      });

      content.classList.toggle("hidden");
      chevron.classList.toggle("rotate-180");
    });
  });
}
