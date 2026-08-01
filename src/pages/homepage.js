import {
  initHero,
} from "../features/hero/index.js";

import {
  initHome,
} from "../features/home/index.js";

import {
  initFAQ,
} from "../features/faq/index.js";

export function initHomePage() {

  initHero();

  initHome();

  initFAQ();

}
