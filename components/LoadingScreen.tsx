"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/intro-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Counter */}
      <div className="absolute inset-0 flex items-end justify-end pb-12 pr-12">
        <span
          className="text-[clamp(3rem,8vw,7rem)] font-light tracking-[0.1em] leading-none text-white"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}
