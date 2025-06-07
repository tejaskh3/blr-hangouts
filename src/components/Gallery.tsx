"use client"
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // TODO: Add the images
  const images = [
    { src: '/images/gallery1.jpeg', alt: 'Hangout at Park' },
    { src: '/images/gallery2.jpeg', alt: 'Café Discussion' },
    { src: '/images/gallery3.jpeg', alt: 'Group Photo' },
    { src: '/images/gallery4.jpeg', alt: 'Tech Talk' },
    { src: '/images/gallery5.jpeg', alt: 'Networking' },
    { src: '/images/gallery6.jpeg', alt: 'Chai Time' },
    { src: '/images/gallery7.jpeg', alt: 'Chai Time' },
    { src: '/images/gallery8.jpeg', alt: 'Chai Time' },
    { src: '/images/gallery9.jpeg', alt: 'Chai Time' },
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Gallery
        </h2>
        <p className="mb-12 text-center text-lg text-neutral-400">
          We've hosted 52+ hangouts with groups ranging from 2 to 30 people — and counting.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-purple-500/20"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-opacity duration-300 " />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
              />
              <button
                className="absolute right-4 top-4 rounded-full bg-white p-2 text-black"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="relative">
          <div className="absolute bottom-0 right-0 mb-4 mr-4 flex items-center space-x-2">
            <span className="animate-bounce rounded-full bg-purple-700 px-4 py-2 text-white font-semibold shadow-lg">
              More coming soon...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 