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
      <div className="fixed bottom-0 right-0 p-2">
        <div className="mb-4">
          <button onClick={toggleMute}>
            {muted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-device-speaker-off"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
                <path d="M11.114 11.133a3 3 0 1 0 3.754 3.751" />
                <path d="M12 7v.01" />
                <path d="M3 3l18 18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-device-speaker "
                width="50"
                height="50"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 7l0 .01" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
