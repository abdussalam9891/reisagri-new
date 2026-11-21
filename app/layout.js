import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/common/RevealObserver";
import JsonLd from "@/components/common/JsonLd";
import { CONTACT, OG_IMAGE, SITE_URL } from "@/constants/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Reis Agri Trading | Global Agricultural Commodity Exporter",
  description:
    "Reis Agri Trading is a trusted agricultural commodity trading and export company specializing in premium-quality rice, sugar, spices, maize, grains and pulses.",
  authors: [{ name: "Reis Agri Trading" }],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    siteName: "REISAGRI",
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, type: "image/jpeg" }],
  },
  other: { contact: CONTACT.email },
};

export const viewport = {
  themeColor: "#181818",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Reis Agri Trading",
  alternateName: "REISAGRI",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/reisagri-logo.png`,
  description:
    "Reis Agri Trading is a trusted agricultural commodity trading and export company specializing in premium-quality rice, sugar, spices, maize, grains and pulses.",
  email: CONTACT.email,
  telephone: "+91-8298771036",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No. TK1, Third Floor, Living Style Mall, Jasola",
    addressLocality: "New Delhi",
    postalCode: "110025",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/reisagri/"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Reis Agri Trading",
  url: `${SITE_URL}/`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-white font-sans text-[#222222] antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
