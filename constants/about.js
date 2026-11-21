import { BadgeCheck, Globe, Handshake, Shield, Target, Truck } from "lucide-react";

export const ABOUT_HERO_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "25+", label: "Countries Served" },
  { value: "100%", label: "Quality Commitment" },
  { value: "24/7", label: "Customer Support" },
];

export const FOUNDATION = {
  heading: {
    badge: "Our Foundation",
    title: "Purpose That Drives\nEvery Partnership",
    description:
      "Everything we do is guided by integrity, quality and long-term relationships. These principles shape every sourcing decision, every shipment and every partnership we build across international markets.",
  },
  cards: [
    {
      badge: "Our Mission",
      icon: Target,
      variant: "light",
      title: "Deliver Trust Through\nEvery Shipment",
      description:
        "To connect trusted agricultural producers with global buyers by delivering premium-quality commodities, dependable sourcing and efficient supply chain solutions that create long-term value.",
    },
    {
      badge: "Our Vision",
      icon: Globe,
      variant: "dark",
      title: "Becoming A Trusted\nGlobal Agricultural\nTrading Partner.",
      description:
        "We aspire to become a globally respected agricultural commodity trading company recognised for integrity, operational excellence and dependable partnerships across international markets.",
    },
  ],
};

export const CORE_VALUES = {
  heading: {
    badge: "Core Values",
    title: "The Principles Behind\nEverything We Do",
    description:
      "Our values guide every sourcing decision, every shipment and every long-term partnership we build across global agricultural markets.",
  },
  values: [
    {
      title: "Integrity",
      icon: Shield,
      description:
        "Honesty, transparency and ethical business practices remain at the heart of every relationship we build.",
    },
    {
      title: "Quality",
      icon: BadgeCheck,
      description:
        "Every shipment is sourced and inspected with strict quality standards, ensuring consistency, reliability and customer satisfaction.",
    },
    {
      title: "Reliability",
      icon: Truck,
      description:
        "From sourcing to export logistics, we ensure dependable execution, timely communication and smooth delivery across every stage.",
    },
    {
      title: "Partnership",
      icon: Handshake,
      description:
        "We believe lasting success is built through mutual trust, collaboration and long-term relationships that benefit every stakeholder.",
    },
  ],
};

export const LEADERSHIP = [
  {
    image: "/assets/images/ceo.jpeg",
    alt: "Mohammad Izhar Alam - CO-FOUNDER & CEO",
    heading: "Driven by Experience\nGuided by Integrity",
    paragraphs: [
      <>
        Reis Agri Trading is led by{" "}
        <strong className="text-[#181818]">Mohammad Izhar Alam</strong>, CO-FOUNDER &amp; CEO,
        whose experience in agricultural commodity trading and international supply chain
        management has helped shape the company&apos;s commitment to reliability, transparency
        and operational excellence.
      </>,
      "With more than a decade of industry experience, he has worked across sourcing, procurement, risk management and international trade, developing strong relationships with producers, logistics partners and buyers across multiple markets.",
      "His leadership philosophy is simple: build long-term partnerships through honesty, consistent quality and dependable execution. Under his guidance, Reis Agri Trading continues to strengthen its position as a trusted sourcing partner for agricultural commodities worldwide.",
    ],
    quote:
      "Great partnerships are built on trust, consistency and the confidence that every shipment will meet expectations.",
    name: "Mohammad Izhar Alam",
    designation: "CO-FOUNDER & CEO",
  },
];

export const TIMELINE = {
  heading: {
    title: "Growing Through\nExperience",
    description:
      "Every milestone reflects our commitment to building stronger supply chains, trusted partnerships and sustainable growth.",
  },
  items: [
    {
      year: "2014",
      title: "Industry Foundation",
      description:
        "Built strong expertise in agricultural commodity trading, procurement and supply chain management.",
    },
    {
      year: "2018",
      title: "Global Network Expansion",
      description:
        "Established long-term relationships with trusted suppliers, logistics partners and international buyers.",
    },
    {
      year: "2022",
      title: "Strengthening Operations",
      description:
        "Enhanced sourcing capabilities, quality assurance processes and export documentation systems.",
    },
    {
      year: "Today",
      title: "REISAGRI",
      description:
        "Continuing to deliver dependable sourcing solutions while building lasting partnerships across global markets.",
    },
  ],
};

export const ABOUT_CTA = {
  heading: "Looking For A Reliable\nAgricultural Trading Partner?",
  description:
    "Partner with Reis Agri for premium agricultural commodities, dependable sourcing, transparent communication and efficient global supply chain solutions tailored to your business.",
};
