import Image from "next/image";
import Link from "next/link";
import { buttonClass } from "@/components/common/button";
import ButtonArrow from "@/components/common/ButtonArrow";
import Lines from "@/components/common/Lines";
import SectionHeading from "@/components/common/SectionHeading";
import StepList from "@/components/common/StepList";
import { ABOUT_CTA, CORE_VALUES, FOUNDATION, LEADERSHIP, TIMELINE } from "@/constants/about";

const container = "mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28";

/* ---------------------------------------------------------------- */
/* Foundation: mission & vision as two editorial columns            */
/* ---------------------------------------------------------------- */

export function Foundation({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className={container}>
        <SectionHeading {...FOUNDATION.heading} align="split" />
        <div className="mt-14 grid border-t border-[#E7E3DC] lg:grid-cols-2">
          {FOUNDATION.cards.map(({ label, title, description }, i) => (
            <div
              key={label}
              className={`py-10 lg:py-12 ${i === 0 ? "lg:pr-16" : "border-t border-[#E7E3DC] lg:border-l lg:border-t-0 lg:pl-16"}`}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E8720F]">{label}</span>
              <h3 className="mt-4 font-serif text-[1.75rem] leading-tight text-[#181818]">
                <Lines text={title} />
              </h3>
              <p className="mt-5 leading-8 text-[#666666]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Leadership                                                       */
/* ---------------------------------------------------------------- */

export function Leadership({ className = "" }) {
  return (
    <section className={`bg-[#F8F8F5] ${className}`}>
      <div className={container}>
        {LEADERSHIP.map((leader) => (
          <div key={leader.name} className="grid items-start gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">
            <div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-black">
                <Image
                  src={leader.image}
                  alt={leader.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="select-none object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-2xl text-[#181818]">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-[#666666]">{leader.designation}</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[2rem] leading-tight text-[#181818] lg:text-[2.75rem]">
                <Lines text={leader.heading} />
              </h2>
              {leader.paragraphs.map((paragraph, i) => (
                <p key={i} className="mt-6 leading-8 text-[#666666]">
                  {paragraph}
                </p>
              ))}
              <blockquote className="mt-10 border-l-2 border-[#E8720F] pl-6 font-serif text-2xl italic leading-relaxed text-[#181818]">
                &ldquo;{leader.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Timeline: horizontal year rule                                   */
/* ---------------------------------------------------------------- */

export function Timeline({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className={container}>
        <SectionHeading {...TIMELINE.heading} align="split" />
        <StepList
          steps={TIMELINE.items.map(({ year, title, description }) => ({ number: year, title, description }))}
          className="lg:grid-cols-4"
        />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Core values                                                      */
/* ---------------------------------------------------------------- */

export function CoreValues({ className = "" }) {
  return (
    <section className={`bg-[#181818] ${className}`}>
      <div className={container}>
        <SectionHeading {...CORE_VALUES.heading} align="split" dark />
        <StepList steps={CORE_VALUES.values} className="lg:grid-cols-4" dark />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* CTA                                                              */
/* ---------------------------------------------------------------- */

export function AboutCTA({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className={`${container} flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between`}>
        <div className="max-w-3xl">
          <h2 className="font-serif text-[2rem] leading-[1.1] text-[#181818] lg:text-[3rem]">
            <Lines text={ABOUT_CTA.heading} />
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#666666] lg:text-lg">{ABOUT_CTA.description}</p>
        </div>

        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <Link href="/contact" className={buttonClass("primary")}>
            Request Quote
            <ButtonArrow />
          </Link>
          <Link href="/products" className={buttonClass("outline")}>
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
