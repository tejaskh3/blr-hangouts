"use client";

import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const MAINTAINERS = [
  {
    name: "Tejas ",
    img: "tejas.jpg", 
    role: "Community Builder, Full Stack Dev",
    socials: {
      twitter: "https://twitter.com/taashuu_",
      linkedin: "https://linkedin.com/in/tejaskh3",
      github: "https://github.com/tejaskh3",
      email: "mailto:tejaskh3@gmail.com",
    },
    description: "Building communities and products. Always up for a coffee and a chat about tech, startups, or open source.",
  },
  {
    name: "Lakshay Manchanda",
    img: "lakshay.jpg", 
    role: "Community Builder, Full Stack Dev",
    socials: {
      twitter: "https://twitter.com/lakshayman2000",
      linkedin: "https://linkedin.com/in/lakshaymanchanda",
      github: "https://github.com/lakshayman2000",
      email: "mailto:lakshaymanchanda@gmail.com",
    },
    description: "Backend, infra, and making things work. Ping me for collabs or backend memes. I'm a full stack dev and a community builder.",
  },
];

export default function Maintainers() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Maintainers
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {MAINTAINERS.map((m) => (
            <div
              key={m.name}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col items-center w-full max-w-xs shadow-lg"
            >
              <img
                src={m.img}
                alt={m.name}
                width={96}
                height={96}
                className="rounded-full mb-4 object-cover border-4 border-purple-500/40"
              />
              <div className="text-xl font-bold text-white">{m.name}</div>
              <div className="text-purple-300 text-sm mb-2">{m.role}</div>
              <p className="text-neutral-300 text-center mb-4">{m.description}</p>
              <div className="flex space-x-4 mb-4">
                <a href={m.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-500" />
                </a>
                <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-blue-300 hover:text-blue-400" />
                </a>
                <a href={m.socials.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
              <a
                href={m.socials.email}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
              >
                <Mail className="w-4 h-4 mr-2" />
                Collaborate
              </a>
            </div>
          ))}
        </div>
        {/* Our Supporters section below maintainers */}
        <div className="mt-20 flex flex-col items-center">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white text-center">
            Our Supporters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            {/* Ankush Dharkar */}
            <div className="flex flex-col items-center">
              <img
                src="ankush.jpg"
                alt="Ankush Dharkar"
                width={120}
                height={120}
                className="rounded-full border-4 border-purple-500/40 shadow-lg mb-4"
              />
              <div className="text-xl font-bold text-white mb-2">Ankush Dharkar</div>
              <div
                className="text-purple-200 text-lg text-center max-w-xl"
                style={{
                  fontFamily: "'Pacifico', cursive",
                  fontSize: "1.5rem",
                  lineHeight: "2.2rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                He was the one who encouraged me to start things out.
              </div>
              <div className="text-neutral-400 text-center italic">
                Thank you for always believing in us and giving us the push we needed to begin this journey. 🫶🏻
              </div>
              <div className="text-neutral-400 text-center italic">
                follow him on <a href="https://x.com/ankushdharkar" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 underline">Twitter</a> 
              </div>
            </div>

            {/* Real Dev Squad */}
            <div className="flex flex-col items-center">
              <img
                src="rds.jpg"
                alt="Real Dev Squad"
                width={120}
                height={120}
                className="rounded-full border-4 border-purple-500/40 shadow-lg mb-4 bg-white p-2"
              />
              <div className="text-xl font-bold text-white mb-2">Real Dev Squad</div>
              <div className="text-neutral-300 text-center mb-4">
                Real Dev Squad is non-profit organization that helps people learn and collaborate together. We are a rag-tag team of professionals & students, learning and collaborating together.
              </div>
              <div className="flex space-x-4 mb-4">
                <a href="https://x.com/realdevsquad" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-blue-400 hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/company/realdevsquad" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-blue-300 hover:text-blue-400" />
                </a>
                <a href="https://github.com/realdevsquad" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </div>
              <a
                href="https://realdevsquad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}