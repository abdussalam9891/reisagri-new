import { initHero } from "../features/hero/index.js";
import { initFAQ } from "../features/faq/index.js";

export function initHomePage() {
  const hero = document.getElementById("heroContainer");

  if (!hero) return;

  initHero();

  initFAQ();
}
