import Lines from "./Lines";

export default function SectionHeading({ badge, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E8720F]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8720F]" />
          {badge}
        </span>
      )}

      <h2 className="mt-4 font-serif text-[2rem] leading-tight text-[#181818] sm:text-[2rem] lg:text-4xl">
        <Lines text={title} />
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#666666]">{description}</p>
      )}
    </div>
  );
}
