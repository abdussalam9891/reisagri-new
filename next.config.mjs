/** @type {import('next').NextConfig} */
const legacyPages = [
  "about",
  "products",
  "contact",
  "privacy-policy",
  "terms-and-conditions",
  "disclaimer",
];

const nextConfig = {
  turbopack: { root: import.meta.dirname },
  async redirects() {
    return [
      // Old static-site URLs → new routes (keeps existing links and SEO equity)
      { source: "/index.html", destination: "/", permanent: true },
      ...legacyPages.map((page) => ({
        source: `/pages/${page}.html`,
        destination: `/${page}`,
        permanent: true,
      })),
      // Old asset locations that may be cached by social platforms / search engines
      { source: "/public/assets/:path*", destination: "/assets/:path*", permanent: true },
      { source: "/src/assets/images/:path*", destination: "/images/:path*", permanent: true },
      { source: "/src/assets/REISAGRI_Brochure.pdf", destination: "/REISAGRI_Brochure.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
