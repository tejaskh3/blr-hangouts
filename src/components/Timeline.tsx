import Image from "next/image";
import { TIMELINE } from "@/constants";
import { Reveal, Section, SectionHeading, Soft } from "./primitives";

export default function Timeline() {
  return (
    <Section id="journey">
      <SectionHeading
        eyebrow="Our journey"
        align="center"
        title={
          <>
            From one table to <Soft>a tribe.</Soft>
          </>
        }
      />

      <ol className="relative mx-auto max-w-4xl">
        <div
          aria-hidden
          className="absolute bottom-0 left-[19px] top-2 w-px bg-line-strong md:left-1/2"
        />
        {TIMELINE.map((item, i) => {
          const right = i % 2 === 1;
          return (
            <li key={item.title} className="relative mb-14 pl-14 md:mb-20 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span
                aria-hidden
                className="absolute left-[12px] top-3 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-accent bg-white md:left-1/2 md:-translate-x-1/2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <Reveal className={right ? "md:col-start-2" : "md:text-right"}>
                <p className="text-sm font-medium text-accent">{item.date}</p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-fg">{item.title}</h3>
                <p className="mt-2 text-muted">{item.desc}</p>
              </Reveal>
              <Reveal
                delay={0.1}
                className={`mt-5 md:mt-0 ${right ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-2">
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 90vw, 420px" className="object-cover" />
                </div>
              </Reveal>
            </li>
          );
        })}
        <li className="relative pl-14 md:pl-0 md:text-center">
          <span
            aria-hidden
            className="absolute left-[12px] top-1 h-[15px] w-[15px] rounded-full border-2 border-dashed border-line-strong bg-white md:left-1/2 md:-translate-x-1/2"
          />
          <p className="relative inline-block bg-white text-muted md:mt-8 md:px-3">And the next chapter is yours.</p>
        </li>
      </ol>
    </Section>
  );
}
