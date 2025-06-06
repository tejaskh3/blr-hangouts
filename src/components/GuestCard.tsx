"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { GUESTS } from "@/constants/famousGuests";

export function GuestCard({guest}: {guest: typeof GUESTS[number]}) {
  return (
    <CardContainer className="inter-var w-full max-w-xs">
      <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border border-neutral-800 w-full h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {guest.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2"
        >
          {guest.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={`https://unavatar.io/twitter/${guest.handle}`}
            className="h-60 w-full object-fill rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as="a"
            href={guest.link}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:underline"
          >
            View Profile →
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={guest.link}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 transition"
          >
            Follow on X
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
