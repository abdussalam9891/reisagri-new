"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/constants/heroSlides";
import {
  animateButton,
  animateDescription,
  animateImageEnter,
  animateImageZoom,
  animateTitleLine,
  createTimeline,
} from "./heroAnimations";

const SLIDE_DURATION = 6500;

const SLIDE_SHOWN = ["opacity-100", "pointer-events-auto", "z-20"];
const SLIDE_HIDDEN = ["opacity-0", "pointer-events-none", "z-10"];
const CONTENT_SHOWN = ["opacity-100", "visible"];
const CONTENT_HIDDEN = ["opacity-0", "invisible", "absolute"];

const arrowButtonClass =
  "absolute top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 hover:border-white hover:bg-black/50 focus:outline-hidden focus:ring-2 focus:ring-[#E8720F]/50 lg:flex xl:h-14 xl:w-14";

export default function HeroSlider() {
  const heroRef = useRef(null);

  /*
   * The slider is driven imperatively (class toggles + rAF animations), exactly
   * like the original vanilla implementation. React renders the markup once and
   * never re-renders it, so the DOM mutations below are safe.
   */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const slides = [...hero.querySelectorAll(".hero-slide")];
    const contents = [...hero.querySelectorAll(".hero-content")];
    const progressBars = [...hero.querySelectorAll(".hero-indicator-progress")];
    const timeline = createTimeline();
    const timers = [];

    let current = 0;
    let paused = false;

    const hideAll = () => {
      slides.forEach((s) => {
        s.classList.remove(...SLIDE_SHOWN);
        s.classList.add(...SLIDE_HIDDEN);
      });
      contents.forEach((c) => {
        c.classList.remove(...CONTENT_SHOWN);
        c.classList.add(...CONTENT_HIDDEN);
      });
    };

    const showCurrent = () => {
      slides[current].classList.remove(...SLIDE_HIDDEN);
      slides[current].classList.add(...SLIDE_SHOWN);
      contents[current].classList.remove(...CONTENT_HIDDEN);
      contents[current].classList.add(...CONTENT_SHOWN);
    };

    const startTimeline = () => {
      progressBars.forEach((bar) => (bar.style.transform = "scaleX(0)"));
      const bar = progressBars[current];
      timeline.start({
        slideDuration: SLIDE_DURATION,
        progress: (p) => {
          if (bar) bar.style.transform = `scaleX(${p})`;
        },
        complete: next,
      });
    };

    const play = () => {
      hideAll();
      showCurrent();

      const image = slides[current].querySelector(".hero-image");
      const content = contents[current];

      animateImageEnter(image);
      timers.push(animateImageZoom(image, 1400));

      content.querySelectorAll(".hero-title-word").forEach((line, i) => {
        animateTitleLine(line, 350 + i * 180);
      });
      animateDescription(content.querySelector(".hero-description"), 1000);
      animateButton(content.querySelector(".hero-button"), 1250);

      startTimeline();
    };

    function next() {
      timeline.cancel();
      current = (current + 1) % slides.length;
      play();
    }

    const previous = () => {
      timeline.cancel();
      current = (current - 1 + slides.length) % slides.length;
      play();
    };

    const goTo = (index) => {
      if (index === current || index < 0 || index >= slides.length) return;
      timeline.cancel();
      current = index;
      play();
    };

    const pause = () => {
      if (paused) return;
      paused = true;
      timeline.pause();
    };

    const resume = () => {
      if (!paused) return;
      paused = false;
      timeline.resume();
    };

    /* ---------- Controls ---------- */
    const onClick = (e) => {
      const target = e.target.closest("[data-hero-action]");
      if (!target) return;
      const action = target.dataset.heroAction;
      if (action === "next") next();
      else if (action === "prev") previous();
      else if (action === "goto") goTo(Number(target.dataset.index));
    };

    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") previous();
    };

    let touchStartX = 0;
    const onTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX;
    };
    const onTouchEnd = (e) => {
      const distance = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(distance) < 60) return;
      if (distance > 0) next();
      else previous();
    };

    const onVisibility = () => (document.hidden ? pause() : resume());

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(play, 200);
    };

    hero.addEventListener("click", onClick);
    hero.addEventListener("mouseenter", pause);
    hero.addEventListener("mouseleave", resume);
    hero.addEventListener("touchstart", onTouchStart, { passive: true });
    hero.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    play();

    return () => {
      timeline.cancel();
      timers.forEach(clearTimeout);
      clearTimeout(resizeTimer);
      hero.removeEventListener("click", onClick);
      hero.removeEventListener("mouseenter", pause);
      hero.removeEventListener("mouseleave", resume);
      hero.removeEventListener("touchstart", onTouchStart);
      hero.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-[68svh] max-h-[820px] min-h-[560px] overflow-hidden md:h-[65vh] lg:h-[72vh] xl:h-[76vh]"
    >
      {/* Background slides */}
      {HERO_SLIDES.map((slide, index) => {
        const first = index === 0;
        return (
          <div
            key={slide.image}
            data-slide={index}
            className={`hero-slide absolute inset-0 overflow-hidden ${
              first
                ? "z-20 opacity-100"
                : "pointer-events-none z-10 opacity-0 transition-opacity duration-[1600ms] ease-out"
            }`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={first ? slide.imageAlt : slide.title.replace(/\n/g, " ")}
                width={1920}
                height={1080}
                loading={first ? "eager" : "lazy"}
                fetchPriority={first ? "high" : "auto"}
                decoding="async"
                draggable="false"
                className="hero-image absolute inset-0 h-full w-full select-none object-cover"
              />
            </picture>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(18,18,18,.62)_35%,rgba(232,114,15,.12)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/80 via-black/35 to-transparent md:h-40" />
          </div>
        );
      })}

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-14">
          {HERO_SLIDES.map((slide, index) => {
            const HeadingTag = index === 0 ? "h1" : "h2";
            return (
              <div
                key={slide.image}
                data-content={index}
                className={`hero-content max-w-[680px] transition-opacity duration-700 ${
                  index === 0 ? "visible opacity-100" : "invisible absolute opacity-0"
                }`}
              >
                <HeadingTag className="hero-title mt-12 flex flex-col overflow-hidden font-serif text-[32px] font-semibold leading-[1.04] tracking-[-0.02em] text-white sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                  {slide.title.split("\n").map((line) => (
                    <span key={line} className="hero-title-line block overflow-hidden">
                      <span className="hero-title-word block">{line}</span>
                    </span>
                  ))}
                </HeadingTag>

                <p className="hero-description mt-6 hidden max-w-[580px] text-base font-light leading-7 text-white/90 md:block lg:mt-7 lg:text-lg lg:leading-8">
                  {slide.description}
                </p>

                <div className="hero-actions mt-7 sm:mt-8 md:mt-9 lg:mt-10">
                  <Link
                    href={slide.button.href}
                    className="hero-button group inline-flex items-center gap-2.5 rounded-full bg-[#E8720F] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#C95F06] sm:px-7 sm:py-3.5 sm:text-xs md:px-8 md:py-3.5 md:text-sm"
                  >
                    {slide.button.text}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 sm:bottom-10 sm:gap-4 md:bottom-12">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            data-hero-action="goto"
            data-index={index}
            aria-label={`Go to slide ${index + 1}`}
            className="hero-indicator relative h-[3px] w-12 shrink-0 overflow-hidden rounded-full bg-white/25 transition-opacity duration-300 hover:bg-white/40 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E8720F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-16 lg:w-20"
          >
            <span className="hero-indicator-progress absolute inset-0 origin-left rounded-full bg-[#E8720F]" style={{ transform: "scaleX(0)" }} />
          </button>
        ))}
      </div>

      {/* Previous / Next */}
      <button type="button" data-hero-action="prev" aria-label="Previous Slide" className={`${arrowButtonClass} left-5 lg:left-6`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button type="button" data-hero-action="next" aria-label="Next Slide" className={`${arrowButtonClass} right-5 lg:right-6`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-black/80 via-black/35 to-transparent md:h-40" />
    </section>
  );
}
