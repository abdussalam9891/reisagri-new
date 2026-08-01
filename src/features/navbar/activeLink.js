export function initActiveLink() {
  const navLinks = document.querySelectorAll("[data-nav]");

  if (!navLinks.length) return;

  const pathname = window.location.pathname
    .toLowerCase();

  navLinks.forEach((link) =>
    link.classList.remove("text-[#E8720F]")
  );

  const routes = {
    home: ["/", "/index.html"],
    about: ["/pages/about.html"],
    products: ["/pages/products.html"],
    "global-sourcing": ["/pages/global-sourcing.html"],
    "why-reisagri": ["/pages/why-reisagri.html"],
    contact: ["/pages/contact.html"],
  };

  Object.entries(routes).forEach(([slug, pages]) => {
    if (
      pages.some((page) => pathname.endsWith(page))
    ) {
      document
        .querySelector(`[data-nav="${slug}"]`)
        ?.classList.add("text-[#E8720F]");
    }
  });
}
