"use client"
import { useEffect, useRef } from "react";

export default function SplashScreen({ onVideoEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("ended", onVideoEnd);
    }

    // Cleanup Func when component unmounts
    return () => {
      if (video) {
        video.removeEventListener("ended", onVideoEnd);
      }
    };
  }, [onVideoEnd]);

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="/video/logo-hiroshima.gif"
        alt="Splash Screen"
        className="w-full h-auto max-w-full object-cover aspect-video"
      />
    </div>
  );
}


// "use client";
// import { useEffect, useState } from "react";

// export default function SplashScreen({ onAnimationEnd }) {
//   const [played, setPlayed] = useState(false); // Track if GIF has played

//   useEffect(() => {
//     // Only run the timer if GIF hasn't played yet
//     if (!played) {
//       const timer = setTimeout(() => {
//         onAnimationEnd(); // Trigger redirect to homepage
//         setPlayed(true); // Set played to true after first play
//       }, 3000); // Adjust time based on GIF length

//       // Cleanup timer when component unmounts
//       return () => clearTimeout(timer);
//     }
//   }, [onAnimationEnd, played]);

//   // If GIF has already played, don't render anything
//   if (played) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <img
//         src="/video/logo-hiroshima.gif"
//         alt="Splash Screen"
//         className="w-full h-auto max-w-full object-cover aspect-video"
//       />
//     </div>
//   );
// }
