import {
  BadgeCheck,
  Bean,
  FileText,
  Handshake,
  Leaf,
  MessagesSquare,
  Package,
  ShieldCheck,
  Ship,
  Sprout,
  Warehouse,
  Wheat,
} from "lucide-react";

export const PRODUCT_CATEGORIES = [
  {
    slug: "basmati-rice",
    title: "Basmati Rice",
    description:
      "Premium Indian basmati rice including 1121, 1509, 1718 and Pusa varieties available in Steam, Golden Sella, Creamy Sella and Raw variants.",
    image: "/images/basmatiRice.webp",
    href: "/products#riceSection",
  },
  {
    slug: "non-basmati-rice",
    title: "Non-Basmati Rice",
    description:
      "Export-quality non-basmati rice including IR 64, PR 11/14, RH 10, Taj, Swarna, Sugandha, Govind Bhog, Sona Masuri and 100% Broken Rice.",
    image: "/images/nonBasmatiRice.webp",
    href: "/products#riceSection",
  },
  {
    slug: "wheat",
    title: "Wheat",
    description:
      "Premium-quality wheat sourced from trusted producers for flour mills, food manufacturers and international wholesale markets.",
    image: "/images/wheat.webp",
    href: "/products#otherCommoditiesSection",
  },
  {
    slug: "sugar",
    title: "Sugar",
    description:
      "High-quality refined sugar supplied with dependable sourcing, consistent quality standards and efficient international logistics.",
    image: "/images/sugar.webp",
    href: "/products#otherCommoditiesSection",
  },
  {
    slug: "maize",
    title: "Maize",
    description:
      "Premium food-grade and feed-grade maize supplied in bulk with strict quality control and reliable export logistics.",
    image: "/images/maize.jpg",
    href: "/products#otherCommoditiesSection",
  },
  {
    slug: "pulses",
    title: "Pulses",
    description:
      "A wide range of export-quality pulses carefully sourced to meet international quality standards and buyer requirements.",
    image: "/images/pulses.webp",
    href: "/products#otherCommoditiesSection",
  },
];

export const PRODUCT_HERO = {
  title: "Premium Agricultural\nCommodities For\nGlobal Markets",
  description:
    "Reis Agri Trading supplies premium-quality agricultural commodities sourced from trusted producers across India. Our expertise lies in delivering consistent quality, dependable sourcing and efficient export solutions for buyers worldwide.",
  image: "/images/sugar2.webp",
  imageAlt: "Agricultural Commodity Export",
};

export const PRODUCT_INTRODUCTION = {
  title: "Premium Agricultural\nCommodities For\nInternational Trade",
  paragraphs: [
    "Reis Agri Trading supplies a diverse portfolio of agricultural commodities sourced from trusted producers across India and delivered to buyers worldwide through dependable export operations.",
    "Rice remains our flagship product, supported by carefully selected wheat, sugar, maize, pulses and spices that meet international quality expectations.",
  ],
  categories: [
    {
      label: "Flagship",
      title: "Rice",
      icon: Wheat,
      description:
        "Extensive portfolio of premium basmati and non-basmati rice varieties for global buyers.",
    },
    {
      label: "Export",
      title: "Sugar",
      icon: Package,
      description: "Reliable supply of refined sugar for food processing and wholesale markets.",
    },
    {
      label: "Bulk",
      title: "Grains & Maize",
      icon: Warehouse,
      description: "Food and feed grade commodities sourced through dependable procurement.",
    },
    {
      label: "Agriculture",
      title: "Pulses & Spices",
      icon: Leaf,
      description: "Premium Indian pulses and spices sourced for export markets.",
    },
  ],
};

export const RICE = {
  title: "Our Flagship\nExport Commodity",
  description:
    "Rice represents the core of our export portfolio. We supply an extensive range of premium basmati and non-basmati varieties, sourced from trusted mills and processed to meet international quality standards.",
  nonBasmati: [
    { name: "IR 64", variants: ["White Raw", "Parboiled"] },
    { name: "PR 11 / PR 14", variants: ["Steam", "Golden Sella", "Creamy Sella"] },
    { name: "RH 10", variants: ["Steam", "Golden Sella", "Creamy Sella"] },
    { name: "Taj", variants: ["Steam", "Creamy Sella"] },
    { name: "Swarna", variants: ["White Raw", "Parboiled"] },
    { name: "Sugandha", variants: ["Creamy Sella"] },
    { name: "Govind Bhog", variants: ["Raw Rice"] },
    { name: "Sona Masuri", variants: ["Steam Rice"] },
    { name: "100% Broken Rice", variants: ["Export Quality"] },
  ],
  basmati: [
    { name: "1121", variants: ["Steam", "Golden Sella", "Creamy Sella"] },
    { name: "1509", variants: ["Steam", "Golden Sella", "Creamy Sella"] },
    { name: "1718", variants: ["Steam", "Golden Sella", "Creamy Sella"] },
    { name: "Pusa", variants: ["Raw", "Golden Sella", "Creamy Sella"] },
  ],
};

