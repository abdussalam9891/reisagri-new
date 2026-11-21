import { SITE_URL } from "@/constants/site";

const ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
