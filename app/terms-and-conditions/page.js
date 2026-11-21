import LegalPage from "@/components/legal/LegalPage";
import { TERMS_AND_CONDITIONS } from "@/constants/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Terms & Conditions | Reis Agri Trading" },
  description:
    "Read the Terms & Conditions governing the use of the Reis Agri Trading website, international agricultural commodity sourcing, export services and business transactions.",
  keywords:
    "Reis Agri Trading, REISAGRI, Terms and Conditions, Agricultural Commodity Exporter, Export Services, International Trade, Terms of Service",
  path: "/terms-and-conditions",
  ogDescription:
    "Review the Terms & Conditions governing the use of the Reis Agri Trading website and international agricultural commodity trading services.",
  twitterDescription:
    "Read the Terms & Conditions governing the use of the Reis Agri Trading website and export services.",
});

export default function TermsPage() {
  return <LegalPage content={TERMS_AND_CONDITIONS} />;
}
