import Image from "next/image";
import Link from "next/link";
import { buttonClass } from "@/components/common/button";
import ButtonArrow from "@/components/common/ButtonArrow";
import Lines from "@/components/common/Lines";
import SectionHeading from "@/components/common/SectionHeading";
import { CTA, FAQ, GLOBAL_PRESENCE } from "@/constants/home";
import FaqAccordion from "./FaqAccordion";
import WorldMap from "./WorldMap";

export function GlobalPresence({ className = "" }) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <SectionHeading title={GLOBAL_PRESENCE.title} description={GLOBAL_PRESENCE.description} align="split" />
        <div className="mt-12">
          <WorldMap markets={GLOBAL_PRESENCE.markets} />
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ className = "" }) {
  return (
    <section className={`border-t border-[#ECE8E1] ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[420px_1fr] lg:gap-20">
          <div className="h-fit lg:sticky lg:top-28">
            <SectionHeading title={FAQ.title} description={FAQ.description} align="left" />
            <p className="mt-8 leading-8 text-[#666666]">
              Still have questions? Our team is ready to assist you with product selection,
              quotations, export documentation and international logistics.
            </p>
            <Link href="/contact" className={buttonClass("dark", "mt-8")}>
              Contact Us
              <ButtonArrow />
            </Link>
          </div>

          <FaqAccordion questions={FAQ.questions} />
        </div>
      </div>
    </section>
  );
}

export function HomeCTA({ className = "" }) {
  return (
    <div className={className}>
      <section className="relative overflow-hidden bg-[#181818]">
        <Image src={CTA.background} alt="" aria-hidden="true" fill sizes="100vw" className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-[#181818]/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h2 className="font-serif text-[2rem] leading-[1.1] text-white lg:text-[3rem]">
              <Lines text={CTA.title} />
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-white/70 lg:text-lg">{CTA.description}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={CTA.primaryButton.href} className={buttonClass("primary")}>
                {CTA.primaryButton.text}
                <ButtonArrow />
              </Link>
              <Link href={CTA.secondaryButton.href} className={buttonClass("outline-light")}>
                {CTA.secondaryButton.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
