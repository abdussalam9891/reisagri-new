"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER = 70;

const OBSERVER_OPTIONS = {
  threshold: 0.15,
  rootMargin: "0px 0px -100px 0px",
};

/**
 * Port of the original reveal.js: every visible `.reveal` element gets
 * `.active` when it scrolls into view, staggered per parent element.
 * Re-runs on every client-side navigation.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    }, OBSERVER_OPTIONS);

    const parentDelays = new Map();

    document.querySelectorAll(".reveal:not(.active)").forEach((item) => {
      if (item.offsetParent === null) return;

      const parent = item.parentElement;
      const delay = parentDelays.get(parent) || 0;

      item.style.transitionDelay = `${delay}ms`;
      parentDelays.set(parent, delay + STAGGER);

      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
