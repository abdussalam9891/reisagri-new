import { createNavbar } from "../../components/navbar/index.js";

/**
 * Renders the navbar into #navbar-container and wires up:
 *  1. Scroll-solidify — header is transparent over the hero, then gets
 *     a solid dark + blur backdrop once scrolled past a threshold. This
 *     replaces Banshiwala's light/dark theme toggling — see the note in
 *     desktopNav.js for why (we only have the white logo asset).
 *  2. Mobile drawer open/close.
 */

export function initNavbar() {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  container.innerHTML = createNavbar();

  const header = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobilePanel = document.getElementById("mobilePanel");

  // 1. Scroll-solidify
  const SCROLL_THRESHOLD = 60;

  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("bg-[#181818]/95", "backdrop-blur-sm", "shadow-lg");
    } else {
      header.classList.remove("bg-[#181818]/95", "backdrop-blur-sm", "shadow-lg");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 2. Mobile drawer
  const openDrawer = () => {
    mobileDrawer?.classList.remove("hidden");
    requestAnimationFrame(() => {
      mobileBackdrop?.classList.remove("opacity-0");
      mobilePanel?.classList.remove("-translate-x-[120%]");
    });
    menuBtn?.setAttribute("aria-expanded", "true");
  };

  const closeDrawer = () => {
    mobileBackdrop?.classList.add("opacity-0");
    mobilePanel?.classList.add("-translate-x-[120%]");
    menuBtn?.setAttribute("aria-expanded", "false");
    window.setTimeout(() => mobileDrawer?.classList.add("hidden"), 300);
  };

  menuBtn?.addEventListener("click", openDrawer);
  closeDrawerBtn?.addEventListener("click", closeDrawer);
  mobileBackdrop?.addEventListener("click", closeDrawer);

  // Close drawer on nav-link click (in-page anchors won't otherwise
  // trigger a navigation event that would close it)
  mobileDrawer
    ?.querySelectorAll("a[data-nav]")
    .forEach((link) => link.addEventListener("click", closeDrawer));
}
