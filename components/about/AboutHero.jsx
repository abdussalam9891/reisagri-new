"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Counter from "@/components/common/Counter";
import { ABOUT_HERO_STATS } from "@/constants/about";

const EASE = (t) => 1 - Math.pow(1 - t, 4);

/** Fade + rise + un-blur, ported from the original aboutHeroAnimations.js. */
function fadeIn(element, { delay, duration, y, blur }) {
  if (!element) return () => {};
  let rafId;
  let start = null;
  element.style.opacity = "0";
  element.style.transform = `translateY(${y}px)`;
  element.style.filter = `blur(${blur}px)`;

  const frame = (time) => {
    if (!start) start = time;
    const elapsed = time - start;
    if (elapsed >= delay) {
      const e = EASE(Math.min((elapsed - delay) / duration, 1));
      element.style.opacity = String(e);
      element.style.transform = `translateY(${y - y * e}px)`;
      element.style.filter = `blur(${blur - blur * e}px)`;
      if (e >= 1) return;
    }
    rafId = requestAnimationFrame(frame);
  };
  rafId = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(rafId);
}

// Stat cells: borders differ per position to draw a 2×2 grid on mobile and a single row from sm up.
const STAT_BORDERS = [
  "border-r border-b sm:border-b-0",
  "border-b sm:border-r sm:border-b-0",
  "border-r",
  "",
];

export default function AboutHero() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const cleanups = [
      fadeIn(titleRef.current, { delay: 250, duration: 1100, y: 60, blur: 10 }),
      fadeIn(actionsRef.current, { delay: 1150, duration: 850, y: 40, blur: 8 }),
      fadeIn(statsRef.current, { delay: 1500, duration: 850, y: 40, blur: 8 }),
    ];

    /* Parallax */
    let ticking = false;
    const update = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0) scale(1.08)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      cleanups.forEach((fn) => fn());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative h-[72svh] max-h-[680px] min-h-[520px] overflow-hidden md:h-[78vh] md:max-h-[720px] md:min-h-[580px] lg:h-[82vh] lg:max-h-[760px] lg:min-h-[600px]">
      <div ref={imageRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.08)" }}>
        <Image
          src="/images/maize.jpg"
          alt="Agricultural farming and maize"
          fill
          priority
          sizes="100vw"
          draggable="false"
          className="select-none object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/35 md:from-black/80 md:via-black/60 md:to-black/30" />

      <div className="relative z-20 mx-auto mt-10 flex min-h-full max-w-7xl items-center px-6 sm:px-8 lg:px-12 xl:px-14">
        <div className="max-w-[620px] pb-24 sm:pb-28 md:max-w-[680px] md:pb-32 lg:max-w-[720px] lg:pb-36">
          <h1
            ref={titleRef}
            className="mt-4 max-w-[340px] font-serif text-[29px] leading-[1.06] tracking-[-0.02em] text-white sm:text-[32px] md:max-w-[620px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
          >
            Building Trusted Agricultural Supply Chains Worldwide
          </h1>

          <div ref={actionsRef} className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4 md:mt-11 lg:mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#E8720F] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#C95F06] sm:px-7 sm:py-3.5 sm:text-xs md:px-8 md:py-4 md:text-sm"
            >
              Get Quote
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>

            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:rounded-[6px_20px_6px_20px] hover:border-[#E8720F] hover:shadow-[0_16px_35px_rgba(232,114,15,.22)] sm:px-7 sm:py-3.5 sm:text-xs md:px-8 md:py-4 md:text-sm"
            >
              Explore Products
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 w-full">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-14">
          <div
            ref={statsRef}
            className="absolute inset-x-0 bottom-0 z-30 grid grid-cols-2 overflow-hidden border-t border-white/10 bg-black/25 backdrop-blur-md sm:grid-cols-4"
          >
            {ABOUT_HERO_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-w-0 flex-col items-center justify-center border-white/10 px-2 py-3 text-center sm:px-4 sm:py-4 md:px-6 md:py-5 ${STAT_BORDERS[index]}`}
              >
                <Counter
                  as="h3"
                  value={stat.value}
                  className="font-serif text-[18px] leading-none text-[#E8720F] sm:text-2xl md:text-3xl lg:text-4xl"
                />
                <p className="mt-1.5 whitespace-nowrap text-[7px] font-medium uppercase leading-none tracking-[0.08em] text-white/65 sm:text-[9px] sm:tracking-[0.12em] md:mt-2 md:text-[10px] md:tracking-[0.18em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-black/80 via-black/30 to-transparent md:h-48" />
    </section>
  );
}
