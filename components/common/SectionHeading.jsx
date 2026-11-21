import Lines from "./Lines";

/**
 * Section heading. `align="split"` puts the title left and the description
 * right on large screens (editorial layout); "left" and "center" stack them.
 */
export default function SectionHeading({ eyebrow, title, description, align = "center", dark = false }) {
  const titleColor = dark ? "text-white" : "text-[#181818]";
  const bodyColor = dark ? "text-white/60" : "text-[#666666]";

  const eyebrowEl = eyebrow && (
    <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E8720F]">{eyebrow}</span>
  );
  const titleEl = (
    <h2 className={`${eyebrow ? "mt-4" : ""} font-serif text-[2rem] leading-tight lg:text-[2.75rem] ${titleColor}`}>
      <Lines text={title} />
    </h2>
  );

  if (align === "split") {
    return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div>
          {eyebrowEl}
          {titleEl}
        </div>
        {description && <p className={`max-w-md leading-8 ${bodyColor}`}>{description}</p>}
      </div>
    );
  }

  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrowEl}
      {titleEl}
      {description && <p className={`mt-5 max-w-2xl leading-8 ${bodyColor} ${center ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
}
