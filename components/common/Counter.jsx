"use client";

import { useEffect, useRef } from "react";

const DURATION = 1800;
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

/**
 * Animates a stat such as "25+", "100%" or "24/7" from 0 up to its number
 * once it scrolls into view. Non-numeric values ("Global") render as-is.
 */
export default function Counter({ value, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;

    let rafId;
    let timeoutId;

    // Server HTML carries the real value (for crawlers / no-JS); reset before animating.
    el.textContent = `0${suffix}`;

    const run = () => {
      const start = performance.now();
      const update = (now) => {
        const progress = Math.min((now - start) / DURATION, 1);
        el.textContent = Math.floor(target * easeOutQuart(progress)) + suffix;
        if (progress < 1) rafId = requestAnimationFrame(update);
        else el.textContent = target + suffix;
      };
      rafId = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timeoutId = setTimeout(run, delay);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, suffix, delay]);

  return (
    <Tag ref={ref} className={className}>
      {value}
    </Tag>
  );
}
