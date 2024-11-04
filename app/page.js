"use client"

import Homescreen from "@/components/Homescreen";
import SplashScreen from "@/components/SplashScreen";
import { useEffect, useState } from "react";

export default function Home() {

  const [showSplash, setShowSplash] = useState(true);

  const handleVideoEnd = () => {
    setShowSplash(false);
  };

  useEffect(() => {

    // Hide Splash Screen
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 4000); 

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
    {showSplash ? (
      <SplashScreen onVideoEnd={handleVideoEnd} />
    ) : (
      <>
        {/* Main Home Page Content */}
        <Homescreen />
        
      </>
    )}
  </div>
  );
}
