import { WHATSAPP_GROUP_LINK } from "@/constants";

const activities = [
  {
    icon: "☕️",
    title: "Casual Hangouts",
    desc: "Meetups over chai, coffee, and good vibes in parks, cafes, and malls.",
  },
  {
    icon: "🎮",
    title: "Gaming & Chit Chat",
    desc: "Sometimes we just play games, share memes, and talk about life.",
  },
  {
    icon: "💡",
    title: "Tech Talks",
    desc: "We love sharing knowledge, discussing new tech, and learning together.",
  },
  {
    icon: "🤷‍♂️",
    title: "Just Hanging Out",
    desc: "No agenda, no reason—sometimes we just chill. ¯\\_(ツ)_/¯",
  },
];

const About = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl md:text-5xl font-extrabold text-white">About NCR Hangouts</h2>
          <p className="mb-6 text-lg md:text-xl text-neutral-300 font-medium">
            We&apos;re a casual community of <span className="font-bold text-white">150+ techies</span> in Delhi NCR. No agenda, no slides.<br/>
            Just honest convos over chai, coffee, park benches, Starbucks, malls and good vibes.
          </p>
          <p className="mb-10 text-lg md:text-xl text-neutral-400">
            Started by <span className="font-semibold text-white hover:text-white/80 underline"><a href="https://x.com/taashuu_" target="_blank" rel="noopener noreferrer">Tejas</a></span> and <span className="font-semibold text-white hover:text-white/80 underline"><a href="https://x.com/lakshayman2000" target="_blank" rel="noopener noreferrer">Lakshay</a></span>, this was our way of staying connected
            with real people in tech — now its a growing tribe. want to join us? <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 underline">follow us on twitter</a>
          </p>

          {/* Activities Section */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {activities.map((act) => (
              <div
                key={act.title}
                className="flex flex-col items-center bg-neutral-900/80 p-8 rounded-2xl border border-neutral-800 shadow-lg"
              >
                <span className="text-4xl mb-4">{act.icon}</span>
                <h3 className="mb-2 text-xl font-bold text-white">{act.title}</h3>
                <p className="text-neutral-300 text-center">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 