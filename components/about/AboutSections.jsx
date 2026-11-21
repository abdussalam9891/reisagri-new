import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Lines from "@/components/common/Lines";
import SectionHeading from "@/components/common/SectionHeading";
import { ABOUT_CTA, CORE_VALUES, FOUNDATION, LEADERSHIP, TIMELINE } from "@/constants/about";

const topBar =
  "absolute left-0 top-0 h-1 w-0 bg-[#E8720F] transition-all duration-500 group-hover:w-full";

/* ---------------------------------------------------------------- */
/* Foundation                                                       */
/* ---------------------------------------------------------------- */

export function Foundation({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-14">
        <SectionHeading {...FOUNDATION.heading} />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {FOUNDATION.cards.map((card) => (
            <InfoCard key={card.badge} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ badge, title, description, icon: Icon, variant }) {
  const dark = variant === "dark";
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] p-8 shadow-xs transition-all duration-500 hover:-translate-y-2 sm:p-10 ${
        dark
          ? "bg-[#181818] text-white hover:shadow-[0_30px_60px_rgba(0,0,0,.35)]"
          : "border border-[#ECECEC] bg-white hover:border-[#E8720F]/60 hover:shadow-[0_25px_50px_rgba(232,114,15,.10)]"
      }`}
    >
      <div className={topBar} />
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${dark ? "bg-white/10" : "bg-[#FFF6EE]"}`}>
        <Icon className="h-8 w-8 text-[#E8720F]" />
      </div>
      <span className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#E8720F]">{badge}</span>
      <h3 className={`mt-4 font-serif text-3xl leading-tight ${dark ? "text-white" : "text-[#181818]"}`}>
        <Lines text={title} />
      </h3>
      <p className={`mt-6 leading-8 ${dark ? "text-white/75" : "text-[#666666]"}`}>{description}</p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Leadership                                                       */
/* ---------------------------------------------------------------- */

export function Leadership({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-14 lg:px-8 lg:py-14">
        {LEADERSHIP.map((leader) => (
          <div key={leader.name} className="grid items-start gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">
            <div>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-bl-[72px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[72px] bg-black transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:rounded-bl-[8px] hover:rounded-br-[48px] hover:rounded-tl-[48px] hover:rounded-tr-[8px]">
                <Image
                  src={leader.image}
                  alt={leader.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <div className="mt-8 border-t border-[#ECECEC] pt-6 text-center lg:text-left">
                <h3 className="text-[30px] font-semibold text-[#181818]">{leader.name}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-[#E8720F]">{leader.designation}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[2rem] leading-tight text-[#181818] sm:text-[2.5rem] lg:text-5xl">
                <Lines text={leader.heading} />
              </h2>
              {leader.paragraphs.map((paragraph, i) => (
                <p key={i} className="mt-8 leading-8 text-[#666666]">
                  {paragraph}
                </p>
              ))}
              <div className="group relative mt-12 overflow-hidden rounded-[30px] border border-[#ECECEC] bg-white p-8 shadow-xs transition-all duration-500 hover:-translate-y-1 hover:border-[#E8720F]/60 hover:shadow-[0_20px_45px_rgba(232,114,15,.12)]">
                <div className={topBar} />
                <Quote className="mb-5 h-9 w-9 text-[#E8720F]" />
                <p className="font-serif text-2xl italic leading-relaxed text-[#181818]">&quot;{leader.quote}&quot;</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Timeline                                                         */
/* ---------------------------------------------------------------- */

export function Timeline({ className = "" }) {
  const lastIndex = TIMELINE.items.length - 1;
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-8">
        <SectionHeading {...TIMELINE.heading} />
        <div className="mx-auto mt-12 max-w-3xl">
          {TIMELINE.items.map((item, index) => (
            <div key={item.year} className={`relative pl-12 ${index === lastIndex ? "pb-0" : "pb-16"}`}>
              {index !== lastIndex && <div className="absolute left-[15px] top-10 h-full w-[2px] bg-[#E9E9E9]" />}
              <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E8720F] ring-8 ring-[#FFF6EE]" />
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#E8720F]">{item.year}</span>
              <h3 className="mt-3 font-serif text-2xl text-[#181818]">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#666666]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Core values                                                      */
/* ---------------------------------------------------------------- */

export function CoreValues({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
        <SectionHeading {...CORE_VALUES.heading} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CORE_VALUES.values.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[30px] border border-[#ECECEC] bg-white p-6 shadow-xs transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#E8720F]/60 hover:shadow-[0_22px_45px_rgba(232,114,15,.12)] sm:p-7 lg:p-8"
            >
              <div className={topBar} />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF6EE] transition-all duration-300 group-hover:bg-[#E8720F]">
                <Icon className="h-7 w-7 text-[#E8720F] transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#181818] transition-colors duration-300 group-hover:text-[#E8720F]">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-[#666666]">{description}</p>
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

const CTA_TAGS = ["Global Export", "Reliable Supply Chain", "Quality Focused", "Long-Term Partnerships"];

export function AboutCTA({ className = "" }) {
  return (
    <section className={`relative overflow-hidden bg-[#0F0F10] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,114,15,.12),transparent_45%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#E8720F] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 text-center">
        <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] text-white lg:text-7xl">
          <Lines text={ABOUT_CTA.heading} />
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/65">{ABOUT_CTA.description}</p>

        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#E8720F] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F28723] hover:shadow-[0_20px_45px_rgba(232,114,15,.35)]"
          >
            <span>Request Quote</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/products"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/5 px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8720F] hover:shadow-[0_18px_40px_rgba(232,114,15,.18)]"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#E8720F] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
            <span className="relative z-10 flex items-center gap-3">
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-10 text-sm uppercase tracking-[0.18em] text-white/45">
          {CTA_TAGS.map((tag, i) => (
            <span key={tag} className="contents">
              {i > 0 && <span aria-hidden="true">•</span>}
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
