"use client";
import Image from "next/image";

const TIMELINE = [
  {
    title: "First Ever Hangout",
    date: "15th Sep 2024",
    img: "/images/gallery10.jpeg",
    desc: "Our very first casual meetup in Bengaluru BLR.",
  },
  {
    title: "Coffee & Code",
    date: "Oct 2024",
    img: "/images/gallery2.jpeg",
    desc: "A fun session at Starbucks with new friends.",
  },
  {
    title: "Park Tech Talks",
    date: "Dec 2024",
    img: "/images/gallery3.jpeg",
    desc: "Open-air discussions and networking in the park.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Our Journey So Far
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500/40 to-transparent -translate-x-1/2" />
          <div className="space-y-16 w-full max-w-2xl z-10">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-purple-500/40 shadow-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-sm text-purple-300 mb-1">{item.date}</div>
                  <p className="text-neutral-300">{item.desc}</p>
                </div>
              </div>
            ))}
            {/* Coming soon badge */}
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-purple-900/40 border-4 border-purple-700/40">
                <span className="animate-bounce text-purple-300 font-bold">?</span>
              </div>
              <div>
                <span className="inline-block rounded-full bg-purple-700 px-4 py-2 text-white font-semibold shadow-lg animate-pulse">
                  More coming soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}