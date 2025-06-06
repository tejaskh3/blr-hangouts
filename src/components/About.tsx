import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-900">About NCR Hangouts</h2>
          <p className="mb-6 text-lg text-gray-600">
            We're a casual community of 400+ techies in Delhi NCR. No agenda, no slides. 
            Just honest convos over chai, park benches, and good vibes.
          </p>
          <p className="mb-8 text-lg text-gray-600">
            Started by Tejas and [Friend's Name], this was our way of staying connected 
            with real people in tech — now it's a growing tribe.
          </p>
          
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                Creating authentic connections in the tech community through casual meetups 
                and meaningful conversations.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">What We Do</h3>
              <p className="text-gray-600">
                We've hosted 50+ hangouts with groups ranging from 2 to 20 people — 
                from park meetups to café discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 