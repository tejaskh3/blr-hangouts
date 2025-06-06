"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

function Hero() {
  return (
    <HeroHighlight>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
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
          NCR-Hangouts
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <Highlight className="text-white text-xl md:text-3xl lg:text-4xl font-bold px-4 py-2 bg-[#8b5cf6] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
            New people, new experiences, new learnings
          </Highlight>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300"
        >
          Join our community of passionate developers, designers, and tech enthusiasts in the NCR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <a
        //   TODO: Add the whatsapp group link
            href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600 text-xl"
          >
            Join WhatsApp Group
          </a>
          <a
            href="#rsvp"
            className="rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:bg-gray-100 text-xl"
          >
            RSVP for Next Hangout
          </a>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}

export default Hero;