import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FamousGuests from '@/components/FamousGuests';
import { Linkedin, Twitter, Github } from "lucide-react";
import Timeline from '@/components/Timeline';
import Maintainers from '@/components/Maintainers';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FamousGuests />
      <About />
      <Gallery />
      <Timeline />
      <Maintainers />
      
      {/* Upcoming Hangout Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-white">
              Next Hangout
            </h2>
            <div className="mb-8 rounded-lg bg-neutral-900 p-6 border border-neutral-800">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                BLR Devs Coffee Meetup
              </h3>
              <p className="mb-4 text-lg text-neutral-400">
                Sunday, June 8th 2025 at 11:00 AM
              </p>
              <p className="mb-4 text-neutral-400">
                Starbucks, Khan Market, New Bengaluru
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href="https://twitter.com/BLRHangouts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <a
                href={"https://twitter.com/BLRHangouts"}
                target="_blank"
                className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition hover:bg-gray-200"
              >
                RSVP Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            What People Say
          </h2>
          <div className="flex justify-center">
            <div className="rounded-lg bg-neutral-900 p-8 border border-neutral-800 text-center">
              <p className="text-neutral-400 text-lg">
                Testimonials coming soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLR Hangouts under NCR Hangouts Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About BLR Hangouts
          </h2>
          <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
            BLR Hangouts is a community initiative for Bangalore, created as a subsidiary of <span className="font-semibold text-purple-400">NCR Hangouts</span>.<br />
            We are all about connecting, learning, and growing together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://ncrhangouts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-6 py-3 text-lg font-semibold text-black transition hover:bg-gray-200"
            >
              Visit NCR Hangouts
            </a>
            <a
              href="https://twitter.com/ncrHangouts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-600"
            >
              Follow NCR Hangouts on Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Built with <span className="animate-pulse inline-block">❤️</span> by <a href="https://x.com/taashuu_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 underline">Tejas</a>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/tejaskh3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/taashuu_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/tejaskh3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
