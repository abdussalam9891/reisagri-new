import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { buttonClass } from "@/components/common/button";
import ButtonArrow from "@/components/common/ButtonArrow";
import Lines from "@/components/common/Lines";
import SectionHeading from "@/components/common/SectionHeading";
import StepList from "@/components/common/StepList";
import {
  OTHER_COMMODITIES,
  PACKAGING,
  PRODUCT_HERO,
  PRODUCT_INTRODUCTION,
  PRODUCTS_CTA,
  RICE,
  TRADE_PROCESS,
  WHY_PRODUCTS,
} from "@/constants/products";

const container = "mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28";

/* ---------------------------------------------------------------- */
/* Hero                                                             */
/* ---------------------------------------------------------------- */

export function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-[#181818] text-white">
      <div className="absolute inset-0">
        <Image
          src={PRODUCT_HERO.image}
          alt={PRODUCT_HERO.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-[2.25rem] leading-[1.08] sm:text-5xl">
            <Lines text={PRODUCT_HERO.title} />
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{PRODUCT_HERO.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className={buttonClass("primary")}>
              Request Quote
              <ButtonArrow />
            </Link>
            <a href="#riceSection" className={buttonClass("outline-light")}>
              Explore Products
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Introduction                                                     */
/* ---------------------------------------------------------------- */

export function ProductsIntroduction() {
  return (
    <section className="bg-white">
      <div className={`${container} grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20`}>
        <div className="lg:sticky lg:top-28">
          <h2 className="font-serif text-[2rem] leading-tight text-[#181818] lg:text-[2.75rem]">
            <Lines text={PRODUCT_INTRODUCTION.title} />
          </h2>
          {PRODUCT_INTRODUCTION.paragraphs.map((p) => (
            <p key={p} className="mt-6 max-w-xl leading-8 text-[#666666]">
              {p}
            </p>
          ))}
        </div>

        <dl className="border-t border-[#E7E3DC]">
          {PRODUCT_INTRODUCTION.categories.map(({ label, title, description }) => (
            <div key={title} className="grid gap-2 border-b border-[#E7E3DC] py-7 sm:grid-cols-[140px_1fr] sm:gap-8">
              <span className="pt-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E8720F]">{label}</span>
              <div>
                <dt className="font-serif text-2xl text-[#181818]">{title}</dt>
                <dd className="mt-2 leading-7 text-[#666666]">{description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Brochure                                                         */
/* ---------------------------------------------------------------- */

const BROCHURE = "/REISAGRI_Brochure.pdf";

export function BrochureSection() {
  return (
    <section id="brochureSection" className="bg-[#181818]">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20`}>
        <div className="max-w-3xl">
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E8720F]">Company Brochure</span>
          <h2 className="mt-4 font-serif text-[2rem] leading-tight text-white lg:text-[2.75rem]">
            Discover <span className="text-[#E8720F]">Reis Agri Trading</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/65">
            Explore our company profile, agricultural commodities, sourcing capabilities, quality
            standards and global trading expertise in our detailed brochure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={BROCHURE} download className={buttonClass("primary")}>
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
            <a href={BROCHURE} target="_blank" rel="noopener noreferrer" className={buttonClass("outline-light")}>
              View Online
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-lg lg:max-w-md">
          <Image
            src="/images/basmati-mobile.webp"
            alt="Reis Agri Trading Brochure"
            width={768}
            height={1024}
            sizes="(min-width: 1024px) 448px, 384px"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Rice: specification tables instead of one card per variety      */
/* ---------------------------------------------------------------- */

export function RiceSection() {
  return (
    <section id="riceSection" className="scroll-mt-24 bg-white">
      <div className={container}>
        <SectionHeading title={RICE.title} description={RICE.description} align="split" />
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RiceTable heading="Basmati Rice" varieties={RICE.basmati} />
          <RiceTable heading="Non-Basmati Rice" varieties={RICE.nonBasmati} />
        </div>
      </div>
    </section>
  );
}

function RiceTable({ heading, varieties }) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-[#181818]">{heading}</h3>
      <table className="mt-6 w-full text-left">
        <thead>
          <tr className="border-b border-[#181818] text-[12px] uppercase tracking-[0.14em] text-[#666666]">
            <th scope="col" className="pb-3 font-semibold">Variety</th>
            <th scope="col" className="pb-3 font-semibold">Available As</th>
          </tr>
        </thead>
        <tbody>
          {varieties.map(({ name, image, variants }) => (
            <tr key={name} className="group border-b border-[#E7E3DC] align-middle">
              <th scope="row" className="py-4 pr-6 font-serif text-lg font-normal text-[#181818]">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-[#F3F0EA] sm:h-16 sm:w-16">
                    <Image
                      src={image}
                      alt={`${name} rice`}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {name}
                </div>
              </th>
              <td className="py-4 leading-7 text-[#666666]">{variants.join(" · ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Packaging                                                        */
/* ---------------------------------------------------------------- */

export function PackagingSection() {
  return (
    <section className="bg-[#F8F8F5]">
      <div className={`reveal reveal-up ${container} grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20`}>
        <SectionHeading title={PACKAGING.title} description={PACKAGING.description} align="left" />

        <div className="grid gap-10 sm:grid-cols-2">
          {PACKAGING.cards.map(({ title, items }) => (
            <div key={title}>
              <h3 className="font-serif text-2xl text-[#181818]">{title}</h3>
              <ul className="mt-5 border-t border-[#D9D4CA]">
                {items.map((item) => (
                  <li key={item} className="border-b border-[#D9D4CA] py-3.5 text-[#444444]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Other commodities: editorial rows with photography               */
/* ---------------------------------------------------------------- */

export function OtherCommodities() {
  return (
    <section id="otherCommoditiesSection" className="scroll-mt-24 bg-white">
      <div className={`reveal reveal-up ${container}`}>
        <SectionHeading title={OTHER_COMMODITIES.title} description={OTHER_COMMODITIES.description} align="split" />

        <div className="mt-14 border-t border-[#E7E3DC]">
          {OTHER_COMMODITIES.products.map(({ title, image, description }) => (
            <div
              key={title}
              className="grid items-center gap-6 border-b border-[#E7E3DC] py-8 sm:grid-cols-[180px_1fr] sm:gap-10 lg:grid-cols-[220px_280px_1fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image src={image} alt={title} fill sizes="220px" className="object-cover" />
              </div>
              <h3 className="font-serif text-3xl text-[#181818]">{title}</h3>
              <p className="leading-8 text-[#666666] sm:col-start-2 lg:col-start-auto">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Why choose                                                       */
/* ---------------------------------------------------------------- */

export function WhyChooseProducts() {
  return (
    <section className="bg-[#181818]">
      <div className={`reveal reveal-up ${container}`}>
        <SectionHeading title={WHY_PRODUCTS.title} description={WHY_PRODUCTS.description} align="split" dark />
        <StepList steps={WHY_PRODUCTS.features} className="lg:grid-cols-4" dark />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Trade process                                                    */
/* ---------------------------------------------------------------- */

export function TradeProcess() {
  return (
    <section className="bg-[#F8F8F5]">
      <div className={`reveal reveal-up ${container}`}>
        <SectionHeading title={TRADE_PROCESS.title} description={TRADE_PROCESS.description} align="split" />
        <StepList steps={TRADE_PROCESS.steps} className="lg:grid-cols-4" />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* CTA                                                              */
/* ---------------------------------------------------------------- */

export function ProductsCTA() {
  return (
    <section className="reveal reveal-up bg-white">
      <div className={`${container} flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between`}>
        <div className="max-w-3xl">
          <h2 className="font-serif text-[2rem] leading-[1.1] text-[#181818] lg:text-[3rem]">
            <Lines text={PRODUCTS_CTA.heading} />
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#666666]">{PRODUCTS_CTA.description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <Link href={PRODUCTS_CTA.button.href} className={buttonClass("primary")}>
            {PRODUCTS_CTA.button.text}
            <ButtonArrow />
          </Link>
          <Link href="/contact" className={buttonClass("outline")}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
