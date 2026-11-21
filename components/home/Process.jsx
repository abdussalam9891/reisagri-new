import SectionHeading from "@/components/common/SectionHeading";
import StepList from "@/components/common/StepList";
import { PROCESS } from "@/constants/home";

/** Numbered horizontal timeline: big numerals and a rule, no tiles. */
export default function Process({ className = "" }) {
  return (
    <section className={`bg-[#F8F8F5] ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <SectionHeading title={PROCESS.title} description={PROCESS.description} align="split" />
        <StepList steps={PROCESS.steps} className="lg:grid-cols-6" />
      </div>
    </section>
  );
}
