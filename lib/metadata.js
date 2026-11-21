import { OG_IMAGE } from "@/constants/site";

/**
 * Builds per-page metadata. Shared defaults (metadataBase, siteName,
 * icons, robots, og:image) live in app/layout.js.
 */
export function pageMetadata({
  title,
  description,
  keywords,
  path,
  ogTitle = title,
  ogDescription = description,
  twitterTitle = ogTitle,
  twitterDescription = ogDescription,
}) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: ogTitle,
      description: ogDescription,
      url: path,
      siteName: "REISAGRI",
      locale: "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle,
      description: twitterDescription,
      images: [OG_IMAGE],
    },
  };
}
