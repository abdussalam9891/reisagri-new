/**
 * Numbered columns separated by a top rule. Used for process steps and value
 * lists. Steps may carry their own `number`; otherwise they are numbered 01, 02…
 */
export default function StepList({ steps, className = "", dark = false }) {
  const rule = dark ? "border-white/15" : "border-[#D9D4CA]";
  const titleColor = dark ? "text-white" : "text-[#181818]";
  const bodyColor = dark ? "text-white/60" : "text-[#666666]";

  return (
    <ol className={`mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 ${className}`}>
      {steps.map(({ number, title, description }, index) => (
        <li key={title} className={`border-t pt-6 ${rule}`}>
          <span className="font-serif text-3xl text-[#E8720F]">{number ?? String(index + 1).padStart(2, "0")}</span>
          <h3 className={`mt-4 font-serif text-xl ${titleColor}`}>{title}</h3>
          <p className={`mt-2 text-[15px] leading-7 ${bodyColor}`}>{description}</p>
        </li>
      ))}
    </ol>
  );
}
