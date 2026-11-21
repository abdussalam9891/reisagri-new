import JsonLd from "@/components/common/JsonLd";
import AboutPreview from "@/components/home/AboutPreview";
import HeroSlider from "@/components/home/HeroSlider";
import { FaqSection, GlobalPresence, HomeCTA } from "@/components/home/HomeSections";
import Process from "@/components/home/Process";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChoose from "@/components/home/WhyChoose";
import { FAQ } from "@/constants/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Reis Agri Trading | Global Agricultural Commodity Exporter" },
  description:
    "Reis Agri Trading is a trusted agricultural commodity trading and export company specializing in premium-quality rice, sugar, spices, maize, grains and pulses. We connect reliable producers with buyers worldwide through dependable sourcing and efficient global supply chain solutions.",
  keywords:
    "Reis Agri Trading, REISAGRI, Agricultural Commodity Exporter, Rice Exporter, Basmati Rice, Non-Basmati Rice, Sugar Exporter, Spices Exporter, Pulses Exporter, Maize Exporter, Commodity Trading, International Trade",
  path: "/",
  ogTitle: "Reis Agri Trading | Global Agricultural Commodity Exporter",
  ogDescription:
    "Connecting trusted agricultural producers with buyers worldwide through premium commodity sourcing, export expertise and dependable global supply chain solutions.",
  twitterDescription:
    "Trusted exporter of rice, sugar, spices, grains, maize and pulses serving global markets.",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.questions.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <HeroSlider />
      <AboutPreview className="reveal reveal-up" />
      <ProductCategories className="reveal reveal-up" />
      <WhyChoose className="reveal reveal-up" />
      <Process className="reveal reveal-up" />
      <GlobalPresence className="reveal reveal-up" />
      <FaqSection className="reveal reveal-up" />
      <HomeCTA className="reveal reveal-up" />
    </main>
  );
}
