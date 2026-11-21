import Link from "next/link";
import { buttonClass } from "@/components/common/button";
import ButtonArrow from "@/components/common/ButtonArrow";
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
                    className="text-3xl font-medium leading-none tracking-tight text-[#181818] sm:text-4xl"
                  />
                  <div className="mt-2 max-w-[130px] text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-[#777777] sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href={cta.href} className={buttonClass("outline", "mt-9")}>
              {cta.text}
              <ButtonArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
