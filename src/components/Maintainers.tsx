import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Reveal, Section, SectionHeading, Soft } from "./primitives";

const MAINTAINERS = [
  {
    name: "Tejas",
    img: "/tejas.jpg",
    role: "Community builder · Full-stack dev",
    socials: {
      twitter: "https://twitter.com/taashuu_",
      linkedin: "https://linkedin.com/in/tejaskh3",
      github: "https://github.com/tejaskh3",
      email: "mailto:tejaskh3@gmail.com",
    },
    description:
      "Building communities and products. Always up for a coffee and a chat about tech, startups, or open source.",
  },
  {
    name: "Lakshay Manchanda",
    img: "/lakshay.jpg",
    role: "Community builder · Full-stack dev",
    socials: {
      twitter: "https://twitter.com/lakshayman2000",
      linkedin: "https://linkedin.com/in/lakshaymanchanda",
      github: "https://github.com/lakshayman2000",
      email: "mailto:lakshaymanchanda@gmail.com",
    },
    description:
      "Backend, infra, and making things work. Ping me for collabs or backend memes. I'm a full stack dev and a community builder.",
  },
];

const iconLink =
  "grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-line-strong hover:bg-surface-2 hover:text-fg";

function Socials({ s }: { s: { twitter: string; linkedin: string; github: string } }) {
  return (
    <div className="flex gap-2">
      <a href={s.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className={iconLink}>
        <Twitter className="h-4 w-4" />
      </a>
      <a href={s.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
        <Linkedin className="h-4 w-4" />
      </a>
      <a href={s.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
        <Github className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function Maintainers() {
  return (
    <Section id="crew">
      <SectionHeading
        eyebrow="The crew"
        title={
          <>
            The folks who <Soft>keep the chai flowing.</Soft>
          </>
        }
      />

      <div className="grid gap-5 md:grid-cols-2">
        {MAINTAINERS.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 sm:p-8">
              <div className="flex items-center gap-5">
                <Image
                  src={m.img}
                  alt={m.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-line"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{m.name}</h3>
                  <p className="text-sm text-muted">{m.role}</p>
                </div>
              </div>
              <p className="mt-6 flex-1 leading-relaxed text-muted">{m.description}</p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <Socials s={m.socials} />
                <a
                  href={m.socials.email}
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  <Mail className="h-4 w-4" />
                  Collaborate
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Supporters */}
      <div className="mt-24">
        <SectionHeading
          eyebrow="Our supporters"
          title={
            <>
              With <Soft>gratitude.</Soft>
            </>
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <figure className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-8">
              <span aria-hidden className="absolute right-7 top-4 text-7xl leading-none text-accent/15">
                &ldquo;
              </span>
              <blockquote className="relative pr-10 text-xl font-medium leading-snug tracking-tight text-fg">
                He was the one who encouraged me to start things out.
              </blockquote>
              <p className="mt-4 text-muted">
                Thank you for always believing in us and giving us the push we needed to begin this journey. 🫶🏻
              </p>
              <figcaption className="mt-auto flex items-center gap-4 pt-8">
                <Image
                  src="/ankush.jpg"
                  alt="Ankush Dharkar"
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full object-cover ring-1 ring-line-strong"
                />
                <div>
                  <p className="font-semibold text-fg">Ankush Dharkar</p>
                  <a
                    href="https://x.com/ankushdharkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-fg"
                  >
                    Follow on X
                  </a>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/rds.jpg"
                  alt="Real Dev Squad logo"
                  width={52}
                  height={52}
                  className="h-13 w-13 rounded-full bg-white object-contain p-1.5 ring-1 ring-line"
                />
                <h3 className="text-lg font-semibold tracking-tight text-fg">Real Dev Squad</h3>
              </div>
              <p className="mt-6 flex-1 leading-relaxed text-muted">
                Real Dev Squad is a non-profit organization that helps people learn and collaborate together. A
                rag-tag team of professionals & students, learning and collaborating together.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <Socials
                  s={{
                    twitter: "https://x.com/realdevsquad",
                    linkedin: "https://www.linkedin.com/company/realdevsquad",
                    github: "https://github.com/realdevsquad",
                  }}
                />
                <a
                  href="https://realdevsquad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition hover:bg-surface-2"
                >
                  Visit website
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
