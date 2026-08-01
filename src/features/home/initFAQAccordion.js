export function initFAQAccordion() {

  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {

    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const title = item.querySelector(".faq-title");
    const icon = item.querySelector(".faq-icon");
    const svg = icon.querySelector("svg");

    trigger.addEventListener("click", () => {

      const isOpen = item.classList.contains("active");

      /* =====================================
         CLOSE ALL
      ====================================== */

      items.forEach((faq) => {

        faq.classList.remove("active");

        faq.classList.remove(
          "border-[#E8720F]"
        );

        faq.classList.add(
          "border-[#E8E8E8]"
        );

        const faqContent =
          faq.querySelector(".faq-content");

        faqContent.classList.remove(
          "grid-rows-[1fr]"
        );

        faqContent.classList.add(
          "grid-rows-[0fr]"
        );

        const faqTitle =
          faq.querySelector(".faq-title");

        faqTitle.classList.remove(
          "text-[#E8720F]"
        );

        faqTitle.classList.add(
          "text-[#181818]"
        );

        const faqIcon =
          faq.querySelector(".faq-icon");

        faqIcon.classList.remove(
          "bg-[#E8720F]",
          "border-[#E8720F]",
          "rotate-45"
        );

        faqIcon.classList.add(
          "bg-white",
          "border-[#E5E5E5]"
        );

        const faqSvg =
          faqIcon.querySelector("svg");

        faqSvg.classList.remove(
          "text-white"
        );

        faqSvg.classList.add(
          "text-[#181818]"
        );

      });

      /* =====================================
         OPEN CURRENT
      ====================================== */

      if (!isOpen) {

        item.classList.add("active");

        item.classList.remove(
          "border-[#E8E8E8]"
        );

        item.classList.add(
          "border-[#E8720F]"
        );

        content.classList.remove(
          "grid-rows-[0fr]"
        );

        content.classList.add(
          "grid-rows-[1fr]"
        );

        title.classList.remove(
          "text-[#181818]"
        );

        title.classList.add(
          "text-[#E8720F]"
        );

        icon.classList.remove(
          "bg-white",
          "border-[#E5E5E5]"
        );

        icon.classList.add(
          "bg-[#E8720F]",
          "border-[#E8720F]",
          "rotate-45"
        );

        svg.classList.remove(
          "text-[#181818]"
        );

        svg.classList.add(
          "text-white"
        );

      }

    });

  });

}
