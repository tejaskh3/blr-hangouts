import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-black py-24 h-screen">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl md:text-5xl font-extrabold text-white">About NCR Hangouts</h2>
          <p className="mb-6 text-lg md:text-xl text-neutral-300 font-medium">
            We're a casual community of <span className="font-bold text-white">150+ techies</span> in Delhi NCR. No agenda, no slides.<br/>
            Just honest convos over chai, coffee, park benches, Starbucks, malls and good vibes.
          </p>
          <p className="mb-10 text-lg md:text-xl text-neutral-400">
            Started by <span className="font-semibold text-white hover:text-white/80 underline"><a href="https://x.com/taashuu_" target="_blank" rel="noopener noreferrer">Tejas</a></span> and <span className="font-semibold text-white hover:text-white/80 underline"><a href="https://x.com/lakshayman2000" target="_blank" rel="noopener noreferrer">Lakshay</a></span>, this was our way of staying connected
            with real people in tech — now it's a growing tribe.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-900/80 p-8 shadow-lg border border-neutral-800">
              <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-neutral-300">
                Creating authentic connections in the tech community through casual meetups
                and meaningful conversations.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900/80 p-8 shadow-lg border border-neutral-800">
              <h3 className="mb-4 text-2xl font-bold text-white">What We Do</h3>
              <p className="text-neutral-300">
                We do hangouts, we do coffee, we do park benches, we do malls, we do starbucks, we do good vibes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 