import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FamousGuests from '@/components/FamousGuests';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FamousGuests />
      <About />
      <Gallery />
      
      {/* Upcoming Hangout Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-900">
              Next Hangout
            </h2>
            <div className="mb-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                [Event Name]
              </h3>
              <p className="mb-4 text-lg text-gray-600">
                [Date and Time]
              </p>
              <p className="mb-4 text-gray-600">
                [Location]
              </p>
              <a
                href="#rsvp"
                className="inline-block rounded-full bg-black px-8 py-3 text-lg font-semibold text-white transition hover:bg-gray-800"
              >
                RSVP Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            What People Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "Met my cofounder here.",
                author: "Anonymous",
              },
              {
                quote: "Loved the vibes. Informal but useful.",
                author: "Anonymous",
              },
              {
                quote: "I came for chai, stayed for the people.",
                author: "Anonymous",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg"
              >
                <p className="mb-4 text-lg italic text-gray-600">
                  "{testimonial.quote}"
                </p>
                <p className="text-right font-semibold text-gray-900">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Built with ❤️ by <a href="https://x.com/taashuu_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Tejas</a>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/YOUR_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
