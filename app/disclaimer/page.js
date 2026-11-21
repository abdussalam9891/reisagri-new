import LegalPage from "@/components/legal/LegalPage";
import { DISCLAIMER } from "@/constants/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Disclaimer | Reis Agri Trading" },
  description:
    "Read the Disclaimer of Reis Agri Trading regarding website information, agricultural commodity specifications, pricing, quotations, liability and the use of our international trading services.",
  keywords:
    "Reis Agri Trading, REISAGRI, Disclaimer, Agricultural Commodity Exporter, International Trade, Export Disclaimer, Legal Disclaimer",
  path: "/disclaimer",
  ogDescription:
    "Important information regarding the use of the Reis Agri Trading website, product information and business communications.",
  twitterDescription:
    "Review the legal disclaimer governing the use of the Reis Agri Trading website, products and business communications.",
});

export default function DisclaimerPage() {
  return <LegalPage content={DISCLAIMER} />;
}
