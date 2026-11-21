import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY_POLICY } from "@/constants/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Privacy Policy | Reis Agri Trading" },
  description:
    "Read the Privacy Policy of Reis Agri Trading to understand how we collect, use, store and protect your personal and business information while providing agricultural commodity trading and international export services.",
  keywords:
    "Reis Agri Trading, REISAGRI, Privacy Policy, Agricultural Commodity Exporter, Export Services, Data Privacy, International Trade",
  path: "/privacy-policy",
  ogDescription:
    "Learn how Reis Agri Trading collects, stores, uses and protects your personal and business information.",
  twitterDescription:
    "Learn how Reis Agri Trading collects, stores and protects your personal and business information.",
});

export default function PrivacyPolicyPage() {
  return <LegalPage content={PRIVACY_POLICY} />;
}
