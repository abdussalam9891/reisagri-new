import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { PRODUCT_CATEGORIES_HEADING } from "@/constants/home";
import { PRODUCT_CATEGORIES } from "@/constants/products";

export default function ProductCategories({ className = "" }) {
  return (
    <section className={`bg-[#F8F8F5] ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <SectionHeading {...PRODUCT_CATEGORIES_HEADING} />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCT_CATEGORIES.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group relative block overflow-hidden rounded-[32px] bg-[#181818] shadow-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,.22)]"
            >
              <div className="relative h-[440px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent transition-all duration-500 group-hover:from-black/90" />
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#E8720F] transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="mt-4 font-serif text-4xl text-white">{item.title}</h3>
                <p className="mt-5 max-w-[90%] leading-8 text-white/75">{item.description}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#E8720F]">Explore</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E8720F] group-hover:bg-[#E8720F]">
                    <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
