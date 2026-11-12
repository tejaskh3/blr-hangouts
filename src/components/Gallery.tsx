"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { GALLERY } from "@/constants";
import { Reveal, Section, SectionHeading, Soft } from "./primitives";

// Bento spans for a 4-column grid, in GALLERY order.
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  const current = index === null ? null : GALLERY[index];

  return (
    <Section id="moments" className="bg-surface">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Moments"
          title={
            <>
              52+ hangouts <Soft>and counting.</Soft>
            </>
          }
          lede="Groups ranging from 2 to 30 people: food courts, cafés, escape rooms and late-night walks."
        />
      </div>

      <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {GALLERY.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 0.06} className={`${SPANS[i] ?? ""} ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block h-full w-full overflow-hidden rounded-xl bg-surface-2"
              aria-label={`Open photo: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-left opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-sm text-white">{img.alt}</span>
                <Expand className="h-4 w-4 shrink-0 text-white" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-subtle">
        More coming soon
      </p>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-white/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              key={current.src}
              className="relative h-[78vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-muted">
              {current.alt} <span className="ml-2 text-subtle">{index + 1}/{GALLERY.length}</span>
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-white text-fg transition hover:bg-surface-2"
            >
              <X className="h-5 w-5" />
            </button>
            {[
              { d: -1, label: "Previous photo", Icon: ChevronLeft, pos: "left-3 md:left-6" },
              { d: 1, label: "Next photo", Icon: ChevronRight, pos: "right-3 md:right-6" },
            ].map(({ d, label, Icon, pos }) => (
              <button
                key={d}
                type="button"
                aria-label={label}
                onClick={(e) => {
                  e.stopPropagation();
                  step(d);
                }}
                className={`absolute top-1/2 ${pos} grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-white/90 text-fg transition hover:bg-surface-2`}
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
