import { createDesktopNav } from "./desktopNav.js";
import { createMobileNav } from "./mobileNav.js";

export function createNavbar(theme = "light") {
  return `
    <header
      id="siteHeader"
      data-theme="${theme}"
      class="
        fixed
        inset-x-0
        top-0
        z-[100]
        bg-transparent
        transition-all
        duration-500
      "
    >

      <!-- Desktop Navigation -->

      ${createDesktopNav(theme)}

      <!-- Mobile Navigation -->

      ${createMobileNav(theme)}

    </header>
  `;
}
