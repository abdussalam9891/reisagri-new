import { renderFaqs } from "./renderFaqs.js";
import { initAccordion } from "./accordion.js";

export function initFAQ() {
  const container =
    document.getElementById("faqContainer");

  if (!container) return;

  const modules = [
    ["renderFaqs", renderFaqs],
    ["initAccordion", initAccordion],
  ];

  modules.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`[initFAQ] ${name} failed:`, err);
    }
  });
}
