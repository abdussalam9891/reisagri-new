/**
 * ============================================
 * REISAGRI NAVIGATION
 * International Agricultural Commodity Trading
 * ============================================
 *
 * Unlike Banshiwala (multi-page store: /pages/products.html etc.),
 * Reis Agri's homepage is a single page with anchor sections — so hrefs
 * are in-page anchors, not routes. If Reis Agri grows into multiple pages
 * later, swap these hrefs the same way Banshiwala's are structured.
 */

export const NAVIGATION = [
  {
    label: "About",
    slug: "about",
    href: "#about",
  },
  {
    label: "Products",
    slug: "products",
    href: "#products",
  },
  {
    label: "Why Us",
    slug: "services",
    href: "#services",
  },
  {
    label: "Global Presence",
    slug: "presence",
    href: "#presence",
  },
  {
    label: "Contact",
    slug: "contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918298771036",
  },
];
