import SectionHeading from "@/components/common/SectionHeading";
import { PROCESS } from "@/constants/home";

export default function Process({ className = "" }) {
  return (
    <section className={`relative overflow-hidden bg-white ${className}`}>
      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <SectionHeading title={PROCESS.title} description={PROCESS.description} />

        <ol className="mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-3">
          {PROCESS.steps.map(({ number, icon: Icon, title, description }, index) => (
            <li key={number} className="group relative flex flex-col items-center text-center">
              {index < PROCESS.steps.length - 1 && (
                <div className="absolute left-[58%] top-9 hidden h-px w-full overflow-hidden xl:block">
                  <div className="absolute inset-0 bg-[#ECECEC]" />
                  <div className="absolute left-0 top-0 h-full w-0 bg-[#E8720F] transition-all duration-700 group-hover:w-full" />
                </div>
              )}

              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#ECECEC] bg-white shadow-xs transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#E8720F] group-hover:bg-[#FFF6EE] group-hover:shadow-[0_20px_40px_rgba(232,114,15,.18)]">
                <Icon className="h-9 w-9 text-[#E8720F] transition-transform duration-500 group-hover:rotate-12" />
              </div>

              <h3 className="mt-8 font-serif text-2xl text-[#181818]">{title}</h3>
              <p className="mt-5 max-w-[280px] leading-8 text-[#666666]">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
