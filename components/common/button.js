/**
 * One button style for the whole site. The only hover feedback is a colour
 * change plus the arrow nudging right (see <ButtonArrow />). No lifts, glows
 * or shape changes.
 */
const VARIANTS = {
  primary: "bg-[#E8720F] text-white hover:bg-[#C95F06]",
  dark: "bg-[#181818] text-white hover:bg-[#E8720F]",
  outline: "border border-[#181818]/25 text-[#181818] hover:border-[#181818] hover:bg-[#181818] hover:text-white",
  "outline-light": "border border-white/30 text-white hover:border-white hover:bg-white hover:text-[#181818]",
};

export function buttonClass(variant = "primary", extra = "") {
  return `group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 sm:px-8 sm:py-4 sm:text-[13px] ${VARIANTS[variant]} ${extra}`;
}
