const ACTIVE_BORDER = "border-[#E8720F]";
const ACTIVE_SHADOW = "shadow-xl";

export function initAccordion() {
  const items = document.querySelectorAll(".faq-item");

  if (!items.length) return;

  items.forEach((item) => {
    const button = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    button.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      // Close all items
      items.forEach((faq) => {
        faq.querySelector(".faq-content")
          .classList.add("hidden");

        faq.querySelector(".faq-icon")
          .classList.remove("rotate-45");

        faq.classList.remove(
          ACTIVE_BORDER,
          ACTIVE_SHADOW
        );
      });

      if (isOpen) return;

      content.classList.remove("hidden");

      icon.classList.add("rotate-45");

      item.classList.add(
        ACTIVE_BORDER,
        ACTIVE_SHADOW
      );
    });
  });
}
