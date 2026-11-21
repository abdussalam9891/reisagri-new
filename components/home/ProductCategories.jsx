"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonClass } from "@/components/common/button";
import ButtonArrow from "@/components/common/ButtonArrow";
import SectionHeading from "@/components/common/SectionHeading";
import { PRODUCT_CATEGORIES_HEADING } from "@/constants/home";
import { PRODUCT_CATEGORIES } from "@/constants/products";

/**
 * Editorial product index (Olam-style): a numbered list of commodities on one
 * side and a single large image that swaps as you hover/focus each row.
 */
export default function ProductCategories({ className = "" }) {
  const [active, setActive] = useState(0);
  const current = PRODUCT_CATEGORIES[active];

  return (
    <section className={`bg-[#181818] text-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <SectionHeading {...PRODUCT_CATEGORIES_HEADING} align="split" dark />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <ol className="border-t border-white/10">
            {PRODUCT_CATEGORIES.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={item.slug} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="group flex items-center gap-5 py-6 sm:gap-8"
                  >
                    <span
                      className={`w-8 text-sm tabular-nums transition-colors duration-300 ${
                        isActive ? "text-[#E8720F]" : "text-white/35"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Thumbnail only on small screens, where the large preview is hidden */}
                    <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full lg:hidden">
                      <Image src={item.image} alt="" fill sizes="56px" className="object-cover" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-serif text-2xl transition-all duration-300 sm:text-[1.9rem] ${
                          isActive ? "text-white lg:translate-x-2" : "text-white/55"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>

                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isActive ? "rotate-45 text-[#E8720F]" : "text-white/30"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="relative hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                {PRODUCT_CATEGORIES.map((item, index) => (
                  <Image
                    key={item.slug}
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 560px, 0px"
                    className={`object-cover transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                      index === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10">
                  <p className="max-w-md leading-8 text-white/85">{current.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/products" className={buttonClass("outline-light", "mt-12")}>
          View All Products
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
}
