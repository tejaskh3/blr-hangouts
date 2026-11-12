"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_GROUP_LINK } from "@/constants";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#moments", label: "Moments" },
  { href: "#journey", label: "Journey" },
  { href: "#friends", label: "Friends" },
  { href: "#crew", label: "Crew" },
];

export function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2" aria-label="BLR Hangouts, back to top">
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="16" cy="9" rx="4.2" ry="6.5" fill="var(--accent)" transform={`rotate(${deg} 16 16)`} />
        ))}
        <circle cx="16" cy="16" r="3" fill="white" />
      </svg>
      <span className="font-semibold tracking-tight">BLR Hangouts</span>
    </a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-colors",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-fg px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Join us
        </a>
      </nav>
    </header>
  );
}
