import {
  BrochureSection,
  OtherCommodities,
  PackagingSection,
  ProductHero,
  ProductsCTA,
  ProductsIntroduction,
  RiceSection,
  TradeProcess,
  WhyChooseProducts,
} from "@/components/products/ProductSections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Agricultural Commodities | Reis Agri Trading" },
  description:
    "Explore our agricultural commodities including premium Basmati Rice, Non-Basmati Rice, Wheat, Sugar, Maize, Pulses and Indian Spices. Reis Agri Trading supplies export-quality products worldwide.",
  keywords:
    "Rice Exporter India, Basmati Rice Exporter, Non Basmati Rice, Sugar Exporter, Wheat Exporter, Maize Exporter, Pulses Exporter, Indian Spices Exporter, Agricultural Commodity Exporter",
  path: "/products",
  ogDescription: "Premium agricultural commodities sourced from trusted suppliers and exported worldwide.",
  twitterDescription: "Premium export-quality rice, sugar, wheat, spices, maize and pulses.",
});

export default function ProductsPage() {
  return (
    <main className="text-[#181818]">
      <ProductHero />
      <ProductsIntroduction />
      <BrochureSection />
      <RiceSection />
      <PackagingSection />
      <OtherCommodities />
      <WhyChooseProducts />
      <TradeProcess />
      <ProductsCTA />
    </main>
  );
}
