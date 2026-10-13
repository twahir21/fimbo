"use client";

import { useId, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export type AccordionItem = { id: string; title: string; summary?: string; body: ReactNode };

export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<string | null>(items[defaultOpen]?.id ?? null);
  const uid = useId();

  return (
    <div className="border-t-2 border-black">
      {items.map((it) => {
        const isOpen = open === it.id;
        return (
          <div key={it.id} className="border-b border-black/20">
            <h3>
              <button
                type="button"
                id={`${uid}-${it.id}-btn`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-${it.id}-panel`}
                onClick={() => setOpen(isOpen ? null : it.id)}
                className="flex w-full items-center justify-between gap-6 px-2 py-6 text-left md:px-4"
              >
                <span>
                  <span className="block font-display text-2xl font-bold md:text-3xl">{it.title}</span>
                  {it.summary && <span className="mt-1 block text-black/60">{it.summary}</span>}
                </span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className={`shrink-0 text-3xl ${isOpen ? "text-signal" : ""}`}>
                  <FiPlus aria-hidden />
                </motion.span>
              </button>
            </h3>
            <motion.div
              id={`${uid}-${it.id}-panel`}
              role="region"
              aria-labelledby={`${uid}-${it.id}-btn`}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
              inert={!isOpen}
            >
              <div className="px-2 pb-8 md:px-4">{it.body}</div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
