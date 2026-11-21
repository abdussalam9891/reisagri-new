"use client";

import { useEffect, useRef } from "react";

const ROUTES = [
  { id: "route-africa", d: "M833 254 Q730 285 620 330" },
  { id: "route-europe", d: "M833 254 Q760 185 665 145" },
  { id: "route-middleeast", d: "M833 254 Q785 240 725 230" },
  { id: "route-asia", d: "M833 254 Q910 215 980 220" },
];

const labelClass =
  "whitespace-nowrap rounded-full border border-[#E8720F]/20 bg-[#181818]/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm";

/** World map with India origin glow; market markers pop in once the map is in view. */
export default function WorldMap({ markets }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const timers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        root.querySelectorAll(".market-marker").forEach((marker, index) => {
          timers.push(setTimeout(() => marker.classList.add("active"), index * 350));
        });
        root.querySelectorAll(".export-route").forEach((route, index) => {
          timers.push(setTimeout(() => route.classList.add("active"), 1700 + index * 250));
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(root);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-6xl p-3 sm:p-5 lg:p-7"
    >
      <div className="relative z-10 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element -- markers are positioned over the SVG's intrinsic box */}
        <img
          src="/assets/images/worldMap.svg"
          alt="Global Presence"
          loading="lazy"
          decoding="async"
          draggable="false"
          className="block w-full select-none opacity-35"
        />

        {/* India — export origin */}
        <div className="pointer-events-none absolute left-[72.1%] top-[52.1%] z-30 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8720F]/10 blur-3xl" />
          <span className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-[#E8720F]/40" />
          <span className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-[#E8720F]/20 [animation-delay:700ms]" />
          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#E8720F] shadow-[0_0_40px_rgba(232,114,15,.8)]">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 shadow-[0_15px_35px_rgba(0,0,0,.35)] ${labelClass}`}>
            Export Origin
          </div>
        </div>

        {/* Export routes */}
        <svg viewBox="0 0 1271 635" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
          {ROUTES.map((route) => (
            <path
              key={route.id}
              id={route.id}
              className="export-route"
              d={route.d}
              fill="none"
              stroke="#E8720F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          ))}
        </svg>

        {/* Markets */}
        {markets.map(({ name, x, y }) => (
          <div key={name} className="market-marker group z-20" style={{ left: x, top: y, transform: "translate(-50%,-50%)" }}>
            <div
              className={`pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 shadow-[0_12px_35px_rgba(0,0,0,.35)] transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100 ${labelClass}`}
            >
              {name}
            </div>
            <span className="absolute bottom-5 left-1/2 h-5 w-px -translate-x-1/2 bg-[#E8720F]/60 opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#E8720F]/15" />
            <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8720F]/40" />
            <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#E8720F]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
