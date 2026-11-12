"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { STATS, WHATSAPP_GROUP_LINK } from "@/constants";
import { buttonStyles } from "./primitives";

const ease = [0.22, 1, 0.36, 1] as const;

const PHOTOS = [
  { src: "/images/gallery1.jpeg", alt: "The community at a food court hangout" },
  { src: "/images/gallery3.jpeg", alt: "Friends after an escape-room win" },
  { src: "/images/gallery9.jpeg", alt: "Group photo at a café" },
];

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            A casual tech community in Bengaluru
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl md:leading-[1.05]">
            New people, new experiences, <span className="text-accent">new learnings.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Developers, designers and tech enthusiasts in BLR, meeting over chai and coffee. No agenda, no slides.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
              Join the WhatsApp group
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#moments" className={buttonStyles.secondary}>
              See the moments
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mt-16 grid grid-cols-3 gap-3 md:mt-20 md:gap-4"
        >
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className={`relative overflow-hidden rounded-2xl bg-surface-2 ${i === 1 ? "aspect-[3/4]" : "aspect-[3/4] translate-y-6 md:translate-y-10"}`}
            >
              <Image src={p.src} alt={p.alt} fill priority sizes="33vw" className="object-cover" />
            </div>
          ))}
        </motion.div>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-y-8 border-t border-line pt-10 text-center md:mt-28 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-fg">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
