"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq } from "@/lib/faqs";

export default function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: Faq[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            className={`faq-item ${isOpen ? "is-open" : ""}`}
            key={item.q}
          >
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-button-${index}`}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="faq-q__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="faq-q__text">{item.q}</span>
              <span className="faq-q__icon" aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="faq-a"
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="faq-a__inner">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
