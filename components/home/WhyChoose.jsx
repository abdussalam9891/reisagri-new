import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import { WHY_CHOOSE } from "@/constants/home";

/** Split image/text band with a plain hairline-divided list. */
export default function WhyChoose({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-auto lg:h-full lg:min-h-[640px]">
          <Image
            src={WHY_CHOOSE.image}
            alt={WHY_CHOOSE.imageAlt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading title={WHY_CHOOSE.title} description={WHY_CHOOSE.description} align="left" />

          <dl className="mt-10 border-t border-[#E7E3DC]">
            {WHY_CHOOSE.points.map(({ title, description }) => (
              <div key={title} className="grid gap-1 border-b border-[#E7E3DC] py-5 sm:grid-cols-[200px_1fr] sm:gap-8">
                <dt className="font-serif text-lg text-[#181818]">{title}</dt>
                <dd className="text-[15px] leading-7 text-[#666666]">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
