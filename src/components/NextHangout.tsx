"use client";

import { useEffect, useState } from "react";
import { CalendarDays, MapPin, MessageCircle, Twitter } from "lucide-react";
import { NEXT_HANGOUT, TWITTER_LINK, WHATSAPP_GROUP_LINK } from "@/constants";
import { Eyebrow, Reveal, Section, Soft, buttonStyles } from "./primitives";

export default function NextHangout() {
  // Decided on the client so a statically built page never shows a past date as "next".
  const [upcoming, setUpcoming] = useState<boolean | null>(null);
  useEffect(() => setUpcoming(new Date(NEXT_HANGOUT.date).getTime() > Date.now()), []);

  return (
    <Section id="next">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-12">

          <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div className={upcoming === null ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
              {upcoming ? (
                <>
                  <Eyebrow>Next hangout</Eyebrow>
                  <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{NEXT_HANGOUT.title}</h2>
                  <ul className="mt-6 space-y-3 text-muted">
                    <li className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-accent" /> {NEXT_HANGOUT.displayDate}
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent" /> {NEXT_HANGOUT.venue}
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <Eyebrow>Next hangout</Eyebrow>
                  <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    The next one&apos;s <Soft>brewing.</Soft>
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-muted">
                    Dates and venues drop in the WhatsApp group first. Hop in so you don&apos;t miss it.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              {upcoming ? (
                <a href={NEXT_HANGOUT.rsvpLink} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                  RSVP now
                </a>
              ) : (
                <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                  <MessageCircle className="h-4 w-4" />
                  Join the WhatsApp group
                </a>
              )}
              <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                <Twitter className="h-4 w-4" />
                Follow @BLRHangouts
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
