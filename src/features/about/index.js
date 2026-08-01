import { renderAboutHero } from "./renderAboutHero.js";

import { renderFoundation } from "./renderFoundation.js";

import { renderLeadership } from "./renderLeadership.js";

import { renderTimeline } from "./renderTimeline.js";

import { renderValues } from "./renderValues.js";

import { renderCTA } from "./renderCTA.js";

import { initAboutCounters } from "./counter.js";

import { initAboutHeroParallax } from "./aboutHeroParallax.js";

import {
  animateFadeUp,
  animateTitle,
} from "./aboutHeroAnimations.js";

import {
  initRevealAnimations,
} from "../animations/reveal.js";

export function initAbout() {

  /* ---------------- Hero ---------------- */

  renderAboutHero();

  /* -------------- Sections -------------- */

  renderFoundation();

  renderLeadership();

  renderTimeline();

  renderValues();

  renderCTA();

  /* -------- Refresh Dynamic UI ---------- */

  window.lucide?.createIcons();

  initRevealAnimations();

  /* -------- Hero Animations ------------ */

  animateFadeUp(
    document.querySelector(".about-badge"),
    0
  );

  animateTitle();

  animateFadeUp(
    document.querySelector(".about-description"),
    850
  );

  animateFadeUp(
    document.querySelector(".about-actions"),
    1150
  );

  animateFadeUp(
    document.querySelector(".about-stats"),
    1500
  );

  /* -------- Counters ------------------- */

  initAboutCounters();

  /* -------- Parallax ------------------- */

  initAboutHeroParallax();

}
