"use client";   

import { GUESTS } from "@/constants/famousGuests";
import React from "react";
import { GuestCard } from "./GuestCard";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function FamousGuests() {
    const words = [
        {
          text: "Friends",
          className: "text-white",
        },
        {
          text: "&",
          className: "text-white",
        },
        {
          text: "Legends",
          className: "text-white",
        },
        {
          text: "Who've",
          className: "text-white",
        },
        {
          text: "Hung",
          className: "text-white",
        },
        {
          text: "Out",
          className: "text-white",
        },
        {
          text: "With",
          className: "text-white",
        },
        {
          text: "Us",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-3xl md:text-4xl font-bold text-white text-center">
        <TypewriterEffectSmooth words={words} />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {GUESTS.map((guest) => (
            <GuestCard key={guest.handle} guest={guest} />
          ))}
        </div>
      </div>
    </section>
  );
} 


