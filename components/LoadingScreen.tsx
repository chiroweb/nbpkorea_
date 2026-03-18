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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fefefe] transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Video — 원본 비율 그대로, 최대 너비 제한만 */}
      <video
        className="rounded-sm"
        style={{ width: "min(480px, 72vw)", height: "auto" }}
        src="https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com/images/intro-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Counter */}
      <div
        className="mt-6 text-sm tracking-[0.2em] font-light"
        style={{ color: "#888480" }}
      >
        {count}
      </div>
    </div>
  );
}
