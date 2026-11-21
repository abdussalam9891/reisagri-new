"use client";

import { useRef, useState } from "react";

export default function AboutVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="block aspect-[4/3] w-full object-cover lg:aspect-[16/9]"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/5" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-4 left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#181818]"
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-4 w-4">
            <path d="M8 5.5v13l10-6.5z" />
          </svg>
        )}
      </button>

    </div>
  );
}
