import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Lines from "@/components/common/Lines";
import SectionHeading from "@/components/common/SectionHeading";
import { CTA, FAQ, GLOBAL_PRESENCE } from "@/constants/home";
import FaqAccordion from "./FaqAccordion";
import WorldMap from "./WorldMap";

export function GlobalPresence({ className = "" }) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <SectionHeading title={GLOBAL_PRESENCE.title} description={GLOBAL_PRESENCE.description} />
        <div className="mt-12">
          <WorldMap markets={GLOBAL_PRESENCE.markets} />
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ className = "" }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-20 lg:grid-cols-[420px_1fr]">
          <div className="h-fit lg:sticky lg:top-28">
            <SectionHeading title={FAQ.title} description={FAQ.description} />

            <div className="mt-10">
              <p className="leading-8 text-[#666666]">
                Still have questions? Our team is ready to assist you with product selection,
                quotations, export documentation and international logistics.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#181818] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8720F] hover:shadow-[0_20px_45px_rgba(232,114,15,.25)]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <FaqAccordion questions={FAQ.questions} />
        </div>
      </div>
    </section>
  );
}

const ctaButtonBase =
  "group inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 sm:px-9 sm:py-4 sm:text-sm";

export function HomeCTA({ className = "" }) {
  return (
    <div className={className}>
      <section className="relative overflow-hidden bg-[#181818]">
        <Image src={CTA.background} alt="" aria-hidden="true" fill sizes="100vw" className="object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-[#181818]/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,114,15,.20),transparent_68%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="reveal reveal-up mx-auto max-w-4xl">
            <h2 className="mt-4 font-serif text-[2rem] leading-[1.08] tracking-[-0.025em] text-white sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem]">
              <Lines text={CTA.title} />
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:text-lg">
              {CTA.description}
            </p>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={CTA.primaryButton.href}
              className={`${ctaButtonBase} bg-[#E8720F] hover:bg-[#F08B2F] hover:shadow-[0_20px_45px_rgba(232,114,15,.32)]`}
            >
              {CTA.primaryButton.text}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={CTA.secondaryButton.href}
              className={`${ctaButtonBase} border border-white/20 bg-white/5 backdrop-blur-md hover:rounded-[6px_22px_6px_22px] hover:border-[#E8720F] hover:bg-white/10 hover:shadow-[0_15px_35px_rgba(0,0,0,.20)]`}
            >
              {CTA.secondaryButton.text}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {CTA.features.map(({ icon: Icon, text }) => (
              <div key={text} className="group inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E8720F] group-hover:bg-[#E8720F]">
                  <Icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-sm font-medium tracking-wide text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
