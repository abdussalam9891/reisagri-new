import { Fragment } from "react";

/** Renders "\n"-separated text with <br /> between lines. */
export default function Lines({ text }) {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}
