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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F7F8] transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Video — 사업분야 이미지 크기 정도, 마스크 처리 */}
      <div
        className="overflow-hidden rounded-sm"
        style={{ width: "min(480px, 72vw)", aspectRatio: "4/3" }}
      >
        <video
          className="w-full h-full object-cover"
          src="https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/images/intro-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

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
