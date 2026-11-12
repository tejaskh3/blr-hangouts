import { Armchair, Coffee, Gamepad2, Lightbulb } from "lucide-react";
import { WHATSAPP_GROUP_LINK } from "@/constants";
import { Reveal, Section, SectionHeading, Soft } from "./primitives";

const ACTIVITIES = [
  { icon: Coffee, title: "Casual hangouts", desc: "Meetups over chai, coffee and good vibes in parks, cafés and malls." },
  { icon: Gamepad2, title: "Gaming & chit-chat", desc: "Sometimes we just play games, share memes and talk about life." },
  { icon: Lightbulb, title: "Tech talks", desc: "We love sharing knowledge, discussing new tech and learning together." },
  { icon: Armchair, title: "Just hanging out", desc: "No agenda, no reason. Sometimes we just chill. ¯\\_(ツ)_/¯" },
];

const link = "font-medium text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg";

export default function About() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Real people in tech, <Soft>offline.</Soft>
              </>
            }
          />
          <Reveal className="-mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              We&apos;re a casual community of <span className="font-medium text-fg">150+ techies</span> in Bengaluru.
              No agenda, no slides. Just honest convos over chai, coffee, park benches, Starbucks, malls and good
              vibes.
            </p>
            <p>
              Started by{" "}
              <a href="https://x.com/taashuu_" target="_blank" rel="noopener noreferrer" className={link}>
                Tejas
              </a>{" "}
              and{" "}
              <a href="https://x.com/lakshayman2000" target="_blank" rel="noopener noreferrer" className={link}>
                Lakshay
              </a>
              , this was our way of staying connected with real people in tech. Now it&apos;s a growing tribe.
            </p>
            <p>
              Want in?{" "}
              <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className={link}>
                Join the WhatsApp group
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {ACTIVITIES.map((a) => (
            <div key={a.title} className="bg-white p-6">
              <a.icon className="mb-4 h-5 w-5 text-accent" strokeWidth={1.75} />
              <h3 className="mb-1.5 font-medium text-fg">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
