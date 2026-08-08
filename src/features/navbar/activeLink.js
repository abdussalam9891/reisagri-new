export function initActiveLink() {
  const navLinks = document.querySelectorAll("[data-nav]");

  if (!navLinks.length) return;

  const pathname = window.location.pathname.toLowerCase();

  const routes = {
    home: ["/", "/index.html"],
    about: ["/pages/about.html"],
    products: ["/pages/products.html"],
    "global-sourcing": ["/pages/global-sourcing.html"],
    "why-reisagri": ["/pages/why-reisagri.html"],
    contact: ["/pages/contact.html"],
  };

  /* =====================================
     RESET
  ====================================== */

  navLinks.forEach((link) => {
    link.classList.remove(
      "active",
      "text-[#E8720F]"
    );
  });

  /* =====================================
     FIND CURRENT PAGE
  ====================================== */

  Object.entries(routes).forEach(([slug, pages]) => {

    const isActive = pages.some((page) => {

      if (page === "/") {
        return pathname === "/";
      }

      return pathname.endsWith(page);
    });

    if (!isActive) return;

    const activeLink =
      document.querySelector(
        `[data-nav="${slug}"]`
      );

    if (!activeLink) return;

    activeLink.classList.add(
      "active",
      "text-[#E8720F]"
    );
  });
}
