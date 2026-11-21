import {
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  FileText,
  Handshake,
  MessageCircle,
  MessagesSquare,
  PackageCheck,
  Ship,
  ShieldCheck,
  Award,
} from "lucide-react";

export const ABOUT_PREVIEW = {
  badge: "About REISAGRI",
  title: "Building Trusted Agricultural\nPartnerships Worldwide.",
  description:
    "Reis Agri Trading is a trusted agricultural commodity exporter connecting reliable producers with international buyers through premium-quality products, transparent communication and dependable supply chain solutions.",
  video: "/videos/reisagriVideo.mp4",
  poster: "/images/10.webp",
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "25+", label: "Countries Served" },
    { value: "100%", label: "Quality Commitment" },
    { value: "24/7", label: "Customer Support" },
  ],
  cta: { text: "About Reis Agri", href: "/about" },
};

export const PRODUCT_CATEGORIES_HEADING = {
  badge: "Our Products",
  title: "A Complete Range Of\nAgricultural Commodities.",
  description:
    "From premium grains to essential food commodities, Reis Agri Trading delivers reliable sourcing solutions backed by trusted supplier networks and efficient global logistics.",
};

export const WHY_CHOOSE = {
  badge: "Why Choose REISAGRI",
  title: "Built Around Trust,\nQuality and Reliability",
  description:
    "Every shipment reflects our commitment to dependable sourcing, international quality standards and long-term business relationships.",
  cards: [
    {
      icon: ShieldCheck,
      title: "Trusted Supplier Network",
      description:
        "We partner with carefully selected producers to ensure consistent quality and reliable long-term supply.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Every commodity is sourced and supplied with strict quality control and international export standards.",
    },
    {
      icon: Ship,
      title: "Global Logistics",
      description:
        "Efficient export documentation, freight coordination and dependable international delivery.",
    },
    {
      icon: MessagesSquare,
      title: "Transparent Communication",
      description:
        "Clear updates, honest pricing and responsive support throughout every stage of the business process.",
    },
    {
      icon: Clock3,
      title: "Reliable Delivery",
      description:
        "Timely execution backed by efficient supply chain management and trusted logistics partners.",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description:
        "We focus on building lasting relationships that create sustainable value for buyers and suppliers alike.",
    },
  ],
};

export const PROCESS = {
  badge: "How We Work",
  title: "From Inquiry To Delivery",
  description:
    "Every shipment follows a transparent and structured process that ensures quality, efficiency and dependable execution.",
  steps: [
    {
      number: "01",
      icon: MessageCircle,
      title: "Inquiry",
      description: "Share your product requirements, quantity and destination.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Quotation",
      description: "Receive transparent pricing, specifications and commercial terms.",
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Order Confirmation",
      description: "Finalize product specifications, documentation and payment terms.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Quality Inspection",
      description: "Every shipment undergoes strict quality checks before dispatch.",
    },
    {
      number: "05",
      icon: Ship,
      title: "Export & Logistics",
      description: "We coordinate documentation, freight and international shipping.",
    },
    {
      number: "06",
      icon: PackageCheck,
      title: "Delivered",
      description: "Reliable delivery with continuous communication until completion.",
    },
  ],
};

export const GLOBAL_PRESENCE = {
  badge: "Global Presence",
  title: "Connecting Agricultural\nMarkets Worldwide.",
  description:
    "Through trusted sourcing, efficient logistics and dependable partnerships, Reis Agri delivers agricultural commodities across key international markets.",
  markets: [
    { name: "Africa", x: "27%", y: "61%" },
    { name: "Middle East", x: "55%", y: "42%" },
    { name: "Asia", x: "72%", y: "36%" },
    { name: "Europe", x: "49%", y: "22%" },
  ],
};

export const FAQ = {
  badge: "Frequently Asked Questions",
  title: "Everything You Need\nTo Know",
  description:
    "Find answers to the most common questions about our agricultural commodities, export process, logistics and business partnerships.",
  questions: [
    {
      question: "What agricultural commodities do you export?",
      answer:
        "We export premium-quality rice, sugar, pulses, spices, maize and other agricultural commodities sourced from trusted producers.",
    },
    {
      question: "Which countries do you export to?",
      answer:
        "Reis Agri serves customers across Africa, the Middle East, Asia and other international markets.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "The minimum order quantity depends on the product and destination. Please contact our team for customized quotations.",
    },
    {
      question: "Can you provide customized packaging?",
      answer:
        "Yes. We offer customized packaging and private labeling based on customer requirements.",
    },
    {
      question: "What certifications do your products have?",
      answer:
        "Our products are supplied in accordance with applicable export standards and quality requirements. Specific certifications vary by product.",
    },
    {
      question: "How long does export delivery take?",
      answer:
        "Delivery timelines depend on destination, product availability and shipping schedules. Our team provides estimated timelines before order confirmation.",
    },
  ],
};

export const CTA = {
  title: "Ready To Build\nLong-Term Agricultural\nPartnerships?",
  description:
    "Partner with Reis Agri for premium agricultural commodities, dependable sourcing and reliable export solutions tailored to your business needs.",
  primaryButton: { text: "Request a Quote", href: "/contact" },
  secondaryButton: { text: "Contact Us", href: "/contact" },
  features: [
    { icon: BadgeCheck, text: "Premium Quality" },
    { icon: Ship, text: "Global Logistics" },
    { icon: Handshake, text: "Trusted Partnership" },
    { icon: MessagesSquare, text: "Transparent Communication" },
  ],
  background: "/images/warehouse.webp",
};
