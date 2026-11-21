import AboutHero from "@/components/about/AboutHero";
import { AboutCTA, CoreValues, Foundation, Leadership, Timeline } from "@/components/about/AboutSections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "About Reis Agri Trading | Trusted Agricultural Commodity Exporter from India" },
  description:
    "Learn about Reis Agri Trading, an Indian agricultural commodity trading and export company connecting trusted producers with buyers worldwide through dependable sourcing, quality assurance and efficient supply chain solutions.",
  keywords:
    "Reis Agri Trading, REISAGRI, Agricultural Exporter India, Rice Exporter, Sugar Exporter, Spices Exporter, Maize Exporter, Pulses Exporter, Commodity Trading",
  path: "/about",
  ogTitle: "About Reis Agri Trading | Agricultural Commodity Export Company",
  ogDescription: "Discover the story, mission, values and leadership behind Reis Agri Trading.",
  twitterTitle: "About Reis Agri Trading",
  twitterDescription: "Discover the story, values and leadership behind Reis Agri Trading.",
});

export default function AboutPage() {
  return (
    <main>
      <div className="reveal reveal-up">
        <AboutHero />
      </div>
      <Foundation className="reveal reveal-up" />
      <Leadership className="reveal reveal-up" />
      <Timeline className="reveal reveal-up" />
      <CoreValues className="reveal reveal-up" />
      <AboutCTA className="reveal reveal-up" />
    </main>
  );
}
