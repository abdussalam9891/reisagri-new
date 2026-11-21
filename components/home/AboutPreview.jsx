import Link from "next/link";
import Counter from "@/components/common/Counter";
import Lines from "@/components/common/Lines";
import { ABOUT_PREVIEW } from "@/constants/home";
import AboutVideo from "./AboutVideo";

export default function AboutPreview({ className = "" }) {
  const { title, description, video, poster, stats, cta } = ABOUT_PREVIEW;

  return (
    <div className={className}>
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-20 xl:px-10 xl:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <AboutVideo src={video} poster={poster} />

          <div>
            <h2 className="font-serif text-[2rem] leading-[1.08] tracking-[-0.02em] text-[#181818] sm:text-[2rem] lg:text-[2rem] xl:text-[2.25rem]">
              <Lines text={title} />
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#666666] sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-7 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="min-w-0">
                  <Counter
                    value={stat.value}
                    delay={index * 120}
                    className="text-3xl font-medium leading-none tracking-tight text-[#E8720F] transition-colors duration-300 sm:text-4xl"
                  />
                  <div className="mt-2 max-w-[130px] text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-[#777777] sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={cta.href}
              className="group/cta relative mt-9 inline-flex items-center justify-center overflow-hidden rounded-full border border-[#E8720F] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#181818] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:rounded-[6px_22px_6px_22px] hover:shadow-[0_12px_30px_rgba(232,114,15,.18)] sm:px-8 sm:py-4 sm:text-sm"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#E8720F] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:scale-x-100" />
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover/cta:text-white">
                {cta.text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
