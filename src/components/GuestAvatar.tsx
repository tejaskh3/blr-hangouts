"use client";
/* eslint-disable @next/next/no-img-element -- avatars come from unavatar.io, outside next/image's allowed hosts */
import { useState } from "react";

/** X/Twitter avatar via unavatar.io, falling back to initials if it can't load. */
export default function GuestAvatar({ handle, name }: { handle: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  const ring = "h-12 w-12 shrink-0 rounded-full ring-1 ring-line";

  if (failed) {
    return (
      <span aria-hidden className={`${ring} grid place-items-center bg-accent-soft text-base font-medium text-accent`}>
        {initials}
      </span>
    );
  }
  return (
    <img
      src={`https://unavatar.io/twitter/${handle}`}
      alt=""
      width={48}
      height={48}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${ring} bg-surface-2 object-cover`}
    />
  );
}
