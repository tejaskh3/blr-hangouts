"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Fades its children in once, when they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mb-3 text-sm font-medium text-accent", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("mb-12", align === "center" && "mx-auto max-w-2xl text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {lede && (
        <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors";

export const buttonStyles = {
  primary: cn(buttonBase, "bg-fg text-white hover:bg-neutral-800"),
  secondary: cn(buttonBase, "border border-line-strong bg-white text-fg hover:bg-surface-2"),
};

/** Muted second half of a heading, Vercel-style. */
export function Soft({ children }: { children: React.ReactNode }) {
  return <span className="text-subtle">{children}</span>;
}
