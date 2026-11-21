"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_LINKS, LEGAL_LINKS, NAVIGATION, SOCIAL_LINKS } from "@/constants/navigation";
import { CONTACT, LOGO_WHITE } from "@/constants/site";
import { WhatsAppIcon } from "@/components/common/icons";

const SOCIAL_ICONS = {
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.12c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V22h-3V8z" />
    </svg>
  ),
  whatsapp: <WhatsAppIcon className="h-5 w-5" />,
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  ),
};

const linkClass = "text-white/60 transition-colors duration-300 hover:text-[#E8720F]";
const subheadingClass = "text-xs font-semibold uppercase tracking-[0.18em] text-white";

export default function Footer() {
  // Mobile accordion: one section open at a time. Desktop (lg+) always shows all.
  const [openSection, setOpenSection] = useState(null);
  const toggle = (name) => setOpenSection((current) => (current === name ? null : name));

  return (
    <footer className="bg-[#181818] text-white">
      <section className="bg-[#181818]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-16 lg:px-8 lg:py-14">
          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_WHITE} alt="REISAGRI" className="h-32 w-auto object-contain" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Connecting trusted producers with global buyers through reliable sourcing, quality
              assurance and seamless agricultural commodity exports.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.slug}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-[#E8720F] hover:bg-[#E8720F]/10 hover:text-[#E8720F]"
                >
                  {SOCIAL_ICONS[social.slug]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <FooterSection title="Navigate" open={openSection === "navigate"} onToggle={() => toggle("navigate")}>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.slug}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact" open={openSection === "contact"} onToggle={() => toggle("contact")}>
            <div className="space-y-6">
              <div>
                <h4 className={subheadingClass}>Address</h4>
                <p className="mt-3 leading-7 text-white/60">
                  {CONTACT.addressLines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < CONTACT.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <h4 className={subheadingClass}>Phone</h4>
                <a href={CONTACT.phoneHref} className={`mt-3 inline-block ${linkClass}`}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div>
                <h4 className={subheadingClass}>Email</h4>
                <a href={`mailto:${CONTACT.email}`} className={`mt-3 inline-block ${linkClass}`}>
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </FooterSection>

          {/* Company */}
          <FooterSection title="Company" open={openSection === "company"} onToggle={() => toggle("company")}>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>
      </section>

      {/* Copyright */}
      <div className="grid grid-cols-1 items-center gap-4 border-t border-white/10 px-6 py-5 text-center lg:grid-cols-3 lg:px-8 lg:text-left">
        <p className="text-xs text-white/40 lg:justify-self-start">
          © {new Date().getFullYear()} Reis Agri Trading Private Limited. All rights reserved.
        </p>

        <nav aria-label="Legal" className="lg:justify-self-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/40 transition-colors duration-300 hover:text-[#E8720F]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-white/30 lg:justify-self-end">
          Designed &amp; Developed by
          <a
            href="https://wa.me/919006143335"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-white/45 transition-colors duration-300 hover:text-[#E8720F]"
          >
            Abdus
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterSection({ title, open, onToggle, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-2 lg:pointer-events-none lg:cursor-default"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-5 w-5 text-white/60 transition-transform duration-300 lg:hidden ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className={`pt-5 text-sm lg:block ${open ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
}
