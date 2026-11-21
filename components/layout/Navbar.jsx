"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { NAVIGATION } from "@/constants/navigation";
import { CONTACT, LOGO_BLACK, LOGO_WHITE } from "@/constants/site";

const SCROLL_THRESHOLD = 60;
const DRAWER_TRANSITION_MS = 500;

// Pages with a light background at the top get dark navbar text until scrolled.
const DARK_THEME_PATHS = ["/contact", "/privacy-policy", "/terms-and-conditions", "/disclaimer"];

function getActiveSlug(pathname) {
  if (pathname === "/") return "home";
  return NAVIGATION.find((item) => item.href !== "/" && pathname.startsWith(item.href))?.slug;
}

export default function Navbar() {
  const pathname = usePathname();
  const theme = DARK_THEME_PATHS.includes(pathname) ? "dark" : "light";
  const activeSlug = getActiveSlug(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* ---------------- Scroll solidify ---------------- */
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Mobile drawer ---------------- */
  const openDrawer = () => {
    setDrawerMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setDrawerOpen(true)));
  };

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("overflow-hidden");
      return () => document.body.classList.remove("overflow-hidden");
    }
    if (!drawerMounted) return;
    const timer = setTimeout(() => setDrawerMounted(false), DRAWER_TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [drawerOpen, drawerMounted]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e) => e.key === "Escape" && closeDrawer();
    const onResize = () => window.innerWidth >= 1024 && closeDrawer();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [drawerOpen, closeDrawer]);

  /* ---------------- Derived styles ---------------- */
  const lightText = scrolled || theme === "light";
  const textColor = lightText ? "text-white" : "text-[#181818]";
  const logoSrc = lightText ? LOGO_WHITE : LOGO_BLACK;

  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-transparent transition-all duration-500">
      <nav
        id="navbar"
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "h-20 border-white/10 bg-[#181818]/95 shadow-2xl backdrop-blur-2xl"
            : "h-24 border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open Menu"
            aria-expanded={drawerOpen}
            onClick={openDrawer}
            className={`flex items-center justify-center ${textColor} transition-colors duration-300 hover:text-[#E8720F] lg:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="15" y2="18" />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className={`flex items-center ${textColor}`}>
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo swaps on scroll */}
            <img src={logoSrc} alt="REISAGRI" className="h-32 w-auto object-contain" />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-12 lg:flex">
            {NAVIGATION.map((item) => {
              const active = item.slug === activeSlug;
              return (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#E8720F] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#E8720F] after:transition-all after:duration-300 ${
                      active
                        ? "text-[#E8720F] after:scale-x-100 after:opacity-100"
                        : `${textColor} after:scale-x-0 after:opacity-0`
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:ml-10 lg:flex">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E8720F] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#C95F06]"
            >
              Get Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </nav>

      <MobileDrawer
        mounted={drawerMounted}
        open={drawerOpen}
        onClose={closeDrawer}
        activeSlug={activeSlug}
      />
    </header>
  );
}

function MobileDrawer({ mounted, open, onClose, activeSlug }) {
  return (
    <div className={`fixed inset-0 z-[200] ${mounted ? "" : "hidden"}`}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/65 backdrop-blur-[3px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        className={`no-scrollbar absolute left-1/2 top-1/2 z-10 max-h-[calc(100svh-2rem)] w-[calc(100vw-2rem)] max-w-[380px] -translate-x-1/2 overflow-hidden overflow-y-auto rounded-[28px] border border-white/10 bg-[#181818] shadow-[0_30px_100px_rgba(0,0,0,.45)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[calc(100vw-3rem)] sm:rounded-[32px] ${
          open ? "-translate-y-1/2" : "-translate-y-[calc(50%+120vh)]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-1 sm:px-7">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_WHITE} alt="REIS AGRI TRADING" className="h-20 w-auto" />
          </div>

          <button
            type="button"
            aria-label="Close Menu"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 hover:rotate-90 hover:bg-white/5 hover:text-[#E8720F]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4 sm:px-5 sm:py-4">
          <ul className="space-y-1">
            {NAVIGATION.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={item.slug === activeSlug ? "page" : undefined}
                  className={`group flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white/5 hover:text-[#E8720F] ${
                    item.slug === activeSlug ? "text-[#E8720F]" : "text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="border-t border-white/10 px-6 py-5 sm:px-7 sm:py-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Contact</p>
          <div className="mt-3 space-y-2.5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-sm text-white/90 transition-colors duration-300 hover:text-[#E8720F]"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="block text-sm text-white/90 transition-colors duration-300 hover:text-[#E8720F]"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 pb-5 sm:px-7 sm:pb-5">
          <Link
            href="/contact"
            onClick={onClose}
            className="group flex items-center justify-center gap-3 rounded-full bg-[#E8720F] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-[#C95F06]"
          >
            Get Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4 text-center sm:px-7 sm:py-4">
          <p className="text-[10px] text-white/35">© {new Date().getFullYear()} Reis Agri Trading.</p>
          <p className="mt-1 text-[9px] text-white/20">Global Agricultural Commodity Exporter</p>
        </div>
      </aside>
    </div>
  );
}
