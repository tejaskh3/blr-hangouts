import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Nav";
import { Reveal, Soft } from "./primitives";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      {/* Family band */}
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-accent">Part of the family</p>
            <p className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              BLR Hangouts is the Bengaluru chapter of{" "}
              <Soft>NCR Hangouts.</Soft>
            </p>
            <p className="mt-3 text-muted">We&apos;re all about connecting, learning and growing together.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://ncrhangouts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Visit NCR Hangouts <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/ncrHangouts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition hover:bg-surface-2"
            >
              <Twitter className="h-4 w-4" /> @ncrHangouts
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <Logo />
          <p className="text-sm text-subtle">
            Built with <span className="text-accent">♥</span> by{" "}
            <a
              href="https://x.com/taashuu_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-line-strong underline-offset-4 hover:text-fg"
            >
              Tejas
            </a>
          </p>
          <div className="flex gap-4 text-subtle">
            <a href="https://linkedin.com/in/tejaskh3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-fg">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/taashuu_" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="transition hover:text-fg">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://github.com/tejaskh3" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-fg">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