export const OTHER_COMMODITIES = {
  title: "Beyond Rice,\nA Diverse Commodity Portfolio",
  description:
    "While rice remains our flagship commodity, we also supply a broad range of agricultural products sourced through trusted supplier networks to meet the diverse requirements of global buyers.",
  products: [
    {
      title: "Wheat",
      icon: Wheat,
      description:
        "Premium-quality wheat sourced from trusted producers and supplied for food processing, flour milling and international wholesale markets.",
    },
    {
      title: "Sugar",
      icon: Package,
      description:
        "High-quality refined sugar supplied with dependable sourcing, export documentation and timely shipment coordination.",
    },
    {
      title: "Maize",
      icon: Leaf,
      description:
        "Food-grade and feed-grade maize supplied in bulk quantities with consistent quality and reliable logistics.",
    },
    {
      title: "Pulses",
      icon: Bean,
      description:
        "A diverse range of export-quality pulses carefully sourced to meet international quality expectations.",
    },
    {
      title: "Indian Spices",
      icon: Sprout,
      description:
        "Whole and ground Indian spices selected for freshness, purity and consistent export quality.",
    },
  ],
};

export const PACKAGING = {
  title: "Built Around Your\nImport Requirements",
  description:
    "From packaging preferences to export documentation and shipment coordination, we provide flexible solutions designed to meet the requirements of international buyers.",
  cards: [
    {
      title: "Packaging",
      icon: Package,
      items: ["PP Bags", "Jute Bags", "Custom Packaging", "Private Label Packaging"],
    },
    {
      title: "Export Support",
      icon: Ship,
      items: [
        "Container Loading",
        "Export Documentation",
        "Shipment Coordination",
        "Worldwide Delivery",
      ],
    },
  ],
};

export const WHY_PRODUCTS = {
  title: "Trusted By Importers\nAcross International Markets.",
  description:
    "Reis Agri Trading combines dependable sourcing, quality assurance and efficient export operations to build lasting partnerships with buyers around the world.",
  features: [
    {
      icon: ShieldCheck,
      title: "Direct Sourcing Network",
      description:
        "We collaborate with trusted producers and processing partners to ensure consistent quality, dependable supply and complete traceability.",
    },
    {
      icon: Ship,
      title: "Reliable Export Logistics",
      description:
        "Our experienced team coordinates documentation, container loading and shipment scheduling to ensure smooth international deliveries.",
    },
    {
      icon: BadgeCheck,
      title: "Consistent Quality Assurance",
      description:
        "Every shipment is inspected against buyer specifications before dispatch, ensuring confidence in every order.",
    },
    {
      icon: Handshake,
      title: "Long-Term Business Partnerships",
      description:
        "We focus on transparency, communication and reliability to build enduring relationships with importers across global markets.",
    },
  ],
};

export const TRADE_PROCESS = {
  title: "Simple.\nTransparent.\nReliable.",
  description:
    "Our export process is designed to make international sourcing simple, transparent and dependable from the first enquiry to final shipment.",
  steps: [
    {
      icon: MessagesSquare,
      title: "Inquiry",
      description:
        "Share your product requirements, destination, quantity and packaging preferences with our export team.",
    },
    {
      icon: FileText,
      title: "Quotation",
      description:
        "We prepare a detailed commercial quotation including specifications, pricing, delivery terms and timelines.",
    },
    {
      icon: BadgeCheck,
      title: "Quality Approval",
      description:
        "Samples, product specifications and quality parameters are reviewed and approved before production.",
    },
    {
      icon: Ship,
      title: "Shipment",
      description:
        "We coordinate packaging, documentation, logistics and international delivery until your order reaches its destination.",
    },
  ],
};

export const PRODUCTS_CTA = {
  heading: "Looking For A Trusted\nAgricultural Commodity Supplier?",
  description:
    "Whether you're sourcing premium rice, wheat, sugar, maize, pulses or spices, Reis Agri Trading delivers dependable sourcing, transparent communication and efficient export solutions worldwide.",
  button: { text: "Request A Quote", href: "/contact" },
};
