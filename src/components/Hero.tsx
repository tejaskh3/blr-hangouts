"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { WHATSAPP_GROUP_LINK } from "@/constants";

function Hero() {
  return (
    <HeroHighlight>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center pt-4 pb-0">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mb-4"
        >
          BLR-Hangouts
        </motion.h1>
        <motion.div
          className="inline-block"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <Highlight className="text-white text-xl md:text-3xl lg:text-4xl font-bold px-4 py-2 bg-[#8b5cf6] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg inline-block">
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              New&nbsp;
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-block"
            >
              people,&nbsp;
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block"
            >
              new&nbsp;
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="inline-block"
            >
              experiences,&nbsp;
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 1 }}
              className="inline-block"
            >
              new&nbsp;
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="inline-block"
            >
              learnings
            </motion.span>
          </Highlight>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300"
        >
          Join our community of passionate developers, designers, and tech enthusiasts in the BLR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600 text-xl"
          >
            Join WhatsApp Group
          </a>
          <button
            disabled
            className="rounded-full bg-gray-300 px-6 py-4 font-semibold text-gray-500 cursor-not-allowed text-xl flex items-center gap-2"
          >
            RSVP for Next Hangout
            <span className="text-sm bg-gray-400 text-white px-2 py-1 rounded-full">Coming Soon</span>
          </button>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}

export default Hero;