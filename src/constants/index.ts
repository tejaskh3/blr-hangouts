export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LXJSmKYZaPWIdkon52x0UM";
export const TWITTER_LINK = "https://twitter.com/BLRHangouts";

export const STATS = [
  { value: "150+", label: "techies in the group" },
  { value: "52+", label: "hangouts hosted" },
  { value: "2–30", label: "people per hangout" },
  { value: "Sep ’24", label: "first meetup" },
];

/** The most recently announced hangout. Once `date` has passed, the page says the next one is being planned. */
export const NEXT_HANGOUT = {
  title: "BLR Devs Coffee Meetup",
  date: "2025-06-08T11:00:00+05:30",
  displayDate: "Sunday, June 8th 2025 · 11:00 AM",
  venue: "Starbucks, Khan Market, New Bengaluru",
  rsvpLink: TWITTER_LINK,
};

export const GALLERY = [
  { src: "/images/gallery1.jpeg", alt: "A big group of the community at a food court", w: 1600, h: 1200 },
  { src: "/images/gallery3.jpeg", alt: "Team posing after escaping an escape room", w: 1600, h: 1200 },
  { src: "/images/gallery2.jpeg", alt: "Laptops and coffee at a café table", w: 1280, h: 960 },
  { src: "/images/gallery9.jpeg", alt: "Group photo inside a café", w: 4000, h: 3000 },
  { src: "/images/gallery5.jpeg", alt: "Selfie with friends on a busy street", w: 1160, h: 653 },
  { src: "/images/gallery4.jpeg", alt: "Evening hangout at a café", w: 1600, h: 1200 },
  { src: "/images/gallery7.jpeg", alt: "Walking and talking through a lit-up market lane", w: 1600, h: 900 },
  { src: "/images/gallery8.jpeg", alt: "Late-night selfie with the crew", w: 1600, h: 900 },
  { src: "/images/gallery10.jpeg", alt: "The crew from our very first hangout", w: 1280, h: 720 },
];

export const TIMELINE = [
  {
    title: "First ever hangout",
    date: "15 Sep 2024",
    img: "/images/gallery10.jpeg",
    desc: "Our very first casual meetup in Bengaluru.",
  },
  {
    title: "Coffee & code",
    date: "Oct 2024",
    img: "/images/gallery2.jpeg",
    desc: "A fun session at Starbucks with new friends.",
  },
  {
    title: "Park tech talks",
    date: "Dec 2024",
    img: "/images/gallery3.jpeg",
    desc: "Open-air discussions and networking in the park.",
  },
];
