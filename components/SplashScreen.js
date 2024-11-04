"use client"
import { useEffect, useRef } from "react";

export default function SplashScreen({ onVideoEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("ended", onVideoEnd);
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (video) {
        video.removeEventListener("ended", onVideoEnd);
      }
    };
  }, [onVideoEnd]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <video
        ref={videoRef}
        src="/video/logo-hiroshima.mp4" // source to video file
        autoPlay
        muted
        className="w-full h-auto max-w-full object-cover aspect-video"
      />
    </div>
  );
}
