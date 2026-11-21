import SectionHeading from "@/components/common/SectionHeading";
import { WHY_CHOOSE } from "@/constants/home";

export default function WhyChoose({ className = "" }) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <SectionHeading badge={WHY_CHOOSE.badge} title={WHY_CHOOSE.title} description={WHY_CHOOSE.description} />

        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {WHY_CHOOSE.cards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group relative flex flex-row items-start gap-4 rounded-2xl border border-[#E7E3DC] bg-white p-5 shadow-[0_8px_30px_rgba(24,24,24,.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#E8720F]/35 hover:shadow-[0_18px_40px_rgba(232,114,15,.10)] sm:flex-col sm:items-stretch sm:gap-0 sm:p-7 lg:p-8"
            >
              <span className="pointer-events-none absolute bottom-0 left-5 right-5 hidden h-px origin-left scale-x-0 bg-[#E8720F] transition-transform duration-500 ease-out group-hover:scale-x-100 sm:block" />

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-[#E7E3DC] text-[#181818] transition-all duration-300 ease-out group-hover:border-[#E8720F] group-hover:bg-[#E8720F] group-hover:text-white sm:mb-6 sm:h-12 sm:w-12 sm:rounded-xl">
                <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="min-w-0">
                <h3 className="font-serif text-[17px] leading-snug tracking-[-0.01em] text-[#181818] sm:text-[1.35rem]">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-6 text-[#666666] sm:mt-3 sm:text-[15px] sm:leading-7">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
