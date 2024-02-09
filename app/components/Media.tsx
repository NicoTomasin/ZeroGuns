"use client";
import { useState, useEffect, createRef } from "react";
export default function Media({ video }: { video: string }) {
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    if (videoRef.current) {
      const volume = muted ? 0 : 0.1;
      videoRef.current.volume = volume;
      videoRef.current.play();
    }
  }, [muted, videoRef]);

  const toggleMute = () => {
    setMuted(!muted);
  };
  return (
    <>
      <video ref={videoRef} autoPlay loop id="video-background">
        <source src={video} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className="fixed top-0 flex justify-between items-center w-full p-4">
        <div>
          <a
            href="https://www.instagram.com/zeroguns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram hover:text-accent-100 cursor-pointer hover:scale-105 transition"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>
        <div>
          <button onClick={toggleMute}>
            {muted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-music-off"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
                <path d="M9 17v-8m0 -4v-1h10v11" />
                <path d="M12 8h7" />
                <path d="M3 3l18 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-music"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M9 17v-13h10v13" />
                <path d="M9 8h10" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
