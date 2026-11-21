import { Fragment } from "react";

/** Wraps `*phrase*` segments in the accent colour (two-tone headings). */
function withAccent(line) {
  return line.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") && part.length > 2 ? (
      <span key={i} className="text-[#E8720F]">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    )
  );
}

/**
 * Renders "\n"-separated text with <br /> between lines.
 * `*phrase*` renders the phrase in the accent colour.
 */
export default function Lines({ text }) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {withAccent(line)}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
