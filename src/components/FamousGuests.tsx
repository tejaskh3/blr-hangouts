import { ArrowUpRight } from "lucide-react";
import { GUESTS } from "@/constants/famousGuests";
import GuestAvatar from "./GuestAvatar";
import { Reveal, Section, SectionHeading, Soft } from "./primitives";

export default function FamousGuests() {
  return (
    <Section id="friends" className="bg-surface">
      <SectionHeading
        eyebrow="Friends & legends"
        title={
          <>
            Who&apos;ve hung out <Soft>with us.</Soft>
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GUESTS.map((g, i) => (
          <Reveal key={g.handle} delay={(i % 3) * 0.08}>
            <a
              href={g.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition duration-300 hover:border-line-strong hover:shadow-sm"
            >
              <div className="relative flex items-center gap-4">
                <GuestAvatar handle={g.handle} name={g.name} />
                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-fg">{g.name}</h3>
                  <p className="text-sm text-subtle">@{g.handle}</p>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="relative mt-5 leading-relaxed text-muted">{g.description}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
