import {
  renderProductCategories,
} from "./renderProductCategories.js";

import {
  renderAboutPreview,
  initAboutVideo,
} from "./renderAboutPreview.js";

import {
  renderWhyChoose,
} from "./renderWhyChoose.js";

import {
  renderProcess,
} from "./renderProcess.js";

import {
  renderFeaturedProducts,
} from "./renderFeaturedProducts.js";

import {
  renderGlobalPresence,
} from "./renderGlobalPresence.js";

import {
  renderFAQ,
} from "./renderFAQ.js";

import {
  renderCTA,
} from "./renderCTA.js";

export function initHome() {

  renderProductCategories();

  renderAboutPreview();

  initAboutVideo();


  renderWhyChoose();

  renderProcess();

  renderFeaturedProducts();

  renderGlobalPresence();

  renderFAQ();

  renderCTA();

}
