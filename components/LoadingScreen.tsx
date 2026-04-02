"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const VIDEO_SRC = "https://nbpkoreare.s3.ap-northeast-2.amazonaws.com/videos/intro-logo.mp4";
const MIN_TOTAL_MS = 3000;
const STORAGE_KEY = "nbp_intro_seen";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pageReadyRef = useRef(false);
  const minTimeRef = useRef(false);
  const videoEndedRef = useRef(false);
  const skippedRef = useRef(false);

  const tryComplete = useCallback(() => {
    if (pageReadyRef.current && minTimeRef.current) {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }
  }, [onComplete]);

  // 재방문 시 인트로 스킵
  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        skippedRef.current = true;
        onComplete();
        return;
      }
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // private browsing 등에서 sessionStorage 실패 시 정상 진행
    }
  }, [onComplete]);

  // Gate 1: page fully loaded
  useEffect(() => {
    if (skippedRef.current) return;
    const markReady = () => {
      pageReadyRef.current = true;
      tryComplete();
    };
    if (document.readyState === "complete") {
      markReady();
    } else {
      window.addEventListener("load", markReady, { once: true });
      return () => window.removeEventListener("load", markReady);
    }
  }, [tryComplete]);

  // Gate 2: minimum time + video playback
  useEffect(() => {
    if (skippedRef.current) return;
    const timer = setTimeout(() => {
      minTimeRef.current = true;
      tryComplete();
    }, MIN_TOTAL_MS);

    // Start video
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5;
      video.play().catch(() => {});
    }

    return () => clearTimeout(timer);
  }, [tryComplete]);

  const handleVideoEnded = useCallback(() => {
    videoEndedRef.current = true;
    tryComplete();
  }, [tryComplete]);

  const handleSkip = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onComplete, 600);
  }, [isExiting, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#fefefe] transition-opacity duration-600 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        onEnded={handleVideoEnded}
        className="w-[280px] md:w-[400px]"
      />

      {/* Skip button */}
      <button
        onClick={handleSkip}
        aria-label="인트로 건너뛰기"
        className="absolute bottom-10 right-10 z-50 w-[100px] h-[100px] group hover:opacity-70 transition-opacity duration-300"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow">
          <defs>
            <path id="skipTextCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
          </defs>
          <text fill="#C05010" fontSize="10.5" letterSpacing="3.2" fontFamily="Roboto, sans-serif" fontWeight="500">
            <textPath href="#skipTextCircle" startOffset="75%" textAnchor="middle">NBPKOREA</textPath>
          </text>
          <text fill="#C05010" fontSize="10.5" letterSpacing="3.2" fontFamily="Roboto, sans-serif" fontWeight="500">
            <textPath href="#skipTextCircle" startOffset="25%" textAnchor="middle">NBPKOREA</textPath>
          </text>
          <text fill="#C05010" fontSize="7" fontFamily="Roboto, sans-serif">
            <textPath href="#skipTextCircle" startOffset="0%" textAnchor="middle">·</textPath>
          </text>
          <text fill="#C05010" fontSize="7" fontFamily="Roboto, sans-serif">
            <textPath href="#skipTextCircle" startOffset="50%" textAnchor="middle">·</textPath>
          </text>
        </svg>
        <div className="absolute inset-[22px] rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 14 14" fill="none" className="text-[#C05010]">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  );
}
