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
    <div className="group relative overflow-hidden rounded-bl-[48px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[48px] bg-black shadow-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,.18)] sm:rounded-bl-[72px] sm:rounded-tr-[72px] lg:rounded-bl-[96px] lg:rounded-tr-[96px]">
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
        className="block aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:aspect-[16/9]"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/5" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8720F] text-white shadow-[0_12px_35px_rgba(0,0,0,.25)] transition-all duration-300 hover:scale-110 hover:bg-[#f68b32] active:scale-95 sm:h-20 sm:w-20"
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 sm:h-7 sm:w-7">
            <path d="M8 5.5v13l10-6.5z" />
          </svg>
        )}
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#E8720F] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
