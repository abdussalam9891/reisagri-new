import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Download, FileText, Wheat } from "lucide-react";
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

/* "\n" in these titles was never rendered as a line break on the original site */
const oneLine = (text) => text.replace(/\n/g, " ");

const card =
  "group relative overflow-hidden rounded-[32px] border border-[#ECECEC] bg-white p-8 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#E8720F]";
const topBar =
  "absolute left-0 top-0 h-1 w-0 bg-[#E8720F] transition-all duration-500 group-hover:w-full";
const iconTile =
  "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FFF6EE] transition-all duration-300 group-hover:bg-[#E8720F]";
const iconClass = "h-8 w-8 text-[#E8720F] transition-all duration-300 group-hover:text-white";

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
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="max-w-3xl">
          <h1 className="mt-4 font-serif text-3xl leading-[1.08] sm:text-5xl lg:mt-4 lg:text-5xl">
            {oneLine(PRODUCT_HERO.title)}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{PRODUCT_HERO.description}</p>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E8720F] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(232,114,15,.35)]"
            >
              Request Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#riceSection"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] backdrop-blur-sm transition-all duration-500 hover:border-[#E8720F] hover:bg-white/10"
            >
              Explore Products
              <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
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
    <section className="relative bg-[#F8F7F4]">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="grid items-start gap-16 lg:grid-cols-[520px_1fr] lg:gap-20">
          <div className="reveal reveal-left lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl leading-[1.08] text-[#181818] sm:text-4xl lg:text-4xl">
              {oneLine(PRODUCT_INTRODUCTION.title)}
            </h2>
            {PRODUCT_INTRODUCTION.paragraphs.map((p) => (
              <p key={p} className="mt-6 max-w-xl text-[15px] leading-8 text-[#666666] sm:text-base">
                {p}
              </p>
            ))}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#riceSection"
                className="group inline-flex items-center gap-3 rounded-full bg-[#181818] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#E8720F] hover:shadow-[0_20px_40px_rgba(232,114,15,.25)]"
              >
                Explore Rice
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="reveal reveal-right space-y-6">
            {PRODUCT_INTRODUCTION.categories.map(({ label, title, icon: Icon, description }) => (
              <div key={title} className={`${card} hover:shadow-[0_30px_60px_rgba(232,114,15,.12)]`}>
                <div className={topBar} />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8720F]">{label}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-[#181818] sm:text-3xl">{title}</h3>
                  </div>
                  <div className={iconTile}>
                    <Icon className={`${iconClass} group-hover:rotate-6`} />
                  </div>
                </div>
                <p className="mt-6 leading-8 text-[#666666]">{description}</p>
              </div>
            ))}
          </div>
        </div>
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
    <section id="brochureSection" className="relative overflow-hidden bg-[#181818] py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#E8720F]/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#E8720F]/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8720F]">Company Brochure</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Discover <span className="text-[#E8720F]">Reis Agri Trading</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
              Explore our company profile, agricultural commodities, sourcing capabilities, quality
              standards and global trading expertise in our detailed brochure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BROCHURE}
                download
                className="group inline-flex items-center gap-3 rounded-full bg-[#E8720F] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f58220] hover:shadow-[0_12px_30px_rgba(232,114,15,0.25)]"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download Brochure</span>
              </a>
              <a
                href={BROCHURE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#E8720F] hover:text-[#E8720F]"
              >
                <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
                <span>View Brochure</span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-4 rounded-2xl border border-[#E8720F]/10" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/basmati-mobile.webp"
                alt="Reis Agri Trading Brochure"
                width={768}
                height={1024}
                sizes="(min-width: 1024px) 448px, 384px"
                className="block h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Rice                                                             */
/* ---------------------------------------------------------------- */

export function RiceSection() {
  return (
    <section id="riceSection" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8 lg:py-12">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight text-[#181818] md:text-4xl">{oneLine(RICE.title)}</h2>
          <p className="mt-2 leading-8 text-[#666666]">{RICE.description}</p>
        </div>
        <RiceCategory heading="Non-Basmati Rice" varieties={RICE.nonBasmati} />
        <RiceCategory heading="Basmati Rice" varieties={RICE.basmati} />
      </div>
    </section>
  );
}

function RiceCategory({ heading, varieties }) {
  return (
    <div className="mt-24">
      <h3 className="mb-12 font-serif text-3xl text-[#181818]">{heading}</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {varieties.map((variety) => (
          <div key={variety.name} className={`${card} hover:shadow-[0_25px_55px_rgba(232,114,15,.12)]`}>
            <div className={topBar} />
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8720F]">Rice Variety</p>
                <h4 className="mt-3 font-serif text-3xl leading-tight text-[#181818]">{variety.name}</h4>
              </div>
              <div className={iconTile}>
                <Wheat className={`${iconClass} group-hover:rotate-6`} />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {variety.variants.map((variant) => (
                <span
                  key={variant}
                  className="rounded-full border border-[#ECECEC] bg-[#FAFAF8] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#555555] transition-all duration-300 group-hover:border-[#E8720F]/40"
                >
                  {variant}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Packaging                                                        */
/* ---------------------------------------------------------------- */

export function PackagingSection() {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="reveal reveal-up mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="mt-2 font-serif text-4xl leading-tight text-[#181818] md:text-5xl">{oneLine(PACKAGING.title)}</h2>
          <p className="mt-8 leading-8 text-[#666666]">{PACKAGING.description}</p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {PACKAGING.cards.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group rounded-[32px] border border-[#ECECEC] bg-white p-8 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#E8720F] hover:shadow-[0_25px_60px_rgba(232,114,15,.12)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-3xl text-[#181818]">{title}</h3>
                <div className={iconTile}>
                  <Icon className={iconClass} />
                </div>
              </div>
              <ul className="mt-10 space-y-5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF6EE]">
                      <Check className="h-4 w-4 text-[#E8720F]" />
                    </div>
                    <span className="leading-7 text-[#666666]">{item}</span>
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
/* Other commodities                                                */
/* ---------------------------------------------------------------- */

export function OtherCommodities() {
  return (
    <section id="otherCommoditiesSection" className="scroll-mt-24 bg-[#F8F7F4]">
      <div className="reveal reveal-up mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="reveal reveal-left mt-2 font-serif text-5xl leading-[1.08] text-[#181818]">
            {oneLine(OTHER_COMMODITIES.title)}
          </h2>
          <p className="reveal reveal-left mt-8 leading-9 text-[#666666]">{OTHER_COMMODITIES.description}</p>
        </div>

        <div className="reveal reveal-right mt-24 divide-y divide-[#E8E8E8]">
          {OTHER_COMMODITIES.products.map(({ title, icon: Icon, description }) => (
            <div key={title} className="group grid gap-12 py-12 transition-all duration-300 hover:bg-white hover:px-6">
              <div className="grid items-start gap-10 lg:grid-cols-[220px_1fr_auto]">
                <div>
                  <div className={iconTile}>
                    <Icon className="h-8 w-8 text-[#E8720F] group-hover:text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-[#181818]">{title}</h3>
                  <p className="mt-6 max-w-3xl leading-8 text-[#666666]">{description}</p>
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-[#FFF3E8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8720F]">
                    Export
                  </span>
                </div>
              </div>
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
    <section className="bg-[#181818] text-white">
      <div className="reveal reveal-up mx-auto max-w-7xl px-5 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="reveal reveal-left mt-2 font-serif text-4xl leading-[1.08]">{oneLine(WHY_PRODUCTS.title)}</h2>
          <p className="reveal reveal-left mt-8 leading-9 text-white/70">{WHY_PRODUCTS.description}</p>
        </div>

        <div className="reveal reveal-right mt-24 space-y-8">
          {WHY_PRODUCTS.features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#E8720F] hover:bg-white/10"
            >
              <div className="grid items-center gap-10 lg:grid-cols-[100px_1fr]">
                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#E8720F]/10 transition-all duration-300 group-hover:bg-[#E8720F]">
                  <Icon className="h-12 w-12 text-[#E8720F] transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl leading-tight text-white">{title}</h3>
                  <p className="mt-5 leading-9 text-white/65">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Trade process                                                    */
/* ---------------------------------------------------------------- */

export function TradeProcess() {
  const total = TRADE_PROCESS.steps.length;
  return (
    <section className="bg-[#F8F7F4]">
      <div className="reveal reveal-up mx-auto max-w-7xl px-5 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="reveal reveal-left mt-2 font-serif text-5xl leading-[1.08] text-[#181818]">
            {oneLine(TRADE_PROCESS.title)}
          </h2>
          <p className="reveal reveal-left mt-8 leading-9 text-[#666666]">{TRADE_PROCESS.description}</p>
        </div>

        <div className="reveal reveal-right relative mt-24 grid gap-8 lg:grid-cols-4">
          {TRADE_PROCESS.steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="group relative">
              <div className="rounded-[32px] border border-[#ECECEC] bg-white p-8 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:border-[#E8720F] hover:shadow-[0_25px_60px_rgba(232,114,15,.12)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF6EE] transition-all duration-300 group-hover:bg-[#E8720F]">
                    <Icon className="h-8 w-8 text-[#E8720F] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="font-serif text-5xl text-[#ECECEC]">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-serif text-3xl leading-tight text-[#181818]">{title}</h3>
                <p className="mt-5 leading-8 text-[#666666]">{description}</p>
              </div>

              {index !== total - 1 && (
                <div className="absolute right-[-28px] top-1/2 hidden lg:block">
                  <ArrowRight className="h-8 w-8 text-[#E8720F]/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* CTA                                                              */
/* ---------------------------------------------------------------- */

export function ProductsCTA() {
  return (
    <section className="reveal reveal-up overflow-hidden bg-[#181818] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <h2 className="mt-2 font-serif text-3xl leading-tight text-white md:text-4xl">{oneLine(PRODUCTS_CTA.heading)}</h2>
        <p className="mx-auto mt-8 max-w-3xl leading-8 text-white/70">{PRODUCTS_CTA.description}</p>
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href={PRODUCTS_CTA.button.href}
            className="inline-flex items-center gap-3 rounded-full bg-[#E8720F] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F28D34] hover:shadow-[0_20px_40px_rgba(232,114,15,.25)]"
          >
            {PRODUCTS_CTA.button.text}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#E8720F] hover:bg-white/5"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

