"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqAccordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {questions.map(({ question, answer }, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div
            key={question}
            className={`overflow-hidden border-b transition-all duration-500 ${open ? "border-[#E8720F]" : "border-[#E8E8E8]"}`}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
              className="group flex w-full items-center justify-between gap-8 py-8 text-left"
            >
              {/* className on .reveal elements must stay static: the observer adds `.active` imperatively */}
              <h3 className="reveal reveal-left text-xl font-medium leading-relaxed">
                <span className={`transition-colors duration-300 ${open ? "text-[#E8720F]" : "text-[#181818]"}`}>
                  {question}
                </span>
              </h3>
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "rotate-45 border-[#E8720F] bg-[#E8720F]" : "border-[#E5E5E5] bg-white"
                }`}
              >
                <Plus className={`h-5 w-5 transition-all duration-500 ${open ? "text-white" : "text-[#181818]"}`} />
              </div>
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="reveal reveal-left overflow-hidden">
                <p className="pb-8 pr-16 leading-8 text-[#666666]">{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
